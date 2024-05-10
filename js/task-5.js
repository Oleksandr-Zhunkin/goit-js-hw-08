function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');

changeColor.addEventListener('click', e => {
  const newColor = (bodyEl.style.backgroundColor = getRandomHexColor());
  spanColor.style.color = newColor;
});
