'use strict';
// ========================================
/**
 * ООП (Объектно-Ориентированное Программирование)
 */
// ========================================

/**
 * Класс — способ описания сущности,
 * определяющий состояние и поведение,
 * зависящее от этого состояния,
 * а также правила для взаимодействия
 * с данной сущностью (контракт).
 */
// ========================================
// function Auto(model, maxSpeed) {
//   this.model = model;
//   this.maxSpeed = maxSpeed;
// }

/**
 * Объект (экземпляр) — это отдельный представитель класса,
 * имеющий конкретное состояние и поведение,
 * полностью определяемое классом
 */
// const bmw = new Auto('BMW', 280);
// const audi = new Auto('Audi', 280);

// console.log(bmw);
// console.log(audi);

/**
 * Интерфейс — это набор свойств и методов класса,
 * доступных для использования при работе с экземпляром.
 */
// ========================================
// function Auto(model, maxSpeed) {
//   this.model = model;
//   this.maxSpeed = maxSpeed;
//   this.currentSpeed = 0;

//   /* этот метод будет в каждом екземпляре */
//   this.accelerate = function(speed) {
//     this.currentSpeed += speed;

//     if (this.currentSpeed > this.maxSpeed) {
//       this.currentSpeed = this.maxSpeed;
//     }
//   };
// }

/* этот метод будет только в классе и доступен по наследованию */
// Auto.prototype.accelerate = function(speed) {
//   this.currentSpeed += speed;

//   if (this.currentSpeed > this.maxSpeed) {
//     this.currentSpeed = this.maxSpeed;
//   }
// };

// const lada = new Auto('Lada 2101', 142);
// console.log(lada); // currentSpeed: 0

// lada.accelerate(50);
// console.log(lada); // currentSpeed: 50

// lada.accelerate(50);
// console.log(lada); // currentSpeed: 100

// lada.accelerate(50);
// console.log(lada); // currentSpeed: 142

// console.dir(lada);

// ========================================
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     return `${this.name} is walking!!!!!`;
//   }
// }

// class Doctor extends Human {
//   constructor(...props) {
//     super(...props);
//   }

//   walk() {
//     return `Doctor ${super.walk()}`;
//   }

//   healing() {
//     console.log(`${this.name} is healing`);
//   }
// }

// const someHuman = new Human('Bobby', 15);
// const doctor = new Doctor('Gregory House', 55);

// console.log(someHuman.walk());
// console.log(doctor.walk());
// doctor.healing();

/**
 * Конструкторы
 * Любая функция, кроме стрелочной,
 * может быть использована как конструктор,
 * то есть вызвана при помощи оператора new.
 * При вызове стрелки через new будет ошибка.
 */
// ========================================
// function work() {
//   console.log(`${this.name} is ${this.age > 18 ? 'working' : 'not working'}`);
// }

// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.work = work;

// const bobby = new Human('Bobby', 15); // вызов конструктора
// const peter = new Human('Peter', 30); // вызов конструктора

// bobby.work();
// peter.work();

// ========================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.walk = function() {
//   console.log(`${this.name} is walking`);
// };

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 30);

// console.dir(bobby);
// console.dir(peter);

// bobby.walk();
// peter.walk();

// ========================================
/**
 * Пример 1
 * Счет в банке
 */
// ========================================
// function Account(balance = 0) {
//   this.balance = balance;
// }

// Account.prototype.getBalance = function() {
//   return this.balance;
// };

// Account.prototype.deposit = function(amount) {
//   this.balance += amount;
// };

// Account.prototype.withDraw = function(amount) {
//   if (this.balance >= amount) {
//     this.balance -= amount;
//   } else {
//     throw new Error('Недостаточно средств на счету');
//   }
// };

// /* account 1 */
// const account1 = new Account(100);
// console.log('account 1 balance:', account1.getBalance()); // 100

// account1.deposit(100);
// console.log('account 1 balance:', account1.getBalance()); // 200

// account1.withDraw(170);
// console.log('account 1 balance:', account1.getBalance()); // 30

// // account1.withDraw(30);
// // console.log(account1.getBalance());

// /* account 2 */
// const account2 = new Account(0);
// console.log('account 2 balance:', account2.getBalance()); // 0

// account2.deposit(20);
// console.log('account 2 balance:', account2.getBalance()); // 20

// account2.withDraw(20);
// console.log('account 2 balance:', account2.getBalance()); // 0

// ========================================
/**
 * Todo editor
 */
// ========================================
