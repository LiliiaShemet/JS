// fetch('http://localhost:3000/users/1')
//   .then(res => res.json())
//   .then(({ id }) => console.log(id));

// fetch('http://localhost:3000/accounts')
//   .then(res => res.json())
//   .then(res => console.log(res));

// const getUserAndAccount = () => {
//   axios('http://localhost:3000/users?userName=Chris')
//     .then(({ data }) => {
//       console.log(data);

//       return data;
//     })
//     .then(({ id }) => axios(`http://localhost:3000/accounts?userId=${id}`))
//     .then(({ data }) => console.log(data));
// };

// eslint-disable-next-line
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// const getUserAndAccount = async name => {
//   const user = await axiosInstance(`/users?userName=${name}`).then(
//     res => res.data,
//   );
//   console.log(user);

//   const account = await axiosInstance(`/accounts?userId=${user.id}`);
//   console.log(account.data);
// };

// getUserAndAccount('Chris');

// ========================================
/* Iterator 1 */
// ========================================
// const range = {
//   from: 5,
//   to: 10,
// };

// range[Symbol.iterator] = function() {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       }
//       return { done: true };
//     },
//   };
// };

// // eslint-disable-next-line
// for (const item of range) {
//   console.log(item);
// }

// const a = range[Symbol.iterator]();
// console.log(a.next()); // 5
// console.log(a.next()); // 6
// console.log(a.next()); // 7
// console.log(a.next()); // 8
// console.log(a.next()); // 9
// console.log(a.next()); // 10
// console.log(a.next()); // done

// ========================================
/* Iterator 2 */
// ========================================
// // eslint-disable-next-line
// Array.prototype[Symbol.iterator] = function() {
//   return {
//     items: this,
//     current: this.length - 1,

//     next() {
//       if (this.current >= 0) {
//         return { done: false, value: this.items[this.current--] };
//       }
//       return { done: true };
//     },
//   };
// };

// const arr = [1, 2, 3, 4, 5];

// for (const item of arr) {
//   console.log(item);
// }

// ========================================
/* Generators */
// ========================================
function* getUserAccount(name) {
  const users = yield axios(`http://localhost:3000/users?name=${name}`);
  const accounts = yield axios(
    `http://localhost:3000/accounts?userId=${users.data[0].id}`,
  );

  return accounts.data[0];
}

function execute(generator, yieldValue) {
  const next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err),
    );
  } else {
    // обработаем результат return из генератора
    // обычно здесь вызов callback или что-то в этом духе
    console.log('User account:', next.value);
  }
}

execute(getUserAccount('Peter'));
