'use strict';

// ========================================
/* callback */
// ========================================
// function myFunction() {
//   console.log('Hello from my Function');
// }

// function fn2(callback) {
//   if (callback !== undefined) {
//     callback();
//   }
// }

// fn2(myFunction);

// ========================================
/* callback usage */
// ========================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
// const persons = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 21 },
//   { name: 'John', age: 30 },
// ];

// /**
//  * return new filtered array
//  * @param {array} arr
//  * @param {number} start includes
//  * @param {number} end includes
//  */
// function filter(originArray, callback) {
//   const newArray = [];

//   originArray.forEach(e => {
//     if (callback(e)) {
//       newArray.push(e);
//     }
//   });

//   return newArray;
// }

// function find(originArray, callback) {
//   let result;

//   originArray.forEach(e => {
//     if (callback(e)) {
//       result = e;
//     }
//   });

//   return result;
// }

// console.log(filter(persons, obj => obj.age > 18));
// console.log(filter(numbers, number => number >= 4 && number <= 7));
// console.log(filter(persons, obj => obj.name === 'Bobby'));

// console.log(find(persons, obj => obj.name === 'Peter'));
// console.log(find(numbers, number => number === 8));

// ========================================
/* closure - замыкания */
// ========================================
// function newCounter() {
//   let value = 0;

//   return function() {
//     return (value += 1); // eslint-disable-line
//   };
// }

// const counter1 = newCounter();
// const counter2 = newCounter();
// const counter3 = newCounter();

// console.log(counter1()); // 1

// console.log(counter2()); // 1
// console.log(counter2()); // 2

// console.log(counter3()); // 1
// console.log(counter3()); // 2
// console.log(counter3()); // 3

// // ========================================
// /* THIS for function */
// // ========================================
// function fn() {
//   console.log(this);
// }

/* example 1 */
// const obj = {
//   name: 'Bobby',
//   age: 15,
//   showThis() {
//     console.log(this);
//   },
// };
// obj.showThis(); // {name: "Bobby", age: 15, showThis: ƒ}

// const fn = obj.showThis;
// fn(); // window без "use strict" и udefined с "use strict"

// fn.call(obj); // {name: "Bobby", age: 15, showThis: ƒ}

/* example 2 */
function showThis(a, b) {
  console.log(`${this.name} smoked ${a + b} times yesterday`);
}

const bobby = {
  name: 'Bobby',
  age: 15,
};

const peter = {
  name: 'Peter',
  age: 30,
};

// call, apply, bind
showThis.call(bobby, 1, 2);
showThis.apply(peter, [1, 2]);

const callBobbyLater = showThis.bind(bobby);
const callPeterLater = showThis.bind(peter);

for (let i = 0; i < 4; i += 1) {
  callBobbyLater(1, i); // bobby.showThis
  callPeterLater(3, 5); // peter.showThis
}

// ========================================
/* THIS for arrow function */
// ========================================
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Doctor extends Human {
//   heal = () => {
//     console.log(this);
//   };
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Doctor('Peter', 30);

// console.log(bobby);
// console.log(peter);

// const fn = peter.heal;
// fn();

// ========================================
/* напишите свой bind */
// call, apply - есть
// ========================================
// function myBind(context, fn) {
//   return function() {
//     return fn.call(context);
//   };
// }

// function showThis(a, b) {
//   console.log(`${this.name} smoked ${a + b} times yesterday`);
// }

// const bobby = {
//   name: 'Bobby',
//   age: 15,
// };

// const callBobbyLater = myBind(bobby, showThis);
// callBobbyLater(1, 2); // bobby.showThis
