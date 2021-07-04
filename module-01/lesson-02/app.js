'use strict';

// console.log('Lesson 2');

// ========================================
/* IF ELSE */
// ========================================
// const a = 1;
// const b = 2;

// if (a === b) {
//   console.log('equal');
// } else {
//   console.log('not equal');
// }

// ========================================
/* IF, ELSE IF, ELSE ... */
// ========================================
// const age = 18;

// if (age < 18) {
//   console.log('child');
// } else if (age >= 18 && age <= 70) {
//   console.log('mature');
// } else {
//   console.log('old man');
// }

// ========================================
/* SWITCH CASE */
// ========================================
const selected = 1; // здесь может быть prompt(...)
let message;

switch (selected) {
  case 1:
    message = 'У вас апельсин';
    break;

  case 2:
    message = 'У вас яблоко';
    break;

  case 3:
    message = 'У вас вишня';
    break;

  default:
    message = 'я не знаю что у вас';
}

console.log(message);

// ========================================
/* IF */
// ========================================
// const str = 'abc';

// /** if (str)
//  * равна
//  * if (str.length > 0) */
// if (str) {
//   console.log('it is ok');
// }

// ========================================
/* область видимости */
// ========================================
// const a = 1;
// console.log('level 1, a:', a);

// if (true) {
//   console.log('level 2, a:', a);

//   const b = 2;
//   console.log('level 2, b:', b);
// }

// ========================================
/* циклы FOR */
// ========================================
// for (let i = 0; i < 50; i += 10) {
//   console.log(i);
// }

// ========================================
/* циклы DO ... WHILE */
// ========================================
// let i = 0;

// do {
//   console.log(i);

//   i += 10;
// } while (i < 50);

// ========================================
/* циклы WHILE ... DO */
// ========================================
// let i = 0;

// while (i < 50) {
//   console.log(i);

//   i += 10;
// }

// ========================================
/* BREAK */
// ========================================
// let result = '';

// for (let i = 0; i < 500000; i += 1) {
//   console.log('before break', i);

//   if (i === 3) {
//     result = 'bingo';
//     break;
//   }
// }

// console.log(result);

// ========================================
/* CONTINUE */
// ========================================
// for (let i = 0; i < 5; i += 1) {
//   console.log('before continue', i);
//   continue;
//   console.log('after continue', i); // эта строка никогда не выполнится
// }

// ========================================
/* GAME */
// ========================================
// console.log('start');
// let userNumber;
// let numberX = Math.random() * 100;
// numberX = Math.round(numberX);

// do {
//   userNumber = prompt('Please enter a number (0 - 100)');
//   if (userNumber === null) {
//     break;
//   }
//   userNumber = Number.parseInt(userNumber, 10);

//   if (numberX < userNumber) {
//     console.log('<', userNumber);
//   }

//   if (numberX > userNumber) {
//     console.log('>', userNumber);
//   }
// } while (userNumber !== numberX);

// console.log(userNumber, 'WINNER!!!!');
// console.log('end');
