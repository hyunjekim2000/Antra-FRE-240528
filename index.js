
/* 1. find the most frequently occurring number  */
const findHighestFreq = (arr) => {

  // array to hold the frequency of each number 
  // where the index corresponds to the number
  // and value corresponds to the frequency
  const freqArr = [];

  // loop through each element to populate the frequency array
  // increment if exists, and initialize if not exists
  // for each element in the given array, there are multiple numbers
  // so I used double for loop to iterate over each numbers in each element
  for (element of arr) {
    for (num of element) {
      // console.log(`debug: parsing num: ${num}`);
      if (freqArr[num]) {
        freqArr[num]++;
      }
      else {
        freqArr[num] = 1;
      }
    }
  }
  // console.log(`debug: ${freqArr}`);

  // find the maximum frequency in the populated frequency array
  // added check for falsy in case we encounter uninitialized indexes
  max = 0;
  for (i = 0; i < freqArr.length; i++) {
    if (freqArr[i] && freqArr[i] > max) {
      max = freqArr[i];
    }
  }

  return max;
};

/* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
const getDiffBetweenDigonal = (matrix) => {

  // variables to hold each diagonal sum
  let diag1 = 0;
  let diag2 = 0;

  // loop through the matrix to find and accumulate each diagonal
  // we want first, second, and last element of each array for the first diagonal
  // and last, second, first for the other diagonal, so we reverse the index for this
  for (i = 0; i < matrix.length; i++) {
    // console.log(`debug: diag1: ${matrix[i][i]}`);
    diag1 += matrix[i][i];

    // console.log(`debug: diag2: ${matrix[i][matrix[i].length - i - 1]}`);
    diag2 += matrix[i][matrix[i].length - i - 1];
  }

  return Math.abs(diag1 - diag2);
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
  let count = 0;

  // loop through each number and check for 3 by remainder for all decimal
  for (i = start; i <= end; i++) {
    let temp = i;
    while (temp > 0) {
      if (temp % 10 == 3) {
        // console.log(`debug: match found for ${i}`);
        count++;
      }

      // floor in case we get floating points
      temp = Math.floor(temp / 10);
    }
  }
  return count;
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {

  // split the string into words
  arr = str.split(' ');
  // capitalize each word by combining capitalized first letter and rest
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
const capEachCharInStr = (str) => {
  let arr = [str.length];

  // split the string, capitalize the letter in increasing order then combine string
  for (i = 0; i < str.length; i++) {
    let letters = str.split('');
    letters[i] = letters[i].toUpperCase();
    arr[i] = letters.join('');
  }

  return arr;
}
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
const isValid = (str) => {
  const stack = [];


  for (char of str) {
    if (char === '(') stack.push(')');
    else if (char === '{') stack.push('}');
    else if (char === '[') stack.push(']');

    // if char is closing bracket check if the stack is empty or if the top of the stack not match the char
    else if (stack.length === 0 || stack.pop() !== char) return false; 
  }
  return stack.length === 0;
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
// const fibonacci = num => {
//   // for loop
//   if (num < 2) return num;
//   // left and right values
//   l = 0;
//   r = 1;

//   // proceed with fib until the given num
//   for (i = 2; i < num + 1; i++) { 
//     [l, r] = [r, l + r];
//   }

//   return r;
// }
const fibonacci = (num) => {
  // recursion

  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
/* test */
console.log('fibonacci: ', fibonacci(4));

/* 8. looking for most close 3 numbers to the target */
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {

  // sort the array by the diff between the number and givenNum
  let ans = givenArr.sort((a, b) => {
    return Math.abs(a - givenNum) - Math.abs(b - givenNum);
  })
  
  // print out in order
  return ans.slice(0, find);
}
console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
function createRandomStr(N, K) {

  // list of chars to use
  const validStrings = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";

  // generate K random chars to use
  const uniqueChars = [];
  while (uniqueChars.length < K) {
    const randomIndex = Math.floor(Math.random() * validStrings.length);
    const char = validStrings[randomIndex];
    
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }

  // generate random string of length N
  for (i = 0; i < N; i++) {
    const randomIndex = Math.floor(Math.random() * uniqueChars.length);
    randomString += uniqueChars[randomIndex];
  }

  return randomString;
}
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca


/* 10. sort the array by the given sequence */
function sortBySeq(arr, sqs) {

  // list sequence as array to get index to use as sorter
  seqArr = sqs.split('');

  // use sequence to sort in ascending order
  return arr.sort((a, b) => seqArr.indexOf(a) - seqArr.indexOf(b));
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs));  // ["e", "o", "h", "l", "l"];
