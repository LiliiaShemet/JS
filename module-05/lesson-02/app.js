'use strict';

// ========================================
/* Прототипное наследование ES5 */
// ========================================

// ========
// конструктор Human
function Human(name, age) {
  this.name = name;
  this.age = age;
}

// добавляем собственный метод в прототип
Human.prototype.walk = function walk() {
  console.log(`${this.name} is walking`);
};

// ========
// конструктор Доктора
function Doctor(name, age, experience) {
  // вызываем конструктор родителя чтобы записались "name, age"
  Human.call(this, name, age); // super(name, age);

  this.experience = experience;
}

// привязываем прототип Human доктору
Doctor.prototype = Object.create(Human.prototype);
// явно указываем конструктор
Doctor.prototype.costructor = Doctor;

// добавляем собственный метод в прототип
Doctor.prototype.heal = function heal() {
  console.log(
    `${this.name} is healing from ${this.age - this.experience} years`,
  );
};

// ========
// конструктор Терапевта
function Therapist(name, age, experience, isCanConsult) {
  Doctor.call(this, name, age, experience); // super(name, age, experience);

  this.isCanConsult = isCanConsult;
}

Therapist.prototype = Object.create(Doctor.prototype);
Therapist.prototype.costructor = Therapist;

// переопределяем метод heal
Therapist.prototype.heal = function() {
  Doctor.prototype.heal.call(this); // super.heal();

  // дописываем что-то новое
  if (this.isCanConsult) {
    console.log(`and also ${this.name} is can consult`);
  }
};

const bobby = new Human('Bobby', 15);
const peter = new Doctor('Peter', 30, 10);
const john = new Therapist('John', 35, 12, true);

bobby.walk();
peter.walk(); // не будет работать, если мы не привяжем прототип Human доктору
john.walk(); // не будет работать, если мы не привяжем прототип Doctor терапевту

peter.heal();
john.heal(); // не будет работать, если мы не привяжем прототип Doctor терапевту

console.log(bobby);
console.log(peter);
console.log(john);

// ========================================
/* Прототипное наследование ES6 */
// ========================================

// // ========
// // класс Human
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log(`${this.name} is walking`);
//   }
// }

// // ========
// // класс Доктора наследуем от Human
// class Doctor extends Human {
//   constructor(name, age, experience) {
//     super(name, age); // Human.call(this, name, age);

//     this.experience = experience;
//   }

//   heal() {
//     console.log(
//       `${this.name} is healing from ${this.age - this.experience} years`,
//     );
//   }
// }

// // ========
// // конструктор Терапевта
// class Therapist extends Doctor {
//   constructor(name, age, experience, isCanConsult) {
//     super(name, age, experience); // Doctor.call(this, name, age, experience);

//     this.isCanConsult = isCanConsult;
//   }

//   heal() {
//     super.heal(); // Doctor.prototype.heal.call(this);

//     // дописываем что-то новое
//     if (this.isCanConsult) {
//       console.log(`and also ${this.name} is can consult`);
//     }
//   }
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Doctor('Peter', 30, 10);
// const john = new Therapist('John', 35, 12, true);

// bobby.walk();
// peter.walk();
// john.walk();

// peter.heal();
// john.heal();

// console.log(bobby);
// console.log(peter);
// console.log(john);

// ========================================
/* Array.map */
// ========================================
// var.1
// const arr = [1, 2, 3];
// const arr2 = arr.map(item => item * 2);

// // var.2
// const arr = [{ name: 'Bobby' }, { name: 'Peter' }];
// const arr2 = arr.map(item => {
//   return { ...item, age: 0 };
// });

// console.log(arr);
// console.log(arr2);

// var.3
// const arr = [1, 2, 3]; // <li>1</li>
// const arr2 = arr.map(item => `<li>${item}</li>`);

// console.log(arr2);

// ========================================
/* ToDo list */
// ========================================
// class ToDoList {
//   constructor(todos = []) {
//     this._todos = todos;
//   }

//   static random() {
//     console.log('a random number');
//   }

//   showTodos() {
//     console.log(list.todos);
//   }

//   addToDo(item) {
//     this._todos.push(item);
//   }

//   removeToDo(name) {
//     this._todos = this._todos.filter(todo => todo.name !== name);
//     this.showTodos();
//   }

//   setDone(name) {
//     this._todos = this._todos.map(todo => ({
//       ...todo,
//       done: todo.name === name ? true : todo.done,
//     }));
//     this.showTodos();
//   }

//   sortTodos(key) {
//     this._todos.sort((item1, item2) => {
//       if (item1[key] < item2[key]) {
//         return -1;
//       }
//       if (item1[key] > item2[key]) {
//         return 1;
//       }
//       return 0;
//     });
//     this.showTodos();
//   }

//   get todos() {
//     return this._todos;
//   }
// }

// const list = new ToDoList();

// list.addToDo({
//   name: 'Petr IV',
//   done: false,
// });
// list.addToDo({
//   name: 'Petr I',
//   done: false,
// });
// list.addToDo({
//   name: 'Petr XI',
//   done: false,
// });
// list.addToDo({
//   name: 'Petr II',
//   done: false,
// });

// list.removeToDo('масло');
// list.setDone('хлеб');
// list.sortTodos('name');

// console.log(list);
