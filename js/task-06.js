const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid') ||
      inputRef.classList.replace('invalid', 'valid');
  } else
    inputRef.classList.replace('valid', 'invalid') ||
      inputRef.classList.add('invalid');
});
