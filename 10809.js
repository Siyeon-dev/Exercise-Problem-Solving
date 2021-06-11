const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const inputString = input[0].slice();
const alphabet = "abcdefghijklmnopqrstuvwxyz".slice();

let resultString = "";

for (let index = 0; index < alphabet.length; index++) {
	let count = 0;

	for (let i = 0; i < inputString.length; i++, count++) {
		if (alphabet[index] === inputString[i]) {
			resultString += String(count);
			break;
		}

		if (i === inputString.length - 1) {
			resultString += "-1";
		}
	}

	if (index !== alphabet.length) resultString += " ";
}

console.log(resultString);
