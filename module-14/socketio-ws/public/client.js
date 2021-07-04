const socket = io();
const userName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const refs = {
  form: document.getElementById('form'),
  messages: document.getElementById('messages'),
  userName: document.getElementById('user-name'),
};

refs.userName.textContent = userName;
refs.form.addEventListener('submit', handleFormSubmit);
socket.on('chat message', handleChatMessage);
socket.on('history', handleHistory);

function handleHistory(items) {
  refs.messages.innerHTML = '';
  refs.messages.insertAdjacentHTML(
    'afterbegin',
    items
      .reverse()
      .map(({ message, userName }) => `<li>${userName}: ${message}</li>`)
      .join(''),
  );
}

function handleChatMessage({ message, userName }) {
  refs.messages.insertAdjacentHTML(
    'afterbegin',
    `<li>${userName}: ${message}</li>`,
  );
}

function handleFormSubmit(e) {
  e.preventDefault();

  socket.emit('chat message', {
    message: e.target.elements.message.value,
    userName,
  });
  e.target.elements.message.value = '';
}
