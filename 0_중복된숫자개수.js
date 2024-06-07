// https://school.programmers.co.kr/learn/courses/30/lessons/120583

const tc1 = [1, 1, 2, 3, 4, 5];
const n1 = 1; // 2
const tc2 = [0, 2, 3, 4];
const n2 = 1; // 0

function solution(array, n) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      count = count + 1;
    }
  }

  return count;
}

console.log(solution(tc2, n2)); // 0