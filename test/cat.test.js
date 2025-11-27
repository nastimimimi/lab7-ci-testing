const { getCatFact } = require('../src/cat');

if (!getCatFact().includes("Cats")) {
  console.error("❌ Test failed: cat fact is incorrect");
  process.exit(1);
}

console.log("✅ Test passed: cat fact is correct");
