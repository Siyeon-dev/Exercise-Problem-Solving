const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const numCount = Number(input[0]);
const numList = input[1].slice();

let resultValue = 0;

for (let i = 0; i < numCount; i++) {
	resultValue += Number(numList[i]);
}

console.log(resultValue);
