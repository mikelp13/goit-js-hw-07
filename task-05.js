const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', event => {
  event.target.value
  ? (outputNameRef.textContent = event.target.value)
  : (outputNameRef.textContent = 'незнакомец');
  
  // outputNameRef.textContent = event.target.value;
  // if (event.target.value === '') {
  //   outputNameRef.textContent = 'незнакомец';
  // }
});
