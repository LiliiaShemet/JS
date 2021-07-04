const express = require('express');
const app = express();

const { users } = require('./users');

app.get('/', (req, res) => {
  res.send(`<h3>Hello from express</h3>`);
});

app.get('/about', (req, res) => {
  res.send(`<h3>About page</h3>`);
});

app.get('/users', (req, res) => {
  setTimeout(() => res.send(users), 2000);
});

app.listen(3000, () => console.log('App is listen on port 3000'));
