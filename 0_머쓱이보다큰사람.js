// https://school.programmers.co.kr/learn/courses/30/lessons/120585

const tc1 = [149, 180, 192, 170];
const height1 = 167; //3

function solution(array, height) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      count = count + 1;
    }
  }
  return count;
}

console.log(solution(tc1, height1)); //3