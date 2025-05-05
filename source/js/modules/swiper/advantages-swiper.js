import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import {swiperClassListToggle} from '../util/util.js';

const advantagesSwiperContainer = document.querySelector('.advantages__swiper');

let advantagesSwiper = null;

const swiperClonesInit = (swiperContainer) => {
  const slidesWrapper = swiperContainer.children[0];
  const slides = Array.from(slidesWrapper.children);
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    slidesWrapper.appendChild(clone);
  });
};

const swiperClonesDestroy = (swiperContainer) => {
  const clones = swiperContainer.querySelectorAll('.clone');
  clones.forEach((clone) => clone.remove());

};

const initSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerGroup: 2,
    initialSlide: 2,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.advantages__swiper-button.swiper-button-next',
      prevEl: '.advantages__swiper-button.swiper-button-prev',
    },
  });
};

const destroySwiper = () => {
  swiperClonesDestroy(advantagesSwiperContainer);
  advantagesSwiper.destroy(true, true);
  advantagesSwiper = null;
  swiperClassListToggle(advantagesSwiperContainer);
};

const resizeListener = () => {

  if (window.innerWidth >= 1440 && !advantagesSwiper) {
    swiperClassListToggle(advantagesSwiperContainer);
    swiperClonesInit(advantagesSwiperContainer);
    initSwiper();

  } else if (window.innerWidth < 1440 && advantagesSwiper) {
    destroySwiper();
  }
};

window.addEventListener('resize', resizeListener);
resizeListener();
