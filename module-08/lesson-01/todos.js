'use strict';

// Объект с ссылками на используемые елементами DOM
const refs = {
  form: document.querySelector('.add-form'),
  todoList: document.querySelector('.todo-list'),
};

// Объект todos со список заданий и функциями для работы с ними
const todos = {
  items: [], // Список заданий

  // добавить задание
  addItem(item) {
    this.items.push(item);
    this.saveTodos();
  },

  // удалить задание
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveTodos();
  },

  // отметить задание как выполненное
  markDone(id) {
    this.items = this.items.map(item =>
      item.id === id
        ? {
            ...item,
            done: !item.done,
          }
        : item,
    );
    this.saveTodos();

    return this.items.find(item => item.id === id);
  },

  // сохранить задания в localStorage
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.items));
  },
};

// загрузка заданий с localStorage
loadTodos();

// подписка на события
refs.form.addEventListener('submit', handleSubmit);
refs.todoList.addEventListener('click', handleClick);

/**
 * Возвращает уникальный идентификатор
 */
function newId() {
  return `f${(~~(Math.random() * 1e8)).toString(16)}`;
}

/**
 * Загружает список заданий с localStorage в todos
 */
function loadTodos() {
  const persistedTodos = localStorage.getItem('todos');

  if (!persistedTodos) {
    return;
  }

  todos.items = JSON.parse(persistedTodos); // преобразует текст в объект и добавляет в модель
  todos.items.forEach(todo => {
    appendTodoItem(createTodoMarkup(todo)); // добавляет задачу в DOM
    markItemAsDone(todo); // отмечает выполненные задачи в DOM
  });
}

/**
 * Возвращает разметку для одной задачи
 * @param {object} todo - задание
 * @returns {string} <li>todo</li> markup
 */
function createTodoMarkup(todo) {
  return `
    <li class="todo-item" data-id="${todo.id}">
      <span>${todo.text}</span>
      <button>X</button>
    </li>
  `;
}

/**
 * Добавляет задачу в DOM
 * @param {string} text - разметка одной задачи
 */
function appendTodoItem(text) {
  refs.todoList.insertAdjacentHTML('afterbegin', text);
}

/**
 * Обработчик события отправки формы
 * - добавляет новое задание в список
 * - добавляет новое задание в DOM
 * - очищает форму
 * @param {object} e - event
 */
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const text = form.elements.text.value;

  if (!text) {
    return;
  }

  const todo = {
    id: newId(),
    text,
  };

  todos.addItem(todo);
  appendTodoItem(createTodoMarkup(todo)); // добавляет задачу в DOM
  form.reset();
}

/**
 * Отмечат выделенное задание как выполненное
 * @param {object} todo - модель задания
 */
function markItemAsDone(todo) {
  const item = document.querySelector(`.todo-item[data-id="${todo.id}"]`);

  if (todo.done) {
    item.classList.add('done');
  } else {
    item.classList.remove('done');
  }
}

/**
 * Обработчик события удаления задачи
 * - удаляет задачу с модели
 * - удаляет задачу с DOM
 * @param {object} event
 */
function handleClick({ target, currentTarget }) {
  const item = target.closest('.todo-item');

  if (target === currentTarget) {
    return;
  }

  const id = item.dataset.id;

  if (target.nodeName === 'BUTTON') {
    todos.removeItem(id);
    item.remove();
  } else {
    const todo = todos.markDone(id);
    markItemAsDone(todo);
  }
}
