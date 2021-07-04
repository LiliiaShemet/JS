'use strict';

const usersList = [
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
    age: 30,
  },
];

function users(req, res) {
  res.json(usersList);
}

function usersById(req, res) {
  const user = usersList.find(
    ({ id }) => id === req.swagger.params.userId.value,
  );

  res.json(user);
}

module.exports = {
  users,
  usersById,
};
