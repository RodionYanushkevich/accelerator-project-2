import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import {classListToggle} from './advantages-swiper';
const gallerySwiperContainer = document.querySelector('.gallery__swiper');

let gallerySwiper = null;

const initSwiper = () => {
  gallerySwiper = new Swiper(gallerySwiperContainer, {
    modules: [Navigation],
    // loop:true,
    speed: 300,
    spaceBetween: 5,
    slidesPerView: 2,
    // centeredSlides: true,
    // initialSlide: 2,
    breakpoints: {
      768: {
        // spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.gallery__swiper-button.swiper-button-next',
      prevEl: '.gallery__swiper-button.swiper-button-prev',
    },
  });
};
// проверка ?
const destroySwiper = () => {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
    classListToggle(gallerySwiperContainer);
  }
};

const resizeListener = () => {
  if (window.innerWidth < 1440 && !gallerySwiper) {
    classListToggle(gallerySwiperContainer);
    initSwiper();
  } else if (window.innerWidth >= 1440 && gallerySwiper) {
    destroySwiper();
  }
};

window.addEventListener('resize', resizeListener);
resizeListener();


