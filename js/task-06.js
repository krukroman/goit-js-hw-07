const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  if (event.currentTarget.value.length != Number(inputRef.dataset.length)) {
    inputRef.classList.add('invalid') ||
      inputRef.classList.replace('valid', 'invalid');
  } else inputRef.classList.replace('invalid', 'valid');
});
