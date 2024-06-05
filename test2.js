// // #1

// arr3 = [1, 3, 8, 2, 11, 6, 10, 8, 39, 10, 11, 13]
// let arrSum = 0;

// for (let i = 0; i < arr3.length; i++) {
//   console.log(arr3[i]);
//   arrSum = arrSum + arr3[i];
//   // 축약식 : arrSum += arr3[i];
// }

// console.log(arrSum);

// // #1-1

// arr = [1, 3, 8, 2, 11, 6, 10, 8, 39, 10, 11, 13]
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 1) {
//     sum = sum + arr[i];
//     console.log(arr[i]);
//   }
// }

// console.log(sum);

// // #2

// const arr = [1, '가', 8, '다', 11, 'a', 'c', 39, '사과', 11, 13];

// let flag = false;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string' && flag === false) {
//     console.log(arr[i])
//   } else if (typeof arr[i] !== 'string' && flag === true) {
//     console.log(arr[i])
//   }

//   if (i === arr.length - 1 && flag === false) {
//     flag = true;
//     i = 0;
//   }
// }

// // #3

// const arr = [1, '가', 8, '다', 11, 'a', 'c', 39, '사과', 11, 13];

// let str = '';
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     str = str + arr[i];
//     // 합산 되는 과정에 출력 : console.log(str);
//   }
// }

// console.log(str); // 합산 후에 출력

// #3-1

const arr = [1, 'a', 8, 'b', 11, 'c', 'd', 39, 'e', 11, 13];

let str = '';
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    str = str + arr[i].toUpperCase();
  }
}

console.log(str);

// let str = '';
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     str = str + arr[i].toUpperCase();
//   }
// }

// console.log(str);



// let sumStr = '';
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     sumStr = sumStr + arr[i];
//   }
// }

// console.log(sumStr)

// // #4

// const arr4 = [1, '가', 8, '다', 11, 'a', 'c', 39, '사과', 11, 13];
// const letterArr = [];

// for (let i = 0; i < arr4.length; i++) {
//   if (typeof arr4[i] === 'string') {
//     letterArr.push(arr4[i]);
//   }
// }

// console.log(letterArr);
