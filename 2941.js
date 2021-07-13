const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const inputValue = input[0];
const cAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

for (let i = 0; i < inputValue.length; i++) {
	let isCroAlpha = false;

	for (let currentAlphabet of cAlphabet) {
		let alphabet = "";
		// 비교할 알파벳 생성
		for (let j = 0; j < currentAlphabet.length; j++) {
			if (inputValue[i + j] === undefined) break;
			alphabet += inputValue[i + j];
		}

		// 알파벳 비교 후, 다음 알파벳
		if (alphabet === currentAlphabet) {
			isCroAlpha = true;
			count++;
			i += currentAlphabet.length - 1;
		}
	}

	// 크로아티아 알파벳이 없었을 경우 일반 알파벳 증가
	if (isCroAlpha !== true) count++;
}

console.log(count);
