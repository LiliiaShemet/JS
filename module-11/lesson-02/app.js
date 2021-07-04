const refs = {
  button: document.querySelector('#get-data'),
  buttonText: document.querySelector('#get-data .text'),
  buttonSpinner: document.querySelector('#get-data .spinner'),
  usersList: document.querySelector('#users-list'),
  alert: document.querySelector('#alert'),
};

const tableRowTemplate = ({ id, name, account, amount }) => `
  <tr>
    <th scope="row">${id || ''}</th>
    <td>${name || ''}</td>
    <td>${account || ''}</td>
    <td>${amount || ''}</td>
  </tr>
`;

const alertTemplate = message => `
  <div
  class="alert alert-danger alert-dismissible fade show"
  role="alert"
  >
    <h5>${message || 'Error loading data!'}</h5>
    <p>Please try again or contact the support team.</p>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
`;

function disableButton() {
  refs.buttonText.textContent = 'Loading...';
  refs.buttonSpinner.removeAttribute('hidden');
  refs.button.setAttribute('disabled', true);
}

function enableButton() {
  refs.buttonText.textContent = 'Get Data';
  refs.buttonSpinner.setAttribute('hidden', true);
  refs.button.removeAttribute('disabled');
}

function clearUserList() {
  refs.usersList.innerHTML = '';
}

function renderData(data) {
  const [users, accounts] = data.length
    ? data
    : [
        data.name === 'users'
          ? data
          : {
              items: [],
            },
        data.name === 'accounts'
          ? data
          : {
              items: [],
            },
      ];

  const usersWithAccount = users.items.length
    ? users.items.map(user => {
        const { number, amount } =
          accounts.items.find(({ userId }) => userId === user.id) || {};

        return {
          ...user,
          account: number,
          amount,
        };
      })
    : accounts.items.map(({ number, amount }) => ({
        account: number,
        amount,
      }));

  refs.usersList.insertAdjacentHTML(
    'beforeend',
    usersWithAccount.map(item => tableRowTemplate(item)).join(''),
  );
}

function hideAlert() {
  // eslint-disable-next-line
  $('.alert').alert('close');
}

function showError(message) {
  refs.alert.insertAdjacentHTML('beforeend', alertTemplate(message));
}

function loadData() {
  const users = fetch('http://localhost:3000/users').then(res => res.json());
  const accounts = fetch('http://localhost:3000/accounts').then(res =>
    res.json().then(data => {
      if (data.errorMessage) {
        throw new Error(data.errorMessage);
      }

      return data;
    }),
  );

  return Promise.race([users, accounts]);
}

function handleGetData() {
  hideAlert();
  clearUserList();
  disableButton();

  loadData()
    .then(renderData)
    .catch(showError)
    .finally(enableButton);
}

refs.button.addEventListener('click', handleGetData);
