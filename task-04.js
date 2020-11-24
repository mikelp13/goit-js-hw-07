const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const valueRef = document.querySelector('#value');


let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
