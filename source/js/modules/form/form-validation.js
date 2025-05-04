const form = document.querySelector('.form');
const phoneInput = form.querySelector('.form__input[type="tel"]');
const emailInput = form.querySelector('.form__input[type="email"]');


const EMAILREGEX = /^[a-zа-яё0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zа-яё0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zа-яё0-9](?:[a-zа-яё0-9-]*[a-zа-яё0-9])?\.)+(?:[a-zа-яё]{2,}|рф|xn--[a-z0-9]+)$/iu;

form.setAttribute('novalidate', '');

const setError = (input, message) => {
  input.setCustomValidity(message);
  input.classList.add('error');
};

const resetError = (input) => {
  input.setCustomValidity(' ');
  input.classList.remove('error');
};

const formatPhoneNumber = (value) => {
  const numbers = value.replace(/\D/g, '');
  let formatted = '+7';

  if (numbers.length > 1) {
    formatted += ` (${numbers.substring(1, 4)}`;
  }
  if (numbers.length > 4) {
    formatted += `) ${numbers.substring(4, 7)}`;
  }
  if (numbers.length > 7) {
    formatted += `-${numbers.substring(7, 9)}`;
  }
  if (numbers.length > 9) {
    formatted += `-${numbers.substring(9, 11)}`;
  }

  return formatted;
};


phoneInput.addEventListener('focus', () => {
  if (phoneInput.value === '') {
    phoneInput.value = '+7';
  }
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value === '+7') {
    phoneInput.value = '';
  }
});
phoneInput.addEventListener('input', () => {
  resetError(phoneInput);
  phoneInput.value = formatPhoneNumber(phoneInput.value);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let isValid = true;

  resetError(phoneInput);
  resetError(emailInput);

  const phoneNumbers = phoneInput.value.replace(/\D/g, '');
  if (phoneNumbers.length < 11) {
    setError(phoneInput, 'Номер телефона должен содержать 11 цифр');
    isValid = false;
    phoneInput.reportValidity();
    return;
  }

  if (emailInput.value === '') {
    setError(emailInput, 'Поле не должно быть пустым');
    emailInput.focus();
    isValid = false;
  } else if (!EMAILREGEX.test(emailInput.value)) {
    setError(emailInput, 'Введите email формата: ваш.email@пример.рф / user123@mail.com');
    isValid = false;
  }

  if (!isValid) {
    emailInput.reportValidity();
    return;
  }

  form.submit();
});

emailInput.addEventListener('input', () => {
  if (emailInput.value === '') {
    emailInput.classList.remove('error');
  }
  if (emailInput.validity.customError) {
    resetError(emailInput);
  }
});
