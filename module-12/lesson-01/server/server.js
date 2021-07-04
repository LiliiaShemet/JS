// core
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// data
const users = require('./users.json');
const accounts = require('./accounts.json');

// app
const app = express(); // create instance of the server

// middlewares
app.use(cors()); // add CORS to the response headers
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

function getRandomTime() {
  // return Math.floor(Math.random() * 1000) + 3000;
  return 0;
}

app.get('/', (req, res) => {
  res.send('<h3>Promise demo</h3>');
});

app.get('/users', (req, res) => {
  if (req.query.userId) {
    res.json(users.items.find(({ id }) => id === Number(req.query.userId)));
  } else {
    setTimeout(() => res.json(users), getRandomTime());
  }
});

app.post('/users', (req, res) => {
  console.log(req.body);

  users.items.push({
    id: users.items.length + 1,
    ...req.body,
  });

  res.status(201).send('Ok');
});

app.delete('/users/:userId', (req, res) => {
  // users.items = users.items.filter(
  //   ({ id }) => id !== Number(req.params.userId),
  // );

  // res.json({ message: 'Ok' });
  res.status(301).json(users);
});

app.get('/accounts', (req, res) => {
  setTimeout(() => res.json(accounts), getRandomTime());
  // setTimeout(
  //   () =>
  //     res.status(500).json({ errorMessage: 'Unable to load accounts data!' }),
  //   getRandomTime(),
  // );
});

app.listen(3000, () => console.log('Listening on port 3000'));
