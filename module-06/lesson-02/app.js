// =============================================================================
// Задание 1
// =============================================================================
/**
 * Перевести Цельсия в Фаренгейты
 * Написать функцию которая пересчитывает из градусов Цельсия в градусы Фаренгейта
 * - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.
 */
// const convertToF = temp => (temp * 9) / 5 + 32;

// console.log(convertToF(-30)); // -22
// console.log(convertToF(-10)); // 14
// console.log(convertToF(0)); // 32
// console.log(convertToF(20)); // 68
// console.log(convertToF(30)); // 86

// =============================================================================
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */
// const reverseString = str =>
//   str
//     .split('')
//     .reverse()
//     .join('');

// console.log(reverseString('hello')); // "olleh".
// console.log(reverseString('Howdy')); // "ydwoH".
// console.log(reverseString('Greetings from Earth')); // "htraE morf sgniteerG".

// =============================================================================
// Задание 3
// =============================================================================
/**
 * Найдите самое длинное слово в строке
 * Написать функцию которая возвращает длину самого длинного слова в предложении
 */
// const findLongestWordLength = str => {
//   const words = str.split(' ');
//   let res = words[0];

//   words.forEach(word => {
//     if (word.length > res.length) {
//       res = word;
//     }
//   });

//   console.log(res.length);
// };

// findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
// findLongestWordLength('May the force be with you'); // 5
// findLongestWordLength('Google do a barrel roll'); // 6
// findLongestWordLength(
//   'What is the average airspeed velocity of an unladen swallow',
// ); // 8
// findLongestWordLength(
//   'What if we try a super-long word such as otorhinolaryngology',
// ); // 19

// // =============================================================================
// // Задание 4
// // =============================================================================
/**
 * Подтвердите окончание строки
 * Проверьте, заканчивается ли строка (первый аргумент, str)
 * заданной целевой строкой (второй аргумент, target).
 */
// const confirmEnding = (str, target) =>
//   str.substring(str.length - target.length) === target;

// Не спортивный вариант
// const confirmEnding = (str, target) => str.endsWith(target);

// console.log(confirmEnding('Bastian', 'n')); // true.
// console.log(confirmEnding('Congratulation', 'on')); // true.
// console.log(confirmEnding('Open sesame', 'same')); // true.
// console.log(confirmEnding('Open sesame', 'pen')); // false.

// =============================================================================
// Задание 5
// =============================================================================
/**
 * Повторить строку
 * Повторите данную строку str (первый аргумент) num раз (второй аргумент).
 * Вернуть пустую строку, если num не является положительным числом.
 */
// const repeatStringNumTimes = (str, count) => {
//   let res = '';

//   for (let i = 0; i < count; i += 1) {
//     res += str;
//   }

//   return res;
// };

// console.log(repeatStringNumTimes('*', 30)); // "***"
// console.log(repeatStringNumTimes('abc', 3)); // "abcabcabc"
// console.log(repeatStringNumTimes('abc', 1)); // "abc"
// console.log(repeatStringNumTimes('abc', -2)); // ""

// =============================================================================
// Задание 6
// =============================================================================
/**
 * Разница двух массивов
 * Сравните два массива и верните новый массив с элементами,
 * найденными только в одном из двух указанных массивов, но не в обоих.
 * Другими словами, вернуть симметричную разность двух массивов.
 */
// const diffArray = (arr1, arr2) => {
//   let res = [];

//   res = arr1.reduce(
//     (acc, item) => (!arr2.includes(item) ? [...acc, item] : acc),
//     [],
//   );

//   arr2.forEach(item => {
//     if (!arr1.includes(item)) {
//       res.push(item);
//     }
//   });

//   console.log(res);
// };

// diffArray(['diorite', 'andesite'], ['diorite', 'dirt']); // ["andesite", "dirt"].
// diffArray([1, 2, 3], [1, 2, 4]); // [3, 4]
// diffArray(['andesite', 'grass'], ['andesite', 'grass']); // []

// =============================================================================
// Задание 7
// =============================================================================
/**
 * Пропущенные буквы
 * Найдите пропущенную букву в диапазоне букв и верните ее.
 */
// const fearNotLetter = str => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const start = alphabet.indexOf(str[0]);
//   const end = alphabet.indexOf(str[str.length - 1]);
//   const fragment = alphabet.substring(start, end + 1);

//   let res = undefined;

//   fragment.split('').forEach(letter => {
//     if (!str.includes(letter)) {
//       res = letter;
//     }
//   });

//   console.log(str, fragment, res);
// };

// fearNotLetter('abce'); // "d"
// fearNotLetter('abcdefghjklmno'); // "i"
// fearNotLetter('stvwx'); // "u"
// fearNotLetter('bcdf'); // "e"
// fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined

// =============================================================================
// Задание 8
// =============================================================================
/**
 * Сумма всех четных чисел
 * Посчитайте сумму всех четных чисел в массиве
 */
// const sumEvens = arr =>
//   arr.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc += number;
//     }

//     return acc;
//   }, 0);

// console.log(sumEvens([1, 2, 3, 4])); // 6
// console.log(sumEvens([11, 22, 33, 44])); // 66
// console.log(sumEvens([5, 7, 8, 9])); // 8
// console.log(sumEvens([1, 3, 5, 7])); // 0

// =============================================================================
// Задание 9
// =============================================================================
/**
 * Создайте животного, млекопитающегося и собаки (наследование)
 * Напишите конструкторы Animal, Mammal и Dog
 * которые наследуются друг от друга.
 * Создайте свойства и методы для классов:
 *  Animal - limbs (конечности шт.) - number
 *  Mammal - isMammal (является млекопитающим) - boolean
 *  Dog - bark() (гав-гав) - function
 */
// class Animal {
//   constructor(limbs) {
//     this.limbs = limbs;
//   }
// }

// class Mammal extends Animal {
//   constructor(limbs) {
//     super(limbs);
//     this.isMammal = true;
//   }
// }

// class Dog extends Mammal {
//   bark() {
//     console.log('гав-гав');
//   }
// }

// const dog = new Dog(4);

// console.log(dog.limbs); // 4
// console.log(dog.isMammal); // true
// dog.bark(); // гав-гав

// =============================================================================
// Задание 10
// =============================================================================
/**
 * Напишите пример замыкания
 * Например счетчик
 */
// function counter(value = 0) {
//   return function() {
//     return (value += 1);
//   };
// }

// const count = counter(10);

// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3

// const count1 = counter();

// console.dir(count);
// console.dir(count1);

// =============================
// call, bind
// =============================
// const obj = {
//   name: 'Bobby',
// };

// const obj2 = {
//   name: 'Peter',
// };

// const sayHello = function() {
//   console.log(`Hello ${this.name}`);
// };

// // sayHello.call(obj);
// // sayHello.call(obj2);

// const c1 = sayHello.bind(obj);
// c1(); // obj

// ==========================
// const users = [{ name: '1' }, { name: '2' }];

// const result = users
//   .filter(({ name }) => name === '1')
//   .map(user => {
//     const { name } = user;

//     return name;
//   });

// console.log(result);

// ==========================
// const a = [];
// const b = [];

// console.log(a == b);
// console.log(a != b);
// console.log(!a == b);
// console.log(a == !b);
// console.log(!a == !b);

// ==========================
