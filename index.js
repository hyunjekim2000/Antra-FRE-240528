
/* 1. find the most frequently occurring number  */
const findHighestFreq = (arr) => {
};
/* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
const getDiffBetweenDigonal = (matrix) => {
};
// /* test */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

/* 3. Count the number of 3 as digit in all numbers from 0 to 50. */
const find3 = (start, end) => {
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {
}
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
const capEachCharInStr = (str) => {
}
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
const isValid = (str) => {
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
const fibonacci = num => {
  // for loop
}
// const fibonacci = (num) => {
//   // recursion
// }
/* test */
console.log('fibonacci: ', fibonacci(4));

/* 8. looking for most close 3 numbers to the target */
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {
}
console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
function createRandomStr(N, K) {
}
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca


/* 10. sort the array by the given sequence */
function sortBySeq(arr, sqs) {
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs));  // ["e", "o", "h", "l", "l"];
