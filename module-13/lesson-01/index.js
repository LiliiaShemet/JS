'use strict';

import { baseURL, timeout } from './constants.js';

// ========================================
/* CRUD */
// ========================================
// function getUserAccount(name) {
//   fetch(`http://localhost:3000/users?name=${name}`)
//     .then(res => res.json())
//     .then(res => {
//       const user = res[0];
//       console.log(user);
//       return fetch(`http://localhost:3000/accounts?userId=${user.id}`);
//     })
//     .then(res => res.json())
//     .then(res => console.log(res[0]));
// }

const axiosInstance = axios.create({
  baseURL,
  timeout,
});

function getUserAccount(name) {
  axiosInstance
    .get(`/users?name=${name}`)
    .then(({ data }) => {
      console.log(data[0]);
      return data[0].id;
    })
    .then(id => axiosInstance.get(`/accounts?userId=${id}`))
    .then(({ data }) => {
      console.log(data[0]);
    })
    .catch(error => console.log('MY ERROR'))
    .finally(() => {
      // ... disable spinner
    });
}

getUserAccount('Chris');
getUserAccount('John');

// axiosInstance
//   .post('/users', {
//     name: 'Geri',
//     age: 15,
//   })
//   .then(res => console.log(res));

// fetch('http://localhost:3000/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Geri',
//     age: 15,
//   }),
// })
//   .then(res => res.json())
//   .then(res => console.log(res));
