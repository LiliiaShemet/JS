// const arr = [1, 2, 3, 4, 5];

// for (const item of arr) {
//   console.log(item);
// }

// ========================================
/* Iterator 1 */
// ========================================
// const obj = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       to: this.to,
//       current: this.from,

//       next() {
//         if (this.current <= this.to) {
//           return { done: false, value: this.current++ };
//         }

//         return { done: true };
//       },
//     };
//   },
// };

// const objIterator = obj[Symbol.iterator]();
// console.log(objIterator.next()); // 1
// console.log(objIterator.next()); // 2
// console.log(objIterator.next()); // 3
// console.log(objIterator.next()); // 4
// console.log(objIterator.next()); // 5
// console.log(objIterator.next()); // end

// for (const item of obj) {
//   console.log(item);
// }

// ========================================
/* Iterator 2 */
// ========================================
// eslint-disable-next-line
// Array.prototype[Symbol.iterator] = function() {
//   return {
//     items: this,
//     current: this.length - 1,
//     to: 0,

//     next() {
//       if (this.current >= this.to) {
//         return { done: false, value: this.items[this.current--] };
//       }

//       return { done: true };
//     },
//   };
// };

// // const arr = [1, 2, 3, 4, 5];
// const humans = ['Bobby', 'Peter', 'Chris'];

// // for (const item of humans) {
// //   console.log(item);
// // }

// const human = humans[Symbol.iterator]();
// console.log(human.next()); // {done: false, value: "Chris"}
// console.log(human.next()); // {done: false, value: "Peter"}
// console.log(human.next()); // {done: false, value: "Bobby"}
// console.log(human.next()); // {done: true}

// ========================================
/* Generators 1 */
// ========================================
// function* getNumbers() {
//   yield 5;
//   yield 4;
//   yield 3;
//   yield 2;
//   yield 1;
// }

// const x = getNumbers();
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

// ========================================
/* Generators 2 */
// ========================================
// function* getTimes() {
//   const x = yield 5;
//   const y = yield 4 + x;
//   yield 3 + y;
//   yield 2;
//   yield 1;
// }

// const x = getTimes();
// console.log(x.next(x.next(x.next().value).value));
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

// ========================================
/* Generators 3 */
// ========================================
// function execute(generator, yieldValue) {
//   const next = generator.next(yieldValue);

//   if (!next.done) {
//     next.value.then(
//       result => execute(generator, result),
//       err => generator.throw(err),
//     );
//   } else {
//     // обработаем результат return из генератора
//     // обычно здесь вызов callback или что-то в этом духе
//     // console.log('User account:', next.value);
//   }
// }

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// function* getUserAndAccount(name) {
//   const users = yield axiosInstance.get(`/users?name=${name}`);
//   console.log(users.data[0]);

//   const accounts = yield axiosInstance.get(
//     `/accounts?userId=${users.data[0].id}`,
//   );
//   console.log(accounts.data[0]);
// }

// execute(getUserAndAccount('Chris'));

// ========================================
/* Async ... Await */
// ========================================
// eslint-disable-next-line
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const getUserAndAccount = async name => {
  const users = await axiosInstance.get(`/users?name=${name}`);
  console.log(users.data[0]);

  const userId = users.data[0].id;
  const accounts = await axiosInstance.get(`/accounts?userId=${userId}`);
  console.log(accounts.data[0]);

  return {
    user: users.data[0],
    account: accounts.data[0],
  };
};

getUserAndAccount('Chris')
  .then(res => console.log(res))
  .catch(error => console.log('OH! ERROR HAPPENED!!!!'))
  .finally(() => console.log('Bye'));
