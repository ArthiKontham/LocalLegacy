const fs = require('fs');
let code = fs.readFileSync('./src/data/cities.js', 'utf8');

// Strip ES6 imports and convert to local mocks
code = code.replace(/import\s+[\s\S]+?;\n/g, '');
code = code.replace(/imgs:\s*\[.*?\]/g, 'imgs: []');
code = code.replace('businesses: BCN_B, guides: BCN_G', 'businesses: {}, guides: {}');
code = code.replace('export const CITY_DATA =', 'const CITY_DATA =');
code = code.replace('export const CITIES =', 'const CITIES =');

// Strip trailing post-processing lines
const endIdx = code.indexOf('const list =');
if (endIdx !== -1) {
  code = code.substring(0, endIdx);
}

// Wrap in a function to return the CITY_DATA
const fullCode = code + '\n;module.exports = { CITY_DATA };';
fs.writeFileSync('./scratch/temp_parser.js', fullCode);

const { CITY_DATA } = require('./temp_parser.js');

const keys = ['prague', 'athens', 'hyderabad', 'mexicocity', 'marrakech', 'lisbon', 'bangkok', 'istanbul', 'dubai', 'london'];

const output = {};

keys.forEach(k => {
  const city = CITY_DATA[k];
  if (!city) return;
  
  // Extract currency and values from trip HTML
  let currency = '€';
  let mealRange = [20, 40];
  let stayRates = [120, 150, 200];
  let doCost = 80;
  let shopRange = [100, 400];
  let cuisineStyle = 'Local';
  
  if (city.trip && city.trip.eat && city.trip.eat.html) {
    const html = city.trip.eat.html;
    const match = html.match(/around <strong>([^0-9]+)([0-9,]+)<\/strong> to <strong>[^0-9]+([0-9,]+)<\/strong>/);
    if (match) {
      currency = match[1].trim();
      mealRange = [parseInt(match[2].replace(/,/g, '')), parseInt(match[3].replace(/,/g, ''))];
    }
  }
  
  if (city.trip && city.trip.stay && city.trip.stay.rates) {
    stayRates = city.trip.stay.rates;
  }
  
  if (city.trip && city.trip.do && city.trip.do.html) {
    const match = city.trip.do.html.match(/roughly <strong>([^0-9]+)([0-9,]+)<\/strong>/);
    if (match) {
      doCost = parseInt(match[2].replace(/,/g, ''));
    }
  }
  
  if (city.trip && city.trip.shop && city.trip.shop.html) {
    const match = city.trip.shop.html.match(/about <strong>([^0-9]+)([0-9,]+)<\/strong> to <strong>[^0-9]+([0-9,]+)<\/strong>/);
    if (match) {
      shopRange = [parseInt(match[2].replace(/,/g, '')), parseInt(match[3].replace(/,/g, ''))];
    }
  }
  
  // Extract cuisine style
  const firstBizKey = Object.keys(city.businesses)[0];
  if (firstBizKey) {
    const detail = city.businesses[firstBizKey].detail || '';
    const match = detail.match(/leans into ([a-zA-Z\s]+) cooking/);
    if (match) {
      cuisineStyle = match[1].trim();
    }
  }

  const places = [];
  Object.values(city.businesses).forEach(b => {
    let desc = b.kind || '';
    
    if (b.detail) {
      if (b.category === 'Eat') {
        const match = b.detail.match(/Known as a \w+ \(([^)]+)\)/i);
        if (match) desc = match[1];
      } else if (b.category === 'Stay') {
        const match = b.detail.match(/It's a \w+ \(([^)]+)\)/i);
        if (match) desc = match[1];
      } else if (b.category === 'Do') {
        // Find the first sentence and extract the part before ", and easily"
        const firstSentence = b.detail.split('.')[0];
        const match = firstSentence.match(/(?:is|was)\s+([^,]+)/i);
        if (match) desc = match[1];
      } else if (b.category === 'Shop') {
        const match = b.detail.match(/\(([^)]+)\)/i);
        if (match) desc = match[1];
      }
    }
    
    places.push({
      id: b.id,
      category: b.category,
      name: b.name,
      kind: b.kind,
      desc: desc,
      rating: b.rating,
      reviews: b.reviews,
      open: b.open,
      walk: b.walk,
      offset: b.offset,
      ticket: b.ticket || false,
      ticketUrl: b.ticketUrl || ''
    });
  });
  
  output[k] = {
    key: k,
    name: city.name,
    currency,
    mealRange,
    stayRates,
    doCost,
    shopRange,
    cuisineStyle,
    places
  };
});

// Write to others.js file
let fileContent = 'import { buildCity } from "../builder";\n\n';
Object.keys(output).forEach(k => {
  fileContent += `const ${k} = buildCity(` + JSON.stringify(output[k], null, 2) + ');\n\n';
});

fileContent += 'export const OTHERS = {\n';
keys.forEach(k => {
  fileContent += `  ${k},\n`;
});
fileContent += '};\n';

fs.writeFileSync('./src/data/destinations/others.js', fileContent);
console.log('Successfully wrote others.js with clean descriptions');
