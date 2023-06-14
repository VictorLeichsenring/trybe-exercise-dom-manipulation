// Seu código aqui
function vision(msg) {
  const paragraphList = document.getElementsByTagName('p');
  paragraphList[1].innerText = msg;
}

function greenBox() {
  const box = document.getElementsByClassName('main-content');
  box[0].style.backgroundColor = 'rgb(76, 164, 109)';
}

function whiteBox() {
  const box = document.getElementsByClassName('center-content');
  box[0].style.backgroundColor = 'white';
}

function title(newTitle) {
  const titleList = document.getElementsByClassName('title');
  titleList[0].innerText = newTitle;
}

function upperCaseParagraph() {
  const paragraphList = document.getElementsByTagName('p');
  paragraphList[0].innerText = paragraphList[0].innerText.toUpperCase();
}

function footerContent() {
  const paragraphList = document.getElementsByTagName('p');
  let footer = '';
  for (let i = 0; i < paragraphList.length - 1; i += 1) {
    footer += ` ${paragraphList[i].innerText}`;
  }
  paragraphList[paragraphList.length - 1].innerText = footer;
}

vision('Estar em destaque no mercado de trabalho.');
greenBox();
whiteBox();
title('Desafio - JavaScript');
upperCaseParagraph();
footerContent();
