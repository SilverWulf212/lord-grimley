const sharp = require('sharp');
const path = require('path');

const imgDir = './src/img';

async function processImages() {
  console.log('Processing images...');

  // 1. Zombie hands - remove black background, convert to WebP
  try {
    await sharp(path.join(imgDir, '02-hero-overlay_zombie-hands_transparent-no-bg.png'))
      .removeAlpha()
      .ensureAlpha()
      .toColourspace('srgb')
      // Make black pixels transparent
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(async ({ data, info }) => {
        const { width, height, channels } = info;
        // Process pixels - make dark pixels transparent
        for (let i = 0; i < data.length; i += channels) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // If pixel is very dark (near black), make transparent
          if (r < 25 && g < 25 && b < 25) {
            data[i + 3] = 0; // Set alpha to 0
          }
        }
        await sharp(data, { raw: { width, height, channels } })
          .webp({ quality: 90 })
          .toFile(path.join(imgDir, '02-zombie-hands.webp'));
        console.log('✓ Zombie hands processed');
      });
  } catch (e) {
    // Fallback - simple conversion
    await sharp(path.join(imgDir, '02-hero-overlay_zombie-hands_transparent-no-bg.png'))
      .webp({ quality: 90 })
      .toFile(path.join(imgDir, '02-zombie-hands.webp'));
    console.log('✓ Zombie hands converted (basic)');
  }

  // 2. Gothic fence - trim and convert
  try {
    await sharp(path.join(imgDir, '03-section-divider_gothic-iron-fence_tileable_transparent.png'))
      .trim()
      .webp({ quality: 90 })
      .toFile(path.join(imgDir, '03-gothic-fence.webp'));
    console.log('✓ Gothic fence processed');
  } catch (e) {
    console.log('Gothic fence error:', e.message);
  }

  // 3. Bloody parchment
  try {
    await sharp(path.join(imgDir, '372e6fee-c78f-41ea-bfe8-499e0c420d22.png'))
      .webp({ quality: 90 })
      .toFile(path.join(imgDir, '04-bloody-parchment.webp'));
    console.log('✓ Bloody parchment processed');
  } catch (e) {
    console.log('Parchment error:', e.message);
  }

  console.log('Done!');
}

processImages().catch(console.error);
