const form = document.querySelector('.form');

const phoneInput = form.querySelector('.form__input[type="tel"]');
const emailInput = form.querySelector('.form__input[type="email"]');

phoneInput.addEventListener('input', function() {
  let numbers = this.value.replace(/\D/g, '');

  if (!numbers.startsWith('7') && numbers.length > 0) {
    numbers = `7${ numbers}`;
  }

  let formatted = '+7';
  if (numbers.length > 1) {
    formatted += ` (${ numbers.substring(1, 4)}`;
  }
  if (numbers.length > 4) {
    formatted += `) ${ numbers.substring(4, 7)}`;
  }
  if (numbers.length > 7) {
    formatted += `-${ numbers.substring(7, 9)}`;
  }
  if (numbers.length > 9) {
    formatted += `-${ numbers.substring(9, 11)}`;
  }

  this.value = formatted;

  if (numbers.length > 11) {
    this.value = this.value.substring(0, 18);
  }
});

form.addEventListener('submit', (evt) => {
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.(?:[a-z]{2,}|рф)$/iu;
  console.log('asdasd');

  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailInput.setCustomValidity('Введите корректный email');
    emailInput.classList.add('error');
  } else {
    emailInput.setCustomValidity('');
    emailInput.classList.remove('error');
  }
  if (!isValid) {
    evt.preventDefault();
  }

});

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    emailInput.classList.remove('error');
    emailInput.setCustomValidity('');
  }
});
