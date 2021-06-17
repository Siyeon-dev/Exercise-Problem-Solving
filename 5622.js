const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const inputValue = input[0];
const dial = [
	"",
	"",
	"ABC",
	"DEF",
	"GHI",
	"JKL",
	"MNO",
	"PQRS",
	"TUV",
	"WXYZ",
	"",
];
let count = 0;
let number = [];
let resultTime = 0;

for (let value of inputValue) {
	for (let char of dial) {
		for (let alphabet of char) {
			if (alphabet === value) {
				number.push(count);
				break;
			}
		}

		count++;
	}

	count = 0;
}

for (let value of number) resultTime += Number(value + 1);
console.log(resultTime);
