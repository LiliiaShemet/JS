'use strict';

// ======================================
// Распространение событий
// ======================================
const level1 = document.querySelector('#level-1');
const level2 = document.querySelector('#level-2');
const level3 = document.querySelector('#level-3');
const text = document.querySelector('#text');

level1.addEventListener('click', showTarget);
level2.addEventListener('click', showTarget);
level3.addEventListener('click', showTarget);
text.addEventListener('click', showTarget);

function showTarget(e) {
  e.stopPropagation();
  console.log('clicked on:', e.target.id);
  console.log('handled on:', e.currentTarget.id);
  console.log('------------------');
}
