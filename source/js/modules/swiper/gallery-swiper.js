import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import {swiperClassListToggle} from '../util/util.js';

const gallerySwiperContainer = document.querySelector('.gallery__swiper');

let gallerySwiper = null;

const initSwiper = () => {
  gallerySwiper = new Swiper(gallerySwiperContainer, {
    modules: [Navigation],
    loop:true,
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.gallery__swiper-button.swiper-button-next',
      prevEl: '.gallery__swiper-button.swiper-button-prev',
    },
  });
};

const destroySwiper = () => {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
    swiperClassListToggle(gallerySwiperContainer);
  }
};

const resizeListener = () => {
  if (window.innerWidth < 1440 && !gallerySwiper) {
    swiperClassListToggle(gallerySwiperContainer);
    initSwiper();
  } else if (window.innerWidth >= 1440 && gallerySwiper) {
    destroySwiper();
  }
};

window.addEventListener('resize', resizeListener);
resizeListener();
