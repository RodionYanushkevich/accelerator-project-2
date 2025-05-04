import Swiper from 'swiper';

import {EffectFade, Pagination} from 'swiper/modules';

import 'swiper/css/effect-fade';

const paginationContainer = document.querySelector('.hero__pagination.swiper-pagination');

new Swiper('.hero__swiper', {
  modules: [EffectFade, Pagination],
  loop:true,
  speed: 800,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: paginationContainer,
    type:'bullets',
    clickable: true,
    renderBullet: function (index) {
      return `<button class=" hero__pagination-bullet swiper-pagination-bullet" type="button">
      <span class="visually-hidden">кнопка пагинации туров слайд № ${index + 1}
      </span>
      </button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
      simulateTouch: false,
    }
  }
});

