function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createButton.addEventListener('click', handleCreateClick);
destroyButton.addEventListener('click', handleDestroyClick);

function handleCreateClick() {
  const amount = input.value;

  if (isValidAmount(amount)) {
    createBoxes(amount);
    input.value = '';
  }
}

function handleDestroyClick() {
  destroyBoxes();
}

function isValidAmount(amount) {
  return amount >= 1 && amount <= 100;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 1; i <= amount; i++) {
    boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
  }
  boxes.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
