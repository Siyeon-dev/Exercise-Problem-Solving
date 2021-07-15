const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let suger = input[0];
let bags = 0;

while (true) {
	if (suger % 5 === 0) {
		console.log(suger / 5 + bags);
		break;
	} else if (suger <= 0) {
		console.log(-1);
		break;
	}

	suger -= 3;
	bags++;
}
