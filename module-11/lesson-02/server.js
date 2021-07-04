const express = require('express');
const cors = require('cors');

const app = express();
const users = {
  name: 'users',
  items: [
    {
      id: 1,
      name: 'Bobby',
      age: 15,
    },
    {
      id: 2,
      name: 'Peter',
      age: 20,
    },
    {
      id: 3,
      name: 'John',
      age: 25,
    },
    {
      id: 4,
      name: 'Chris',
      age: 30,
    },
  ],
};
const accounts = {
  name: 'accounts',
  items: [
    {
      id: 1,
      userId: 1,
      amount: 1000,
      number: 260087654321,
    },
    {
      id: 2,
      userId: 2,
      amount: 2000,
      number: 260012345678,
    },
    {
      id: 3,
      userId: 3,
      amount: 3000,
      number: 260098745678,
    },
    {
      id: 4,
      userId: 4,
      amount: 4000,
      number: 260047568392,
    },
  ],
};

function getRandomTime() {
  return Math.floor(Math.random() * 1000) + 1000;
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h3>Promise demo</h3>');
});

app.get('/users', (req, res) => {
  setTimeout(() => res.json(users), getRandomTime());
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
