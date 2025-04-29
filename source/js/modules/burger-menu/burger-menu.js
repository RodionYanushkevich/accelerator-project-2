const button = document.querySelector('.header__button');
const header = document.querySelector('.header');


const navigationLinks = document.querySelectorAll('.navigation__link');
const body = document.querySelector('.body');


button.addEventListener('click', ()=>{
  header.classList.toggle('header--menu-shown');
  button.classList.toggle('header__button--cross');

  if (!button.classList.contains('header__button--cross') & window.innerWidth < 1440) {
    navigationLinks.forEach((link) => {
      link.setAttribute('tabindex', '-1');
    });
  } else {
    navigationLinks.forEach((link) => {
      link.setAttribute('tabindex', '0');
    });
  }
  body.classList.toggle('body--overlay-shown');
});

