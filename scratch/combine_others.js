const fs = require("fs");

const cities = ["prague", "hyderabad", "mexicocity", "marrakech", "istanbul"];
let output = `import { buildCity } from "../builder";\n\n`;

cities.forEach((c) => {
  const content = fs.readFileSync(`c:/Users/arthi/Downloads/LocalLegacy20/scratch/extracted_${c}.js`, "utf8");
  output += content + "\n\n";
});

output += `export const OTHERS = {\n`;
cities.forEach((c) => {
  output += `  ${c},\n`;
});
output += `};\n`;

fs.writeFileSync("c:/Users/arthi/Downloads/LocalLegacy20/src/data/destinations/others.js", output, "utf8");
console.log("Successfully combined others.js!");
