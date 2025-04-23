import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

new Swiper('.tours__swiper', {
  loop: true,
  speed: 300,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      // slidesPerView: 2,
    },
    1440: {
      // slidesPerView: 4,
      // simulateTouch: false,
    },
  },
});
