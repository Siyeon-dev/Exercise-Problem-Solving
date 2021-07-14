const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let inputValue = [];

for (let i = 1; i <= Number(input[0]); i++) {
	inputValue.push(input[i]);
}

let count = inputValue.length;

for (let input of inputValue) {
	let preLetter = null;
	let countAlphabet = [];
	// 배열 초기화
	for (let char of alphabet) countAlphabet.push(0);

	// 기존에 단어가 있는데, 이전 문자와 다른 문자라면 그룹 단어가 아니다.
	for (let i = 0; i < input.length; i++) {
		let isGroupWord = true;

		if (i !== 0) preLetter = input[i - 1];

		for (let a = 0; a < alphabet.length; a++) {
			if (input[i] === alphabet[a]) {
				if (countAlphabet[a] >= 1 && alphabet[a] !== preLetter) {
					isGroupWord = false;
					count--;
				}

				countAlphabet[a] += 1;
				break;
			}
		}

		if (isGroupWord === false) break;
	}
}

console.log(count);
