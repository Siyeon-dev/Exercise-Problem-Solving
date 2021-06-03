const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const playTimes = Number(input[0]);

const calcScore = (record) => {
	const arrayScore = record.slice();
	let totalPoint = 0;
	let point = 0;

	for (let value of arrayScore) {
		if (value === "O") {
			point++;
			totalPoint += point;
		} else {
			point = 0;
		}
	}

	return totalPoint;
};

for (let i = 1; i <= playTimes; i++) {
	console.log(calcScore(input[i]));
}
