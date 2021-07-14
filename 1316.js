const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const input = [3, "abc", "abb", "abcabc"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let inputValue = [];

for (let i = 1; i <= Number(input[0]); i++) {
	inputValue.push(input[i]);
}

let countGroupWord = inputValue.length;

for (let value of inputValue) {
	let preLetter = null;
	let countAlphabet = Array(alphabet.length).fill(0);
	// 배열 초기화

	// 기존에 단어가 있는데, 이전 문자와 다른 문자라면 그룹 단어가 아니다.
	for (let i = 0; i < value.length; i++) {
		let isGroupWord = true;

		if (i !== 0) preLetter = value[i - 1];

		for (let a = 0; a < alphabet.length; a++) {
			if (value[i] === alphabet[a]) {
				if (countAlphabet[a] >= 1 && alphabet[a] !== preLetter) {
					isGroupWord = false;
					countGroupWord--;
				}

				countAlphabet[a] += 1;
				break;
			}
		}

		if (isGroupWord === false) break;
	}
}

console.log(countGroupWord);
