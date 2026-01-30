import React, { useEffect, useState, useRef, useMemo } from 'react';

interface BloodDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

interface BloodDripFrameProps {
  children: React.ReactNode;
  /** Number of blood drips along the bottom edge */
  dripCount?: number;
  /** Maximum distance drips fall before fading (px) */
  dripDistance?: number;
  /** Base color for blood effect */
  bloodColor?: string;
  /** Additional CSS classes for the frame */
  className?: string;
  /** Frame border style */
  borderStyle?: 'gothic' | 'simple' | 'ornate' | 'none';
  /** Intensity of the drip effect (affects opacity and frequency) */
  intensity?: 'subtle' | 'medium' | 'heavy';
  /** Whether drips are currently active */
  active?: boolean;
}

const BloodDripFrame: React.FC<BloodDripFrameProps> = ({
  children,
  dripCount = 8,
  dripDistance = 60,
  bloodColor = '#8B0000',
  className = '',
  borderStyle = 'gothic',
  intensity = 'medium',
  active = true,
}) => {
  const [drops, setDrops] = useState<BloodDrop[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);
  const dropIdRef = useRef(0);

  const intensityConfig = useMemo(() => ({
    subtle: { opacity: 0.6, interval: 3000, countMultiplier: 0.5 },
    medium: { opacity: 0.8, interval: 2000, countMultiplier: 1 },
    heavy: { opacity: 1, interval: 1000, countMultiplier: 1.5 },
  }), []);

  const config = intensityConfig[intensity];
  const actualDripCount = Math.round(dripCount * config.countMultiplier);

  useEffect(() => {
    if (!active) {
      setDrops([]);
      return;
    }

    const generateDrop = (): BloodDrop => ({
      id: dropIdRef.current++,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 1.5,
      size: 3 + Math.random() * 4,
    });

    // Initial drops
    const initialDrops = Array.from({ length: actualDripCount }, generateDrop);
    setDrops(initialDrops);

    // Continuously regenerate drops
    const interval = setInterval(() => {
      setDrops(prev => {
        const newDrops = [...prev];
        const replaceIndex = Math.floor(Math.random() * newDrops.length);
        newDrops[replaceIndex] = generateDrop();
        return newDrops;
      });
    }, config.interval);

    return () => clearInterval(interval);
  }, [active, actualDripCount, config.interval]);

  const borderStyles = {
    gothic: {
      border: '2px solid rgba(139, 0, 0, 0.4)',
      boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 0, 0, 0.2)',
    },
    simple: {
      border: '1px solid rgba(139, 0, 0, 0.3)',
    },
    ornate: {
      border: '3px double rgba(139, 0, 0, 0.5)',
      boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(139, 0, 0, 0.3)',
    },
    none: {},
  };

  return (
    <div
      ref={frameRef}
      className={`blood-drip-frame ${className}`}
      style={{
        position: 'relative',
        ...borderStyles[borderStyle],
        '--blood-color': bloodColor,
        '--drip-distance': `${dripDistance}px`,
        '--blood-opacity': config.opacity,
      } as React.CSSProperties}
    >
      {children}

      {/* Drip container - positioned at bottom, overflow hidden */}
      <div
        className="blood-drip-container"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${dripDistance + 20}px`,
          overflow: 'hidden',
          pointerEvents: 'none',
          transform: 'translateY(100%)',
          zIndex: 10,
        }}
      >
        {active && drops.map((drop) => (
          <BloodDroplet
            key={drop.id}
            x={drop.x}
            delay={drop.delay}
            duration={drop.duration}
            size={drop.size}
            distance={dripDistance}
            color={bloodColor}
            opacity={config.opacity}
          />
        ))}
      </div>

      <style>{`
        @keyframes bloodDrip {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: var(--blood-opacity, 0.8);
          }
          15% {
            transform: translateY(5px) scaleY(1.3);
            opacity: var(--blood-opacity, 0.8);
          }
          30% {
            transform: translateY(15px) scaleY(1.1);
            opacity: calc(var(--blood-opacity, 0.8) * 0.9);
          }
          60% {
            transform: translateY(calc(var(--drip-distance, 60px) * 0.6)) scaleY(1);
            opacity: calc(var(--blood-opacity, 0.8) * 0.5);
          }
          100% {
            transform: translateY(var(--drip-distance, 60px)) scaleY(0.8);
            opacity: 0;
          }
        }

        @keyframes bloodStretch {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
          }
          50% {
            transform: scaleY(1.2) scaleX(0.9);
          }
        }

        @keyframes bloodGlow {
          0%, 100% {
            filter: drop-shadow(0 0 2px var(--blood-color));
          }
          50% {
            filter: drop-shadow(0 0 6px var(--blood-color));
          }
        }

        .blood-droplet {
          position: absolute;
          top: 0;
          animation:
            bloodDrip var(--duration) ease-in var(--delay) infinite,
            bloodGlow 2s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .blood-droplet-inner {
          background: linear-gradient(
            180deg,
            var(--blood-color) 0%,
            color-mix(in srgb, var(--blood-color) 80%, black) 60%,
            color-mix(in srgb, var(--blood-color) 60%, black) 100%
          );
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          animation: bloodStretch 1.5s ease-in-out infinite;
        }

        .blood-trail {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          background: linear-gradient(
            to top,
            var(--blood-color),
            transparent
          );
          border-radius: 2px 2px 0 0;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

interface BloodDropletProps {
  x: number;
  delay: number;
  duration: number;
  size: number;
  distance: number;
  color: string;
  opacity: number;
}

const BloodDroplet: React.FC<BloodDropletProps> = ({
  x,
  delay,
  duration,
  size,
  distance,
  color,
  opacity,
}) => {
  const trailHeight = size * 2 + Math.random() * size;

  return (
    <div
      className="blood-droplet"
      style={{
        left: `${x}%`,
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
        '--blood-color': color,
        '--blood-opacity': opacity,
        '--drip-distance': `${distance}px`,
      } as React.CSSProperties}
    >
      {/* Trail connecting to frame edge */}
      <div
        className="blood-trail"
        style={{
          height: `${trailHeight}px`,
          width: `${size * 0.4}px`,
        }}
      />
      {/* Main droplet */}
      <div
        className="blood-droplet-inner"
        style={{
          width: `${size}px`,
          height: `${size * 1.4}px`,
        }}
      />
    </div>
  );
};

export default BloodDripFrame;


// ============================================================
// USAGE EXAMPLES
// ============================================================

/*
import BloodDripFrame from './BloodDripFrame';

// Basic usage
<BloodDripFrame>
  <div className="product-card">
    <img src="mask.jpg" alt="Horror Mask" />
    <h3>Leatherface Mask</h3>
    <p>$89.99</p>
  </div>
</BloodDripFrame>

// Subtle effect for headers
<BloodDripFrame
  intensity="subtle"
  borderStyle="simple"
  dripCount={5}
>
  <header>
    <h1>Lord Grimley's Manor</h1>
  </header>
</BloodDripFrame>

// Heavy effect for sale banners
<BloodDripFrame
  intensity="heavy"
  borderStyle="ornate"
  dripCount={15}
  bloodColor="#6B0000"
  dripDistance={80}
>
  <div className="sale-banner">
    <h2>CLEARANCE CRYPT</h2>
    <p>Up to 50% off all masks</p>
  </div>
</BloodDripFrame>

// Conditional activation (e.g., on hover)
const [isHovered, setIsHovered] = useState(false);

<BloodDripFrame
  active={isHovered}
  intensity="medium"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <ProductCard />
</BloodDripFrame>
*/
