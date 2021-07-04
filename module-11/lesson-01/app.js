// ========================================
/* setTimeout 1 */
// ========================================
// const myFunc = () => console.log('Hello from async');

// console.log('Start');

// setTimeout(myFunc, 0);

// for (let i = 0; i < 10000; i += 1) {
//   console.log('i:', i);
// }

// console.log('End');

// ========================================
/* setTimeout 2 */
// ========================================
// const timer1 = setTimeout(() => console.log('first'), 2000);
// const timer2 = setTimeout(() => console.log('second'), 3000);
// const timer3 = setTimeout(() => console.log('third'), 1000);

// console.log('Start');

// clearTimeout(timer1);
// clearTimeout(timer2);
// clearTimeout(timer3);

// ========================================
/* setInterval */
// ========================================
// const dateTime = document.querySelector('#date-time');
// const startButton = document.querySelector('#start-button');
// const stopButton = document.querySelector('#stop-button');

// let timerId;

// startButton.addEventListener('click', handleStart);
// stopButton.addEventListener('click', handleStop);

// function handleStart() {
//   timerId = setInterval(() => {
//     dateTime.textContent = new Date();
//     console.log(new Date());
//   }, 1000);
//   stopButton.removeAttribute('disabled');
//   startButton.setAttribute('disabled', 'true');
// }

// function handleStop() {
//   clearTimeout(timerId);
//   stopButton.setAttribute('disabled', 'true');
//   startButton.removeAttribute('disabled');
// }

// ========================================
/* Date */
// ========================================
const dateTime = document.querySelector('#date-time');

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  dateTime.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
