const input = require("fs").readFileSync("/dev/stdin").toString().split("n");
const inputNumber = Number(input[0]);

const calcHanNumber = (Number) => {
	let result = 0;

	for (let i = 1; i <= Number; i++) {
		if (i < 100) result++;
		else if (i === 1000) break;
		else {
			let tempNumber = i;
			let arrayDigit = [];
			let indexCount = 0;
			// i를 각 자리수 별로 분해.
			while (tempNumber > 0) {
				arrayDigit[indexCount++] = tempNumber % 10;
				tempNumber = parseInt(tempNumber / 10);
			}
			// 자리수별로 뺀 값이 일정하면 result ++;
			if (arrayDigit[0] - arrayDigit[1] === arrayDigit[1] - arrayDigit[2])
				result++;
		}
	}

	return result;
};

console.log(calcHanNumber(inputNumber));
