/**
 * sum
 */
// const str = '12345';
// let sum = 0;

// str.split('').forEach(a => (sum += Number(a)));

// console.log(sum);

/**
 * reverse
 */
// const str = 'реверс текста';
// let res = '';

// for (let i = str.length; i > 0; i--) {
//   res += str[i - 1];
// }

// console.log(res);

/**
 * index in iteration
 */
// const arr = ['apple', 'orange'];
// // 1 - apple
// // 2 - orange

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(`${i + 1} - ${arr[i]}`);
// }

// arr.forEach((e, i) => console.log(`${i + 1} - ${arr[i]}`));

/**
 * ID
 */
const newId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

console.log(newId());
console.log(newId());
console.log(newId());
