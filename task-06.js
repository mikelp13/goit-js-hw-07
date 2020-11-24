const inputRef = document.querySelector('#validation-input');
const totalInputLength = Number(inputRef.getAttribute('data-length'));


inputRef.addEventListener('focus', handleInputFocus);


function handleInputFocus (event) {
  const inputLength = event.target.value.length;

   if (inputLength !== 0 && inputLength !== totalInputLength ){
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
   }

   if (inputLength === totalInputLength){
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
   }

   if (inputLength === 0){
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
   }

};