'use strict';

import tests from './tests-mock.js';

const refs = {
  questionNumber: document.querySelector('.question-number'),
  questionTitle: document.querySelector('.question-title'),
  answers: document.querySelector('.answers'),
  answerForm: document.querySelector('.answer-form'),
  backButton: document.querySelector('.answer-back'),
  resultCount: document.querySelector('.result-count'),
  resultPoints: document.querySelector('.result-points'),
  resultsWrapper: document.querySelector('.results-wrapper'),
  resultButton: document.querySelector('.result-button'),
};

let current = 0;
const userAnswers = [];

render();

refs.answerForm.addEventListener('submit', hadleSubmit);
refs.backButton.addEventListener('click', handleBack);
refs.resultButton.addEventListener('click', handleCloseResults);

function hadleSubmit(e) {
  e.preventDefault();

  const value = e.target.elements.answer.value;

  if (value === '') {
    return;
  }

  userAnswers[current] = Number(value);

  if (tests.length - 1 === current) {
    let correctAnswers = 0;
    let totalPoints = 0;

    tests.forEach((item, idx) => {
      if (item.correct === userAnswers[idx]) {
        correctAnswers += 1;
        totalPoints += item.points;
      }
    });

    showResults(correctAnswers, totalPoints);
  } else {
    current += 1;
    render();
  }
}

function showResults(correctAnswers, totalPoints) {
  refs.resultCount.textContent = correctAnswers;
  refs.resultPoints.textContent = totalPoints;
  refs.resultsWrapper.classList.add('show');
}

function handleCloseResults() {
  refs.resultsWrapper.classList.remove('show');
}

function handleBack() {
  const value = Number(refs.answerForm.elements.answer.value);

  userAnswers[current] = value;

  if (current === 0) {
    return;
  }

  current -= 1;
  render();
}

function render() {
  setQuestion(tests[current], current);
  setAnswers(tests[current], current);
}

function setQuestion(item, idx) {
  refs.questionNumber.textContent = `Question ${idx + 1} (${
    item.points
  } points)`;
  refs.questionTitle.textContent = item.question;
}

function setAnswers(item) {
  refs.answers.innerHTML = '';
  refs.answers.insertAdjacentHTML(
    'beforeend',
    item.answers.reduce(
      (acc, answer, idx) => (acc += getAnswerMarkup(answer, idx)),
      '',
    ),
  );
  refs.answerForm.elements.answer.value = userAnswers[current];
}

function getAnswerMarkup(answer, idx) {
  return `
    <label>
      <input type="radio" name="answer" value="${idx}" />
      <span>${answer}</span>
    </label>
  `;
}
