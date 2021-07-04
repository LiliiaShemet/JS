'use strict';

// список тестов
import tests from './tests-mock.js';

// ===================================================================
// Переменные
// ===================================================================

// Объект с ссылками на используемые елементами DOM
const refs = {
  questionNumber: document.querySelector('.question-number'),
  questionTitle: document.querySelector('.question-title'),

  form: document.querySelector('.answer-form'),
  answers: document.querySelector('.answers'),
  backButton: document.querySelector('.answer-back'),
  nextButton: document.querySelector('.answer-next'),

  results: document.querySelector('.results-wrapper'),
  resultCount: document.querySelector('.result-count'),
  resultPoints: document.querySelector('.result-points'),
  resultButton: document.querySelector('.result-button'),
};

// исходное состояние программы к которому можно будет вернуться
const initialState = {
  current: 0, // индекс текущего вопроса в массиве tests
  answers: [], // массив ответов пользователя
};

// внутренее состояние программы
let state = {};

// ===================================================================
// Подписка на события и инициализация состояния
// ===================================================================

// слушатели событий
refs.form.addEventListener('submit', handleSubmit);
refs.backButton.addEventListener('click', handleBack);
refs.resultButton.addEventListener('click', handleHideResult);

initState(); // инициализация внутреннего состояния программы
render(); // вызов рендера для подготовки DOM

// ===================================================================
// Функции
// ===================================================================

// Инициализация внутреннего состояния
// устанавливаются значения с initialState
function initState() {
  state = {
    ...initialState,
    answers: [...initialState.answers],
  };
}

/**
 * Render the current question and answers
 */
function render() {
  setQuestion(state, tests, refs);
  setAnswers(state, tests, refs);
  disableButton(refs.backButton, state.current);
}

/**
 * Show the result window
 */
function showResult() {
  const { answers } = state;
  let correctAnswers = 0;
  let totalPoints = 0;
  let correctPoints = 0;

  items.forEach(({ correct, points }, idx) => {
    totalPoints += points;
    if (correct === answers[idx]) {
      correctAnswers += 1;
      correctPoints += points;
    }
  });

  refs.resultCount.textContent = `${correctAnswers}/${items.length}`;
  refs.resultPoints.textContent = `${correctPoints}/${totalPoints}`;

  refs.results.classList.add('show');
}

/**
 * Hide the result window
 */
function handleHideResult() {
  initState();
  render();
  refs.results.classList.remove('show');
}

/**
 * Replace the question number and text in the DOM
 * @param {object} state with the current settings
 * @param {object} items - test items
 * @param {object} refs - references to the DOM objects
 */
function setQuestion(state, items, refs) {
  const total = items.length;
  const number = state.current + 1;
  const { question, points } = items[state.current];

  refs.questionNumber.textContent = `Question ${number}/${total} (${points} points)`;
  refs.questionTitle.textContent = question;
}

/**
 * Replace the answers list in the DOM
 * @param {object} state with the current settings
 * @param {object} items - test items
 * @param {object} refs - references to the DOM objects
 */
function setAnswers(state, items, refs) {
  const { answers } = items[state.current];

  refs.answers.innerHTML = answers.reduce(
    (acc, answer, index) => (acc += getAnswerMarkup(index, answer)),
    '',
  );
  refs.form.elements.answer.value = state.answers[state.current];
}

/**
 * Enable or disable Back button
 * @param {object} button reference
 * @param {number} current test index
 */
function disableButton(button, current) {
  button.disabled = current === 0;
}

/**
 * Return one answer markup in string format from template
 * @param {number} index
 * @param {string} text
 */
function getAnswerMarkup(index, text) {
  return `
    <label data-id="${index}">
      <input type="radio" name="answer" value="${index}" />
      <span>${text}</span>
    </label>
  `;
}

/**
 * Save the current answer
 * and go to the next question
 * @param {object} e - event
 */
function handleSubmit(e) {
  e.preventDefault();

  const value = e.target.elements.answer.value;

  if (!value) {
    return;
  }

  state.answers[state.current] = Number(value);

  if (state.current === tests.length - 1) {
    showResult();
  } else {
    state.current += 1;
    render();
  }
}

/**
 * Go to the previous question
 */
function handleBack() {
  const value = refs.form.elements.answer.value;

  state.answers[state.current] = Number(value);
  state.current -= 1;
  render();
}
