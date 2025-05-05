import Swiper from 'swiper';

import {Navigation, A11y} from 'swiper/modules';

new Swiper('.training__swiper', {
  modules: [Navigation, A11y],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
  a11y: {
    enabled: true,
  },
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
