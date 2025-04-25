import Swiper from 'swiper';

import {Navigation} from 'swiper/modules';

new Swiper('.training__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 2,
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
      simulateTouch: false,
    },
  },
});
