const body = document.querySelector('.body');
const header = document.querySelector('.header');
const button = header.querySelector('.header__button');

const navigation = header.querySelector('.navigation');
const navigationLinks = navigation.querySelectorAll('.navigation__link');


// const widthCheck

button.addEventListener('click', ()=>{
  button.classList.toggle('header__button--cross');

  if (!button.classList.contains('header__button--cross') & window.innerWidth < 1440) {
    navigationLinks.forEach((link) => {
      link.classList.add('navigation__link--hidden');
    });
  } else {
    navigationLinks.forEach((link) => {
      link.classList.remove('navigation__link--hidden');
    });
  }
  header.classList.toggle('header--menu-shown');


  body.classList.toggle('body--overlay-shown');
});

navigation.addEventListener('click', (evt)=>{
  if (evt.target.tagName === 'A') {
    body.classList.remove('body--overlay-shown');
    header.classList.toggle('header--menu-shown');
    button.classList.toggle('header__button--cross');
  }
});

window.addEventListener('resize', ()=> {
  if(window.innerWidth >= 1440) {

    header.classList.remove('header--menu-shown');
    body.classList.remove('body--overlay-shown');
    // button.classList.toggle('header__button--cross');
    navigationLinks.forEach((link) => {
      link.classList.remove('navigation__link--hidden');
    });
  } else {
    header.classList.remove('header--menu-shown');
    body.classList.remove('body--overlay-shown');
    button.classList.remove('header__button--cross');

    navigationLinks.forEach((link) => {
      link.classList.remove('navigation__link--hidden');
    });
  }
});
