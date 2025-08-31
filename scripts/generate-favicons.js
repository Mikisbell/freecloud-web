const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const sourceSvg = path.join(__dirname, '../public/apple-touch-icon.svg');
  const outputDir = path.join(__dirname, '../public');
  
  try {
    // Create apple-touch-icon.png (180x180)
    await sharp(sourceSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    console.log('Successfully generated favicon files');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
