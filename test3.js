// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log(sum(1, 2));

// // function mul(a, b) {
// //   return a * b;
// // }

// // console.log(mul(3, 3));

// function mul2(num1, num2, num3) {
//   let min1 = 0;
//   let min2 = 0;

//   if (num1 < num2) {
//     min1 = num1;
//   } else {
//     min1 = num2;
//   }

//   if (num2 < num3) {
//     min2 = num2;
//   } else {
//     min2 = num3;
//   }

//   return min1 * min2;
// }

// console.log(mul2(1, 2, 3));



// // function solution(n) {
// //   let answer = 0;

// //   let sum = 0;

// //   for (let i = 1; i <= n; i++) {
// //     if (i % 2 === 0) {
// //       sum = sum + i;
// //     }
// //   }

// //   answer = sum;

// //   return answer;
// // }

// // console.log(solution(10));


// const arr = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

// function solution(numbers) {
//   let arrSum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     arrSum = arrSum + numbers[i];
//   }

//   return arrSum / numbers.length;
// }

// console.log(solution(arr));

const tc1 = [1, 4, 7, 3, 8, 10, 17, 32, 46, 45];

function solution(array, n) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      count = count + 1;
    }
  }
  return count;
}

console.log(solution(tc1, 3)); // 2