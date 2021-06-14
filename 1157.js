/**
 * 문자 값을 index 값으로 1:1 대응시켜 문제를 풀 수 있다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().toLowerCase();
const alphabetList = Array(26).fill(0);

for (let char of input) {
	// charCodeAt() -> 해당 값에 대한 UTF-16 값 반환
	alphabetList[char.charCodeAt() - 97]++;
}

// Math.max -> 여러 값 중 가장 큰 값을 반환
// 스프레드 연산자로 배열 속 값들 중 가장 큰 값을 뽑을 수 있다.
const maxValue = Math.max(...alphabetList);
// indexOf -> 인자 값을 value로 가지는 index 반환
const maxNumInx = alphabetList.indexOf(maxValue);

let isSame = false;

for (let i = 0; i < alphabetList.length; i++) {
	if (maxValue === alphabetList[i] && i !== maxNumInx) {
		isSame = !isSame;
		break;
	}
}

// fromCharCode 를 통해서 UTF-16값을 다시 문자로 parsing
console.log(isSame ? "?" : String.fromCharCode(maxNumInx + 65));
