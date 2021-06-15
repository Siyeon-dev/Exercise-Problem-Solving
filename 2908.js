const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const inputNumber = input.split(" ");

const flipNumber = (numList) => {
	let flipedNumber = [];
	for (let number of numList) {
		let tempNumber = "";
		for (let i = number.length - 1; i >= 0; i--) {
			tempNumber += number[i];
		}
		flipedNumber.push(Number(tempNumber));
	}

	return flipedNumber;
};

console.log(Math.max(...flipNumber(inputNumber)));
