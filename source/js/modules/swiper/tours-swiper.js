import Swiper from 'swiper';

import {Navigation} from 'swiper/modules';

new Swiper('.tours__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.tours__swiper-button.swiper-button-next',
    prevEl: '.tours__swiper-button.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 18,
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
