'use strict';

// ========================================
/**
 * Функция высшего порядка
 * — функция, принимающая в качестве параметров
 * другие функции или возвращающая функцию как результат
 */
// ========================================

/**
 * Higher Order Function, var.1
 * @param {Function} someFunction - a callback function
 */
// function hof(someFunction) {
//   console.log('Вызываю переданную мне функцию');
//   someFunction();
// }

// function fn() {
//   console.log('Обычная функция');
// }

// hof(fn);

// ========================================
/**
 * Higher Order Function, var.2
 * @param {Function} callback
 */
// function hof(callback) {
//   console.log('Вызываю переданную мне функцию');
//   callback('этот текст я получил от функции высшего порядка');
// }

// function fn(message) {
//   console.log(message);
// }

// hof(fn);

// ========================================
/**
 * Higher Order Function, var.3
 * @returns {Function} new function
 */
// function hof() {
//   const innerFunction = function() {
//     console.log('меня создали внутри другой функции');
//   };

//   return innerFunction;
// }

// const fn = hof();
// fn();

// ========================================
/**
 * Higher Order Function, var.3
 * @returns {Function} new function
 */
// const onSuccess = ({ coords: { latitude, longitude } }) => {
//   console.log(`https://www.google.com.ua/maps/@${latitude},${longitude},13z`);
// };

// const onError = error => console.log(error);

// window.navigator.geolocation.getCurrentPosition(onSuccess, onError);

// ========================================
/** Стрелочная функция
 *
 */
// ========================================
// явный возврат
// const fn1 = (a, b) => {
//   return a + b;
// };

// // не явный возврат
// const fn2 = (a, b) => a + b;

// console.log(fn1(1, 1)); // 2
// console.log(fn2(1, 1)); // 2

// ========================================
/** Абстрагирование повторения
 * Абстракция — скрытие деталей реализации.
 * Позволяет думать о задачах на более высоком
 * (абстрактном) уровне */
// ========================================
// function showI(x) {
//   // ...
//   // ...
//   // ...
//   // ...
//   // ...
//   // ...
//   console.log(x);
// }

// for (let i = 0; i < 5; i += 1) {
//   showI(i);
// }

// showI(456546);

// ========================================
/**
 * Абстрагирование повторения
 * - Фильтрация массива
 */
// ========================================
/* var.2 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

/* var.2 */
// const filter = function(array, test) {
//   const filteredElements = [];

//   array.forEach(element => {
//     if (test(element)) {
//       filteredElements.push(element);
//     }
//   });

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// ========================================
/* var.2 */
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = fruits.filter(fruit => fruit.isFresh);
// const fruitsWithQuantity = fruits.filter(fruit => fruit.quantity >= 120);

// console.log(freshFruits);
// console.log(fruitsWithQuantity);

/* var.3 */
// quantity > 100
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// function filter(arr, callback) {
//   const newArray = [];

//   arr.forEach(obj => {
//     if (callback(obj)) {
//       newArray.push(obj);
//     }
//   });

//   return newArray;
// }

// console.log(filter(fruits, obj => obj.quantity > 100));
// console.log(filter(fruits, obj => obj.isFresh));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(filter(arr, number => number >= 4 && number <= 7));

// ========================================
/**
 * Стек
 */
// ========================================
const fn1 = function() {
  console.log('функция 1');
};

const fn2 = function() {
  console.log('функция 2');
};

const fn3 = function() {
  console.log('функция 3');
  fn1();
  fn2();
};

fn3();

// ========================================
/**
 * Лексическое окружение
 * создание и наполнение словаря происходит
 * при вызове функции, а не при ее определении
 */
// ========================================
// /*
//   Global env - создается при исполнении файла скрипта
//     Record:  {}
//     Parent: null
// */

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записывается в момент объявления функции
//   [[Environment]] = Global env
// */
// const foo = function(z) {
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30}
//       Parent: Global env
//   */

//   const x = 100;
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30, x: 100}
//       Parent: Global env
//   */

//   return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// foo(30); // 150
