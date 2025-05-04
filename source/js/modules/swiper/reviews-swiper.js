import Swiper from 'swiper';

import {Navigation} from 'swiper/modules';

new Swiper('.reviews__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.reviews__swiper-button.swiper-button-next',
    prevEl: '.reviews__swiper-button.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    1440: {
      // slidesOffsetBefore: -20,
      // slidesOffsetAfter: 20,
      spaceBetween: 120,
      slidesPerView: 1,
      simulateTouch: false,
    },
  },
});
