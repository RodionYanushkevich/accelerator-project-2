import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

new Swiper('.tours__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      simulateTouch: false,
    },
  },
});
