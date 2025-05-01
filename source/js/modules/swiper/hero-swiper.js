import Swiper from 'swiper';

import {EffectFade, Pagination} from 'swiper/modules';

const paginationContainer = document.querySelector('.hero__pagination.swiper-pagination');

new Swiper('.hero__swiper', {

  modules: [EffectFade, Pagination],
  // loop: false,

  // speed: 300,
  slidesPerView: 1,
  // spaceBetween: 20,
  // simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: paginationContainer,
    // bulletElement:'button',
    clickable: true,

    renderBullet: function (index, className) {
      return `<button class="${className} hero__pagination-bullet swiper-pagination-bullet" type="button">
      <span class="visually-hidden">кнопка пагинации туров слайд №${index + 1}
      </span>
      </button>`;
    },
  }});

