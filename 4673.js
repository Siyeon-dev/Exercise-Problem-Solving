const N = 10000;
const chkArr = Array(N).fill(true);

const calcNotSelfNum = (n) => {
	let s = n;

	while (n) {
		s += n % 10;
		n = Math.floor(n / 10);
	}

	return s + n;
};

for (let i = 1; i <= N; i++) {
	const t = calcNotSelfNum(i);

	if (t < N) {
		chkArr[t] = false;
	}
}

for (let i = 1; i <= N; i++) {
	if (chkArr[i]) console.log(i);
}
