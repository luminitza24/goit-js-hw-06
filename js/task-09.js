
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor);
function changeColor() {
const color =  getRandomHexColor();
 document.body.style.backgroundColor = color;
 const nume = document.querySelector('.color');
nume.textContent = getRandomHexColor();
}
