const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const words = input.split(" ");

let count = 0;

for (let word of words) if (word !== "") count++;

console.log(count);
