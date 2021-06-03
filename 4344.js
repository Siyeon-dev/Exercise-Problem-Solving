const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const countTimes = Number(input[0]);

let scoreBoard = [];

for (let i = 0; i < countTimes; i++) {
	const score = input[i + 1].split(" ");
	scoreBoard.push(score);
}

const calcAvgScore = (inputScore) => {
	const score = inputScore.slice();
	let totalScore = 0;
	let avgScore = 0;
	let honorStudent = 0;
	let rateHonerStd = 0;

	for (let i = 1; i < score.length; i++) {
		totalScore += Number(score[i]);
	}

	avgScore = totalScore / score[0];

	for (let i = 1; i < score.length; i++) {
		if (Number(score[i]) > avgScore) honorStudent++;
	}

	rateHonerStd = ((honorStudent / Number(score[0])) * 100).toFixed(3) + "%";

	return rateHonerStd;
};

for (let score of scoreBoard) console.log(calcAvgScore(score));
