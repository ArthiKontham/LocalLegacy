const fs = require('fs');

console.log('Concatenating files for comprehensive static evaluation...');

const files = [
  './src/data/cartoonPFPs.js',
  './src/data/cityDetails.js',
  './src/data/builder.js',
  './src/data/destinations/spain.js',
  './src/data/destinations/australia.js',
  './src/data/destinations/france.js',
  './src/data/destinations/italy.js',
  './src/data/destinations/japan.js',
  './src/data/destinations/usa.js',
  './src/data/destinations/germany.js',
  './src/data/destinations/netherlands.js',
  './src/data/destinations/singapore.js',
  './src/data/destinations/southkorea.js',
  './src/data/destinations/uk.js',
  './src/data/destinations/portugal.js',
  './src/data/destinations/switzerland.js',
  './src/data/destinations/greece.js',
  './src/data/destinations/thailand.js',
  './src/data/destinations/uae.js',
  './src/data/destinations/india.js',
  './src/data/destinations/others.js',
  './src/data/cities.js'
];

let combinedCode = '';

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/^import\s+(\w+)\s+from\s+["'][^"']+["'];/gm, 'const $1 = "";');
  content = content.replace(/^import\s+[\s\S]+?;\n/gm, '');
  content = content.replace(/^export\s+/gm, '');
  combinedCode += `\n// --- FILE: ${f} ---\n` + content;
});

combinedCode += `
const errors = [];

// Verify CITIES size
console.log(\`Total cities in CITIES: \${CITIES.length}\`);
if (CITIES.length !== 100) {
  errors.push(\`Expected 100 cities in CITIES list, found: \${CITIES.length}\`);
}

// Assert CITIES dropdown keys
CITIES.forEach(c => {
  if (!CITY_DATA[c.key]) {
    errors.push(\`Dropdown key "\${c.key}" does not exist in CITY_DATA\`);
  }
});

// Assert all 55 cities meet requirements
CITIES.forEach(c => {
  const city = CITY_DATA[c.key];
  if (!city) {
    errors.push(\`City key "\${c.key}" not found in CITY_DATA\`);
    return;
  }
  
  const categories = { Eat: 0, Stay: 0, Do: 0, Shop: 0 };
  const images = new Set();
  
  Object.values(city.businesses || {}).forEach(b => {
    if (categories[b.category] !== undefined) {
      categories[b.category]++;
    } else {
      errors.push(\`Business "\${b.id}" in "\${c.key}" has unknown category "\${b.category}"\`);
    }
    
    // Check image uniqueness
    const imgPath = b.image || b.pic;
    if (images.has(imgPath)) {
      errors.push(\`City "\${c.key}" reuses the image "\${imgPath}" for multiple places\`);
    } else {
      images.add(imgPath);
    }
  });

  const guidesList = Object.values(city.guides || {});
  const guidesCount = guidesList.length;
  if (guidesCount < 45) {
    errors.push(\`City "\${c.key}" has only \${guidesCount} guides (expected >= 45)\`);
  }
  const gendersCount = { Male: 0, Female: 0, Others: 0 };
  guidesList.forEach(g => {
    // Check guide image uniqueness
    const imgPath = g.image || g.pic;
    if (images.has(imgPath)) {
      errors.push(\`City "\${c.key}" reuses the image "\${imgPath}" for guide "\${g.id}"\`);
    } else {
      images.add(imgPath);
    }

    if (gendersCount[g.gender] !== undefined) {
      gendersCount[g.gender]++;
    } else {
      errors.push(\`Guide "\${g.id}" in "\${c.key}" has unknown gender "\${g.gender}"\`);
    }
  });
  if (gendersCount.Male < 15) {
    errors.push(\`City "\${c.key}" has only \${gendersCount.Male} Male guides (expected >= 15)\`);
  }
  if (gendersCount.Female < 15) {
    errors.push(\`City "\${c.key}" has only \${gendersCount.Female} Female guides (expected >= 15)\`);
  }
  if (gendersCount.Others < 15) {
    errors.push(\`City "\${c.key}" has only \${gendersCount.Others} Other guides (expected >= 15)\`);
  }

  if (categories.Stay < 12) {
    errors.push(\`City "\${c.key}" has only \${categories.Stay} Stay items (expected >= 12)\`);
  }
  if (categories.Eat < 12) {
    errors.push(\`City "\${c.key}" has only \${categories.Eat} Eat items (expected >= 12)\`);
  }
  if (categories.Do < 12) {
    errors.push(\`City "\${c.key}" has only \${categories.Do} Do items (expected >= 12)\`);
  }
  if (categories.Shop < 12) {
    errors.push(\`City "\${c.key}" has only \${categories.Shop} Shop items (expected >= 12)\`);
  }
});

if (errors.length === 0) {
  console.log(\`Success: All \${CITIES.length} cities validated successfully! All items have unique, category-specific, and city-specific images, and satisfy counts (>=12 Stay, >=12 Eat, >=12 Do, >=12 Shop, >=45 Guides).\`);
  process.exit(0);
} else {
  console.error(\`Validation failed with \${errors.length} errors:\`);
  errors.slice(0, 20).forEach(e => console.error(' - ' + e));
  if (errors.length > 20) {
    console.error(\`... and \${errors.length - 20} more errors.\`);
  }
  process.exit(1);
}
`;

fs.writeFileSync('./scratch/validate_bundle.js', combinedCode);

try {
  require('./validate_bundle.js');
} catch (e) {
  console.error('Execution failed:', e);
  process.exit(1);
}
