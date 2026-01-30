// ========================================
// SCRATCH EFFECT (NO ZOMBIE HAND CURSOR)
// ========================================

(function() {
  const scratchContainer = document.createElement('div');
  scratchContainer.className = 'scratch-container';
  document.body.appendChild(scratchContainer);

  const scratchTemplates = [
    `<svg viewBox="0 0 80 80"><path d="M10 10 Q20 30 15 70" stroke="#8B0000" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M30 5 Q40 35 35 75" stroke="#8B0000" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 10 Q55 40 52 70" stroke="#8B0000" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 60 60"><path d="M10 10 Q30 30 50 50" stroke="#8B0000" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 10 Q30 30 10 50" stroke="#8B0000" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 100 80"><path d="M15 5 Q12 40 18 75" stroke="#8B0000" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M35 8 Q30 42 38 72" stroke="#8B0000" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M55 5 Q52 38 58 75" stroke="#8B0000" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M75 8 Q78 40 72 72" stroke="#8B0000" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`
  ];

  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button, input, .product-card, .category-card, .nav-icon')) return;

    const scratch = document.createElement('div');
    scratch.className = 'scratch';
    scratch.innerHTML = scratchTemplates[Math.floor(Math.random() * scratchTemplates.length)];
    const size = 60 + Math.random() * 40;
    scratch.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - size/2}px;top:${e.clientY - size/2}px;transform:rotate(${Math.random()*60-30}deg)`;
    scratchContainer.appendChild(scratch);
    requestAnimationFrame(() => scratch.classList.add('animate'));
    setTimeout(() => scratch.remove(), 800);
  });

  // Add texture overlays
  ['crack-texture', 'spiderweb-pattern', 'vignette', 'film-grain'].forEach(c => {
    const el = document.createElement('div');
    el.className = c;
    document.body.appendChild(el);
  });

  // Cobweb corners
  const cobwebSVG = `<svg viewBox="0 0 200 200"><path d="M0 0 Q50 10 100 50 Q60 60 50 100 Q10 50 0 0Z" fill="none" stroke="#E8DCC4" stroke-width="0.5"/><path d="M0 0 L100 100 M0 0 L120 80 M0 0 L80 120" stroke="#E8DCC4" stroke-width="0.3"/></svg>`;
  ['tl', 'tr', 'bl', 'br'].forEach(pos => {
    const cw = document.createElement('div');
    cw.className = `cobweb-corner cobweb-corner--${pos}`;
    cw.innerHTML = cobwebSVG;
    document.body.appendChild(cw);
  });

  console.log('🩸 Blood scratch effects loaded');
})();

// ========================================
// BLOOD DRIPS ON ALL SECTIONS
// ========================================
(function() {
  function addBloodDrips(selector, count = 8) {
    document.querySelectorAll(selector).forEach(el => {
      if (el.querySelector('.blood-drip-container')) return;

      const container = document.createElement('div');
      container.className = 'blood-drip-container';
      container.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:60px;overflow:hidden;pointer-events:none;transform:translateY(100%);z-index:10;';

      for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'blood-drop';
        const size = 3 + Math.random() * 4;
        drop.style.cssText = `position:absolute;top:0;left:${Math.random()*100}%;--size:${size}px;--delay:${Math.random()*3}s;--duration:${2+Math.random()*1.5}s;animation:bloodDrip var(--duration) ease-in var(--delay) infinite;`;
        drop.innerHTML = `<div style="width:var(--size);height:calc(var(--size)*1.4);background:linear-gradient(180deg,#8B0000,#5C0000);border-radius:50% 50% 50% 50%/30% 30% 70% 70%;filter:drop-shadow(0 0 3px #8B0000);"></div>`;
        container.appendChild(drop);
      }

      el.style.position = 'relative';
      el.appendChild(container);
    });
  }

  // Add drips to major sections
  setTimeout(() => {
    addBloodDrips('.category-card', 5);
    addBloodDrips('.product-card', 4);
    addBloodDrips('.section-header', 6);
    addBloodDrips('.hero-content', 8);
  }, 500);
})();

// ========================================
// MULTI-LAYER SCROLL GRADIENTS
// ========================================
(function() {
  // Create gradient layers
  const gradientLayers = [
    { speed: 0.1, opacity: 0.15, color: 'radial-gradient(ellipse at 20% 30%, rgba(139,0,0,0.2) 0%, transparent 50%)' },
    { speed: 0.15, opacity: 0.1, color: 'radial-gradient(ellipse at 80% 60%, rgba(139,0,0,0.15) 0%, transparent 40%)' },
    { speed: 0.08, opacity: 0.2, color: 'radial-gradient(ellipse at 50% 80%, rgba(139,0,0,0.1) 0%, transparent 60%)' },
    { speed: 0.12, opacity: 0.08, color: 'linear-gradient(180deg, transparent 0%, rgba(139,0,0,0.05) 50%, transparent 100%)' },
    { speed: 0.05, opacity: 0.25, color: 'radial-gradient(circle at 10% 90%, rgba(255,217,61,0.03) 0%, transparent 30%)' },
  ];

  const layerContainer = document.createElement('div');
  layerContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  document.body.prepend(layerContainer);

  gradientLayers.forEach((layer, i) => {
    const el = document.createElement('div');
    el.className = `scroll-gradient-layer layer-${i}`;
    el.style.cssText = `position:absolute;top:0;left:0;width:100%;height:200%;background:${layer.color};opacity:${layer.opacity};will-change:transform;`;
    el.dataset.speed = layer.speed;
    layerContainer.appendChild(el);
  });

  // Parallax scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        document.querySelectorAll('.scroll-gradient-layer').forEach(layer => {
          const speed = parseFloat(layer.dataset.speed);
          layer.style.transform = `translateY(${-scrollY * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ========================================
// PREMIUM SCROLL REVEAL
// ========================================
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.transitionDelay = '0s';
        }, i * 100);
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
    observer.observe(el);
  });
})();

