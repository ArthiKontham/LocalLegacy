const fs = require("fs");
const path = require("path");

const filePath = "c:/Users/arthi/Downloads/LocalLegacy20/src/data/destinations/others.js";
const content = fs.readFileSync(filePath, "utf8");

// We can search for the buildCity calls
const regex = /const\s+(\w+)\s*=\s*buildCity\(\{([\s\S]*?)\}\);/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const cityName = match[1];
  console.log(`Found city: ${cityName}, length: ${match[0].length}`);
  // Write each to scratch
  fs.writeFileSync(`c:/Users/arthi/Downloads/LocalLegacy20/scratch/extracted_${cityName}.js`, match[0]);
}
