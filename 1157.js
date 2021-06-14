// 소요시간 25분
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputString = input[0];
let lowerCase = "";
let cntAlphaObj = {};

for (let char of inputString) {
	lowerCase += char.toLocaleLowerCase();
}

for (let char of lowerCase) {
	cntAlphaObj[char] = 0;
}

for (let key in cntAlphaObj) {
	for (let char of lowerCase) {
		if (key === char) cntAlphaObj[char] = cntAlphaObj[char] + 1;
	}
}

let sortedAlphaList = [];

for (let value in cntAlphaObj)
	sortedAlphaList.push([value, cntAlphaObj[value]]);

sortedAlphaList.sort((a, b) => b[1] - a[1]);

if (sortedAlphaList[1] !== undefined)
	if (sortedAlphaList[0][1] === sortedAlphaList[1][1]) console.log("?");
	else console.log(sortedAlphaList[0][0].toUpperCase());
else console.log(sortedAlphaList[0][0].toUpperCase());
