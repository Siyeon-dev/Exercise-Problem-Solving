const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const result = input[0].charCodeAt(0);
console.log(result);
