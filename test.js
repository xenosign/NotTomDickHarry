// let twoMultiples = 0;
// let fiveMultiples = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0 && i % 10 !== 0) {
//     twoMultiples = twoMultiples + i;
//   }

//   if (i % 5 === 0 && i % 10 !== 0) {
//     console.log(i);
//     fiveMultiples = fiveMultiples + i;
//   }
// }

// console.log(twoMultiples, fiveMultiples);

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0 || i % 5 === 0) {
//     console.log(i);
//     sum = sum + i;
//   }
// }

// console.log(sum);

// let sum = 0;

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     if (i % 2 == 0) {
//       sum = sum + i * j;
//     }
//   }
// }

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     if (i * j % 2 === 0) {
//       console.log(`${i} x ${j} = ${i * j}`)
//     }
//   }
// }


// console.log(sum);

// const arr = ['가', '나', '다', '라', '마', '바', '사'];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    arr2[i] = arr2[i] * 2;
  }
}

console.log(arr2);









// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 2 === 0) {
//     arr2[i] = arr2[i] * 2;
//   }
// }

// console.log(arr2);