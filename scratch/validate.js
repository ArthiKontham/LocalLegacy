const fs = require('fs');
const path = require('path');

console.log('Concatenating files for static evaluation...');

// 1. Read files in order
const files = [
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
  './src/data/destinations/others.js',
  './src/data/cities.js'
];

let combinedCode = '';

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace default imports with mock variables
  content = content.replace(/^import\s+(\w+)\s+from\s+["'][^"']+["'];/gm, 'const $1 = "";');
  
  // Strip other imports
  content = content.replace(/^import\s+[\s\S]+?;\n/gm, '');
  
  // Strip export keywords but keep declarations
  content = content.replace(/^export\s+/gm, '');
  
  combinedCode += `\n// --- FILE: ${f} ---\n` + content;
});

// Append validation code
combinedCode += `
const errors = [];

// Assert CITIES dropdown keys
CITIES.forEach(c => {
  if (!CITY_DATA[c.key]) {
    errors.push(\`Dropdown key "\${c.key}" does not exist in CITY_DATA\`);
  }
});

// Assert requested cities have at least 5 items in each category
const requestedExpandedCities = [
  'barcelona', 'madrid', 'seville',
  'sydney', 'melbourne', 'brisbane',
  'paris', 'nice', 'lyon',
  'rome', 'milan', 'venice',
  'tokyo', 'kyoto', 'osaka',
  'newyork', 'sanfrancisco', 'losangeles',
  'berlin', 'munich', 'hamburg',
  'amsterdam', 'rotterdam',
  'singapore',
  'seoul', 'busan'
];

requestedExpandedCities.forEach(key => {
  const city = CITY_DATA[key];
  if (!city) {
    errors.push(\`Required city "\${key}" not found in CITY_DATA\`);
    return;
  }
  
  const categories = { Eat: 0, Stay: 0, Do: 0, Shop: 0 };
  Object.values(city.businesses || {}).forEach(b => {
    if (categories[b.category] !== undefined) {
      categories[b.category]++;
    } else {
      errors.push(\`Business "\${b.id}" in "\${key}" has unknown category "\${b.category}"\`);
    }
  });
  
  Object.keys(categories).forEach(cat => {
    if (categories[cat] < 5) {
      errors.push(\`City "\${key}" has only \${categories[cat]} items in category "\${cat}" (expected >= 5)\`);
    }
  });
});

// Assert guides exist for all cities
Object.keys(CITY_DATA).forEach(key => {
  const city = CITY_DATA[key];
  const guidesCount = Object.keys(city.guides || {}).length;
  if (guidesCount === 0) {
    errors.push(\`City "\${key}" has 0 guides\`);
  }
});

// Print results
if (errors.length === 0) {
  console.log('Success: Static data evaluation passed! All 26 cities have >= 5 items per category and valid guides.');
  process.exit(0);
} else {
  console.error('Validation failed with the following errors:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
}
`;

fs.writeFileSync('./scratch/eval_bundle.js', combinedCode);

// Run the generated bundle
try {
  require('./eval_bundle.js');
} catch (e) {
  console.error('Execution failed:', e);
  process.exit(1);
}
