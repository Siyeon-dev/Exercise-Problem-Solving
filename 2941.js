const input = "ljes=njak";

const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(regex, " ");
console.log(result.length);
