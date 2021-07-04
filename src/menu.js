const modules = [
  {
    number: 1,
    lessons: 2,
    excercises: 6,
  },
  {
    number: 2,
    lessons: 2,
    excercises: 7,
  },
  {
    number: 3,
    lessons: 2,
    excercises: 7,
  },
  {
    number: 4,
    lessons: 2,
    excercises: 2,
  },
  {
    number: 5,
    lessons: 2,
    excercises: 5,
  },
  {
    number: 6,
    lessons: 2,
    excercises: 10,
  },
  {
    number: 7,
    lessons: 2,
    excercises: 8,
  },
  {
    number: 8,
    lessons: 2,
    excercises: 1,
  },
  {
    number: 9,
    lessons: 2,
    excercises: 0,
  },
  {
    number: 10,
    lessons: 2,
    excercises: 0,
  },
  {
    number: 11,
    lessons: 2,
    excercises: 5,
  },
];

function generateMenuBlock(moduleLi, module, isLessons) {
  const lessonsUl = document.createElement('ul');
  const count = isLessons ? module.lessons : module.excercises;

  for (let i = 0; i < count; i += 1) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = i < 9 ? `0${i + 1}` : i + 1;
    const moduleNumber =
      module.number < 10 ? `0${module.number}` : module.number;

    a.href = isLessons
      ? `module-${moduleNumber}/lesson-${num}/index.html`
      : `hw.html?mod=${moduleNumber}&ex=${num}`;
    a.innerText = `${isLessons ? 'Lesson' : 'Excercise'} ${num}`;
    li.appendChild(a);
    lessonsUl.appendChild(li);
  }
  moduleLi.appendChild(lessonsUl);
}

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  const modulesRoot = document.createElement('ul');

  modules.forEach(module => {
    const moduleLi = document.createElement('li');
    moduleLi.className = 'module';

    const title = document.createElement('span');
    title.innerText = `Module ${module.number}`;

    moduleLi.appendChild(title);

    generateMenuBlock(moduleLi, module, true);
    generateMenuBlock(moduleLi, module, false);

    modulesRoot.appendChild(moduleLi);
  });

  body.appendChild(modulesRoot);
};
