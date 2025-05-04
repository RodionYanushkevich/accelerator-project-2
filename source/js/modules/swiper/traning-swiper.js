import Swiper from 'swiper';

import {Navigation} from 'swiper/modules';

const toursSwiperContainer = document.querySelector('.training__swiper');
let isTabPressed = false;

const focusSwiperInit = () => {
  toursSwiperContainer.addEventListener('focusin', (evt) => {
    if(evt.target.tagName === 'A') {
      document.addEventListener('keydown', tabKeydownEvents);
    }
  }
  );

  toursSwiperContainer.addEventListener('focusout', () => {
    document.removeEventListener('keydown', tabKeydownEvents);
  });
};


const toursSwiper = new Swiper('.training__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  on: {
    init: function () {
      focusSwiperInit(this);
    }},
  navigation: {
    nextEl: '.training__swiper-button.swiper-button-next',
    prevEl: '.training__swiper-button.swiper-button-prev',
  },
  breakpoints: {
    768: {
      initialSlide: 0,
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1440: {
      initialSlide: 0,
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});

function tabKeydownEvents (evt) {
  const prevSlide = toursSwiperContainer.querySelector('.swiper-slide-active');

  const prevSlideLink = prevSlide.children[0].children[1];
  const nextSlideLink = toursSwiper.slides[toursSwiper.activeIndex + 1].children[0].children[1];
  if (evt.key === 'Tab') {
    evt.preventDefault();
    if (evt.shiftKey) {
      toursSwiper.slidePrev();
      prevSlideLink.focus();
    } else if(!isTabPressed){

      if (toursSwiper.realIndex === toursSwiper.slides.length - 1 && +prevSlide.getAttribute('data-swiper-slide-index') === toursSwiper.slides.length - 1) {
        evt.target.blur();
        return;
      }
      toursSwiper.slideNext();

      setTimeout(()=>{
        nextSlideLink.focus();
      }, 300);

      isTabPressed = true;

      setTimeout(() => {
        isTabPressed = false;
      }, 300);
    }
  }

  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.target.blur();
  }
}
