'use strict';

function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => {
    vars[key] = value;
  });

  return vars;
}

function getUrlParam(parameter, defaultValue) {
  let urlParameter = defaultValue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlParameter = getUrlVars()[parameter];
  }

  return urlParameter;
}

const body = document.getElementsByTagName('body')[0];
const script = document.createElement('script');
const hw = document.getElementsByTagName('h3')[0];
const excercise = document.getElementsByTagName('h4')[0];
const mod = getUrlParam('mod', '01');
const ex = getUrlParam('ex', '01');

hw.innerText = `Module ${mod}`;
excercise.innerText = `Excercise ${ex}`;
script.src = `module-${mod}/hw/excercise-${ex}.js`;
script.type = 'module';
body.appendChild(script);
