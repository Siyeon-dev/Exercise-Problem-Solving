let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let subject = Number(input[0]);

let score = input[1].split(" ");
let subjects = [];

for (let i = 0; i < subject; i++) {
	subjects.push(Number(score[i]));
}

const getMaxValue = (inputValue) => {
	let maxValue = inputValue[0];

	for (let value of inputValue) {
		if (maxValue < value) maxValue = value;
	}

	return maxValue;
};

const cheatGrade = (inputValue) => {
	const maxValue = getMaxValue(inputValue);
	let totalScore = 0;

	for (let value of inputValue) {
		if (maxValue === inputValue) {
			totalScore += maxValue;
			continue;
		}

		totalScore += (value / maxValue) * 100;
	}

	return totalScore / inputValue.length;
};

console.log(cheatGrade(subjects));