// ========================================
// TRIPLE PARALLAX FADE ON SCROLL (Desktop)
// ========================================
(function() {
  if (window.innerWidth < 768) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Create three fade layers
  const fadeOverlay = document.createElement('div');
  fadeOverlay.className = 'parallax-fade-overlay';
  fadeOverlay.innerHTML = `
    <div class="fade-layer fade-layer--1"></div>
    <div class="fade-layer fade-layer--2"></div>
    <div class="fade-layer fade-layer--3"></div>
  `;
  hero.appendChild(fadeOverlay);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .parallax-fade-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 5;
    }
    .fade-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.1s ease-out;
    }
    .fade-layer--1 {
      background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 12, 0.3) 100%);
    }
    .fade-layer--2 {
      background: linear-gradient(180deg, transparent 30%, rgba(10, 10, 12, 0.5) 100%);
    }
    .fade-layer--3 {
      background: linear-gradient(180deg, transparent 50%, rgba(10, 10, 12, 0.9) 100%);
    }
  `;
  document.head.appendChild(style);

  const layers = fadeOverlay.querySelectorAll('.fade-layer');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        const scrollPercent = Math.min(scrollY / heroHeight, 1);

        // Staggered fade-in for each layer
        layers[0].style.opacity = Math.min(scrollPercent * 2, 1);
        layers[1].style.opacity = Math.max(0, Math.min((scrollPercent - 0.2) * 2, 1));
        layers[2].style.opacity = Math.max(0, Math.min((scrollPercent - 0.4) * 2, 1));

        ticking = false;
      });
      ticking = true;
    }
  });

  console.log('🌫️ Triple parallax fade loaded');
})();

// ========================================
// REACTIVE DUST PARTICLES (Hero)
// ========================================
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'reactive-dust-canvas';
  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
  `;
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.baseX = this.x;
      this.baseY = this.y;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.8
        ? `rgba(139, 0, 0, ${this.opacity})`
        : `rgba(232, 220, 196, ${this.opacity})`;
    }

    update() {
      // Gentle drift
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse repulsion when hovering
      if (isHovering) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 3;
          this.y += Math.sin(angle) * force * 3;
        }
      }

      // Return to base position slowly
      this.x += (this.baseX - this.x) * 0.01;
      this.y += (this.baseY - this.y) * 0.01;

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  // Create particles
  const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Mouse tracking
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isHovering = true;
  });

  hero.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connecting lines between nearby particles
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 0, 0, ${0.1 * (1 - distance / 80)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  // Check for reduced motion preference
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
    console.log('✨ Reactive dust particles loaded');
  }
})();
