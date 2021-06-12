const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const time = Number(input[0]);
let result = "";

for (let i = 1; i <= time; i++) {
	const testInput = input[i].split(" ");
	const testCase = testInput[1];

	for (let char of testCase) {
		for (let j = 0; j < parseInt(testInput[0]); j++) {
			result += char;
		}
	}

	if (i !== time) result += "\n";
}

console.log(result);
