const button = document.querySelector('.header__button');
const header = document.querySelector('.header');

button.addEventListener('click', ()=>{
  header.classList.toggle('header--menu-shown');
  button.classList.toggle('header__button--cross');
});
