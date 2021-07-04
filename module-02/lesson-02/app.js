'use strict';

// console.log('Lesson 4');

// ========================================
/* Функция */
// ========================================
// eslint-disable-next-line
// const sum1 = function(a, b) {
//   return a + b;
// };

// function sum2(a, b) {
//   return a + b;
// }

// const sum3 = (a, b) => {
//   return a + b;
// };

// console.log(sum1(1, 2));
// console.log(sum2(4, 5));
// console.log(sum3(3, 2));

/**
 * Returns the sum of a anb b
 * @param {number} a
 * @param {number} b
 */
// JSDoc
// function sum(a, b) {
//   console.log(a + b);

//   return;
//   true;
// }

// sum()
// console.log(sum(1, 2));

// function more1(a, b) {
//   if (a > b) {
//     return true;
//   }
//   return false;
// }

// function more2(a, b) {
//   return a > b;
// }

// const more3 = (a, b) => a > b;

// console.log(`5 > 2 = ${more1(5, 2)}`);
// console.log(`5 > 2 = ${more2(5, 2)}`);
// console.log(`5 > 2 = ${more3(5, 2)}`);

// function fn1(start, a, b, ...rest) {
//   // const arr = Array.from(arguments);
//   let sum = start;

//   rest.forEach(elem => {
//     sum += elem;
//   });

//   console.log(sum);
// }

// fn1(10, 1, 2, 3);

// const a = 1;

// function fn1() {
//   const a = 2;
//   console.log(a);

//   function fn2() {
//     console.log(a);
//   }

//   fn2();
// }

// fn1();
// console.log(a);

// =================================
// min
// =================================

// const arr = [1, 2, 3, 4, -55, 45, 6, 6, 7];
// let min = arr[0];

/* variant 1 */
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

/* variant 2 */
// arr.forEach(e => {
//   if (e < min) {
//     min = e;
//   }
// });

/* variant 3 */
// arr.forEach(e => {
//   min = e < min ? e : min;
// });

/* variant 4 */
// eslint-disable-next-line
// arr.forEach(e => (min = e < min ? e : min));

// console.log(min);

// =================================
// min & max
// =================================
// const minMax = arr => {
//   let min = arr[0];
//   let max = arr[0];

//   arr.forEach(e => {
//     min = e < min ? e : min;
//     max = e > max ? e : max;
//   });

//   // return `Min = ${min}, Max = ${max}`;
//   return [min, max];
// };

// console.log(minMax([2, 3, 1, 5, 7, 0, 2, -10]));

// =================================
// first letter to uppercase
// =================================
// const text = 'Если услОвие первого if не выполнилось, его тело пропускается';
// console.log(text);

// const arr = text.split(' ');
// console.log(arr);

// const newArray = [];
// arr.forEach(word => {
//   const firsLetter = word[0].toUpperCase();
//   const rest = word.slice(1).toLowerCase();

//   newArray.push(`${firsLetter}${rest}`);
// });
// console.log(newArray.join(' '));

// =================================
// array sorting
// =================================
// const arr = [1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10, 11, 12];
/* variant 1 */
// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);

/* variant 2 */
// arr.sort((a, b) => a - b);
// console.log(arr);

// =================================
// Напишите функцию filterRange(arr, a, b),
// которая принимает массив arr, ищет в нём элементы
// между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.
// =================================
// const filterRange = (arr, min, max) => {
//   const newArray = [];
//   arr.forEach(e => {
//     if (e >= min && e <= max) {
//       newArray.push(e);
//     }
//   });

//   return newArray;
// };

// const arr = [5, 3, 8, 1];
// const filtered = filterRange(arr, 1, 4);

// console.log('Original array:', arr); // 5,3,8,1 (без изменений)
// console.log('Filtered array', filtered); // 3,1 (совпадающие значения)

