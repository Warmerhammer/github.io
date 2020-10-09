// let i = 0;
// let randomMath = [];

// for (i; i < 5; i++) {
//   const entry = Math.random() * 10;
//   randomMath.push(parseInt(entry));
// }

// console.log(randomMath);

// const greaterThanFive = randomMath.filter(
//   (randomMath) => randomMath > 5
// );
// console.log(greaterThanFive);

// const mappedRandomMath = randomMath.map((number) => ({
//   num: number,
// }));

// console.log(`Mapped => ${mappedRandomMath}`);

// const reduced = randomMath.reduce((prevValue, curValue) => {
//   return prevValue * curValue;
// }, 1);

// console.log(`Reduced randomMath => ${reduced}`);

// const findMax = () => {
//   const max = Math.max(...randomMath);
//   console.log(max);
// };

// findMax();

// maxMinIterable = [];
// const findMaxMin = () => {
//   const max = Math.max(...randomMath);
//   const min = Math.min(...randomMath);
//   maxMinIterable.push(max, min);

// };

// findMaxMin();

// console.log(maxMinIterable);
// const [max, min] = maxMinIterable;
// console.log(max, min);

// const randomMathNumbers = new Set([...randomMath]);
// console.log(randomMathNumbers);

const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter((val) => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map((val) => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
      if (num > curMax) {
          curMax = num;
      }
  }
  return curMax;
} 

console.log(findMax(...numbers));

function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
  } 

 const [min, max] = findMinMax(...numbers);
 console.log(min, max);

 const userIds = new Set();
userIds.add(10);
userIds.add(10);
userIds.add(-5);

console.log(userIds);