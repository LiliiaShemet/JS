'use strict';

// ========================================================
// setTimeout && setInterval
// ========================================================
// var timeout = setTimeout(() => console.log('Hello'), 2000); // 2000 ms
// clearTimeout(timeout); // delete timer

// var interval = setInterval(() => console.log('Hello'), 2000); // 2000 ms
// clearInterval(interval); // delete timer

// ========================================================
// debounce && throttle
// ========================================================
// const sections = document.querySelector('.sections');
// const title = document.querySelector('.title');

// sections.addEventListener('scroll', throttle(handleScroll, 200));

// function handleScroll(e) {
//   const value = e.target.scrollTop;

//   title.textContent = ~~value;
//   // console.log(~~value, new Date());
// }

// function throttle(callback, delay) {
//   let timeout; // id

//   return function() {
//     if (timeout) {
//       console.log('throttle');
//       return;
//     }

//     timeout = setTimeout(() => {
//       callback(...arguments);
//       timeout = null;
//     }, delay);
//   };
// }

// function debounce(callback, delay) {
//   let timeout; // id

//   return function() {
//     if (timeout) {
//       console.log('debounce');
//       clearTimeout(timeout);
//       timeout = null;
//     }

//     timeout = setTimeout(() => {
//       callback(...arguments);
//       timeout = null;
//     }, delay);
//   };
// }

// ========================================================
// set setcions size
// ========================================================
// const wrapper = document.querySelector('.sections');
// const input = document.querySelector('.input');

// input.addEventListener(
//   'input',
//   e => (wrapper.style.height = `${e.target.value}px`),
// );

// ========================================================
// IntersectionObserver
// ========================================================
const sectionList = document.querySelectorAll('.section');
const options = {
  threshold: 0.4,
};

const io = new IntersectionObserver(onEntry, options);
sectionList.forEach(section => io.observe(section));

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const { id } = entry.target.dataset;
      const current = document.querySelector('.active');
      const nextActive = document.querySelector(`li[data-id="${id}"]`);

      const img = entry.target.querySelector('img');
      const url = img.dataset.src;

      img.src = url;

      if (current) {
        current.classList.remove('active');
      }

      nextActive.classList.add('active');
      console.log(entry.target.dataset.id, entry.isIntersecting);
    }
  });
}
