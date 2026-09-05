const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../temp_profile_extract/profile');
const destDir = path.join(__dirname, '../public/profile_pictures/profile');
const registryFile = path.join(__dirname, '../src/data/cartoonPFPs.js');

// 1. Ensure destination directory exists and is clean
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

console.log('Scanning extracted profile files...');
const files = fs.readdirSync(srcDir);

const maleImages = [];
const femaleImages = [];
const othersImages = [];

const validExtensions = ['.jpg', '.jpeg', '.png'];

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!validExtensions.includes(ext)) {
    console.log(`Skipping non-image file: ${file}`);
    return;
  }
  
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  
  // Copy file
  fs.copyFileSync(srcPath, destPath);
  
  const relativePath = `/profile_pictures/profile/${file}`;
  
  if (file.startsWith('boy')) {
    maleImages.push(relativePath);
  } else if (file.startsWith('girl')) {
    femaleImages.push(relativePath);
  } else if (file.startsWith('others')) {
    othersImages.push(relativePath);
  } else {
    console.log(`Unclassified image name: ${file}`);
  }
});

// Sort to ensure deterministic ordering/builds
maleImages.sort();
femaleImages.sort();
othersImages.sort();

console.log(`Copied and cataloged:`);
console.log(` - Male images: ${maleImages.length}`);
console.log(` - Female images: ${femaleImages.length}`);
console.log(` - Others images: ${othersImages.length}`);

// Generate the cartoonPFPs.js content
const registryContent = `// Automatically generated from profile.zip contents
export const CARTOON_PFPS_MALE = ${JSON.stringify(maleImages, null, 2)};
export const CARTOON_PFPS_FEMALE = ${JSON.stringify(femaleImages, null, 2)};
export const CARTOON_PFPS_OTHERS = ${JSON.stringify(othersImages, null, 2)};
`;

fs.writeFileSync(registryFile, registryContent, 'utf8');
console.log(`Successfully generated registry at: ${registryFile}`);
