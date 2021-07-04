// function Counter(value = 0, step = 1) {
//   this.value = value;
//   this.step = step;
// }

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// };

// function updateValue(element, value) {
//   element.textContent = value;
// }

// // 1
// const counter1 = new Counter(10, 5);

// const counterWidget1 = document.querySelector('.counter.one');
// const decrementButton1 = counterWidget1.querySelector('.counter-decrement');
// const incrementButton1 = counterWidget1.querySelector('.counter-increment');
// const value1 = counterWidget1.querySelector('.counter-value');

// decrementButton1.addEventListener('click', () => {
//   counter1.decrement();
//   updateValue(value1, counter1.value);
// });

// incrementButton1.addEventListener('click', () => {
//   counter1.increment();
//   updateValue(value1, counter1.value);
// });

// // 2
// const counter2 = new Counter();

// const counterWidget2 = document.querySelector('.counter.two');
// const decrementButton2 = counterWidget2.querySelector('.counter-decrement');
// const incrementButton2 = counterWidget2.querySelector('.counter-increment');
// const value2 = counterWidget2.querySelector('.counter-value');

// decrementButton2.addEventListener('click', () => {
//   counter2.decrement();
//   updateValue(value2, counter2.value);
// });

// incrementButton2.addEventListener('click', () => {
//   counter2.increment();
//   updateValue(value2, counter2.value);
// });

// // initial update
// updateValue(value1, counter1.value);
// updateValue(value2, counter2.value);

function Counter(start = 0, step = 1) {
  this._value = start;
  this._step = step;
}

Counter.prototype.increment = function increment() {
  this._value += this._step;
};

Counter.prototype.decrement = function decrement() {
  this._value -= this._step;
};

Counter.prototype.updateDOMValue = function updateDOMValue(domElement) {
  domElement.textContent = this._value;
};

const counter1 = new Counter(10, 5);

const counterOne = document.querySelector('.counter.one');
const counterOneDecrement = counterOne.querySelector('.counter-decrement');
const counterOneIncrement = counterOne.querySelector('.counter-increment');
const counterOneValue = counterOne.querySelector('.counter-value');

counter1.updateDOMValue(counterOneValue);

counterOneDecrement.addEventListener('click', () => {
  counter1.decrement();
  counter1.updateDOMValue(counterOneValue);
});

counterOneIncrement.addEventListener('click', () => {
  counter1.increment();
  counter1.updateDOMValue(counterOneValue);
});

// ======
// widget 2
const counter2 = new Counter();

const counterTwo = document.querySelector('.counter.two');
const counterTwoDecrement = counterTwo.querySelector('.counter-decrement');
const counterTwoIncrement = counterTwo.querySelector('.counter-increment');
const counterTwoValue = counterTwo.querySelector('.counter-value');

counter2.updateDOMValue(counterTwoValue);

counterTwoDecrement.addEventListener('click', () => {
  counter2.decrement();
  counter2.updateDOMValue(counterTwoValue);
});

counterTwoIncrement.addEventListener('click', () => {
  counter2.increment();
  counter2.updateDOMValue(counterTwoValue);
});
