const couterRef = document.querySelector('#counter');
const spanValueRef = couterRef.querySelector('#value');
const decrementBtn = couterRef.querySelector('[data-action="decrement"]');
const incrementBtn = couterRef.querySelector('[data-action="increment"]');
let value = Number(spanValueRef.textContent);

function decrementValue() {
  value -= 1;
  spanValueRef.textContent = value;
}

function incrementValue() {
  value += 1;
  spanValueRef.textContent = value;
}

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);
