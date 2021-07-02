const InputRef = document.querySelector('#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainerRef = document.querySelector('#boxes');

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getAmount() {
  let amount = InputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style = `height: ${size}px; width: ${size}px; background-color: ${randomColor()}`;
    boxesContainerRef.append(div);
  }
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
  InputRef.value = 0;
}

renderBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);
