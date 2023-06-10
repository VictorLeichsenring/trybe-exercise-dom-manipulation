// Seu código aqui
const vision = document.getElementsByTagName('p');
vision[1].innerText = 'Estar em destaque no mercado de trabalho.';
const greenBox = document.getElementsByClassName('main-content');
greenBox[0].style.backgroundColor = 'rgb(76, 164, 109)';
const whiteBox = document.getElementsByClassName('center-content');
whiteBox[0].style.backgroundColor = 'white';
const title = document.getElementsByClassName('title');
title[0].innerText = 'Desafio - JavaScript';
vision[0].innerText = vision[0].innerText.toUpperCase();
let footer = '';
for (let i = 0; i < vision.length - 1; i += 1) {
  footer += ` ${vision[i].innerText}`;
}
vision[vision.length - 1].innerText = footer;
