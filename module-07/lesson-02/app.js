// ==========================================
// load
// ==========================================
// window.onload = function() {
//   console.log('Im ready');
// };

window.addEventListener('load', function() {
  console.log('Im ready');
});

window.onbeforeunload = function() {
  return false;
};

// 'use strict';

// ==========================================
// preventDefault
// ==========================================
// const link = document.querySelector('a');

// link.addEventListener('click', e => {
//   console.log('link pressed');
//   e.preventDefault();
//   console.log(e);
// });

// ==========================================
// input events
// ==========================================
// const input = document.querySelector('input');
// const title = document.querySelector('h3');

// input.addEventListener('focus', () => console.log('focus'));
// input.addEventListener('blur', () => console.log('blur'));

// input.addEventListener('change', e => {
//   console.log('change:', e.target.value);
// });

// input.addEventListener('input', e => {
//   title.textContent = e.target.value;
// });

// input.addEventListener('keydown', e => {
//   console.log(e);
// });

// ==========================================
// maze - лабиринт
// ==========================================
// const maze = document.querySelector('#maze');
// const indicator = document.querySelector('#indicator');
// const blocks = document.querySelectorAll('#maze .block');
// const start = document.querySelector('#maze .start');
// const finish = document.querySelector('#maze .finish');

// const alert = document.querySelector('#alert');
// const alertText = alert.querySelector('h2');
// const alertButton = alert.querySelector('button');

// let isPlaying = false;
// let isFail = false;

// const handleStart = () => {
//   if (!isPlaying) {
//     isPlaying = true;
//     isFail = false;

//     indicator.textContent = 'Play';
//   }
// };

// const handleFinish = () => {
//   if (isPlaying && !isFail) {
//     isPlaying = false;

//     alertText.textContent = 'You won!!!';
//     alertText.classList.add('success');
//     alert.classList.add('visible');

//     indicator.textContent = 'Stop';
//   }
// };

// const handleMazeMouseOut = () => {
//   if (isPlaying) {
//     isPlaying = false;

//     indicator.textContent = 'Stop';
//   }
// };

// const handleBlock = () => {
//   if (isPlaying && !isFail) {
//     isPlaying = false;
//     isFail = true;

//     alertText.textContent = 'You loose!!! :(';
//     alertText.classList.add('error');
//     alert.classList.add('visible');

//     indicator.textContent = 'Stop';
//   }
// };

// const handleCloseAlert = () => {
//   alert.classList.remove('visible');
//   alertText.classList.remove('success');
//   alertText.classList.remove('error');
// };

// // по одному
// start.addEventListener('mouseover', handleStart);
// finish.addEventListener('mouseover', handleFinish);
// maze.addEventListener('mouseleave', handleMazeMouseOut);
// alertButton.addEventListener('click', handleCloseAlert);

// // для группы элементов
// // blocks.forEach(block => block.addEventListener('mouseover', handleBlock));

// // используя всплытие событий
// maze.addEventListener('mouseover', e => {
//   if (e.target.classList.contains('block')) {
//     handleBlock();
//   }
// });

// =====================================================
// v.2
// =====================================================
// const indicator = document.querySelector('#indicator');
// const maze = document.querySelector('#maze');
// const blocks = document.querySelectorAll('.block');
// const start = document.querySelector('.start');
// const finish = document.querySelector('.finish');

// const alert = document.querySelector('#alert');
// const title = alert.querySelector('h2');
// const button = alert.querySelector('button');

// let isPlaying = false;
// let isFail = false;

// const handleStart = () => {
//   if (!isPlaying) {
//     isPlaying = true;
//     isFail = false;
//     // console.log('start');
//     indicator.textContent = 'Play';
//   }
// };

// const handleFinish = () => {
//   if (isPlaying) {
//     isPlaying = false;
//     // console.log('finish');
//     indicator.textContent = 'Stop';

//     title.textContent = 'You won!!!';
//     title.classList.remove('error');
//     title.classList.add('success');
//     alert.classList.add('visible');
//   }
// };

// const handleLeftMaze = () => {
//   if (isPlaying) {
//     isPlaying = false;
//     // console.log('left the game');
//     indicator.textContent = 'Stop';
//   }
// };

// const handleFail = () => {
//   if (isPlaying && !isFail) {
//     isFail = true;
//     isPlaying = false;

//     indicator.textContent = 'Stop';

//     title.classList.remove('success');
//     title.classList.add('error');
//     title.textContent = 'You loose!!! :(';
//     alert.classList.add('visible');
//   }
// };

// const handleCloseAlert = () => {
//   alert.classList.remove('visible');
// };

// const handleMazeFail = event => {
//   if (event.target.classList.contains('block')) {
//     handleFail();
//   }
// };

// // start.addEventListener('mouseover', handleStart);
// // finish.addEventListener('mouseover', handleFinish);
// // maze.addEventListener('mouseleave', handleLeftMaze);
// // button.addEventListener('click', handleCloseAlert);

// // blocks.forEach(block => block.addEventListener('mouseover', handleFail));

// // maze.addEventListener('mouseover', handleMazeFail);

// const obj = {
//   name: 'Bobby',
//   test: function testFunction() {
//     console.log(this.name);
//   },
// };

// obj.test();

// start.addEventListener('mouseover', obj.test.bind(obj));
