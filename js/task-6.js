function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlPoint = document.querySelector('#controls');
const boxElem = document.querySelector('#boxes');

const input = controlPoint.children[0];
const createBtn = controlPoint.children[1];
const destroyBtn = controlPoint.children[2];

createBtn.addEventListener('click', createBoxes);
createBtn.addEventListener('click', clearInput);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(e) {
  boxElem.innerHTML = '';
  const inputValue = input.value;
  const markup = [];

  if (inputValue < 1 || inputValue > 100) {
    return alert('Error! Incorrect number');
  }

  for (let i = 1; i <= inputValue; i += 1) {
    markup.push(
      `<div style="width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()};"></div>`
    );
  }

  const strMarkup = markup.join('');
  boxElem.insertAdjacentHTML('afterBegin', strMarkup);
  return;
}

function destroyBoxes(e) {
  boxElem.innerHTML = '';
}

function clearInput(e) {
  input.value = '';
}
