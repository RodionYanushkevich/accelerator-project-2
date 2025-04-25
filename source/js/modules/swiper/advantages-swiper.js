import Swiper from 'swiper';

import {Navigation} from 'swiper/modules';


let advantagesSwiper = null;

const initSwiper = () => {
  if (window.innerWidth >= 1440 && !advantagesSwiper) {
    advantagesSwiper = new Swiper('.advantages__swiper', {
      modules: [Navigation],
      loop: false,
      speed: 300,
      navigation: {
        nextEl: '.advantages__swiper-button.swiper-button-next',
        prevEl: '.advantages__swiper-button.swiper-button-prev',
      },
      spaceBetween: 20,
      slidesPerView: 1,
    });
  } else if (window.innerWidth < 1440 && advantagesSwiper) {
    advantagesSwiper.destroy(true, false);
    advantagesSwiper = null;
  }
};

initSwiper();
window.addEventListener('resize', initSwiper);
