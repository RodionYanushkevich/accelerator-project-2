import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import {swiperClassListToggle} from '../util/util.js';


let advantagesSwiper = null;

const advantagesSwiperContainer = document.querySelector('.advantages__swiper');
const nextButton = document.querySelector('.advantages__swiper-button.swiper-button-next');
const prevButton = document.querySelector('.advantages__swiper-button.swiper-button-prev');

// const clones = [];

const Slides = [];

// const initSwiper = () => {
//   advantagesSwiper = new Swiper('.advantages__swiper', {
//     modules: [Navigation],
//     loop:true,
//     speed: 300,
//     spaceBetween: 30,
//     slidesPerView: 3,
//     // slidesPerGroup:2,
//     centeredSlides: true,
//     initialSlide: 2,
//     // allowTouchMove: false,
//     // simulateTouch: false,
//     on: {
//       init: function() {
//         this.slides.forEach((slide) => {
//           Slides.push(slide.cloneNode(true));

//         });
//       }},
//     navigation: {
//       nextEl: '.advantages__swiper-button.swiper-button-next',
//       prevEl: '.advantages__swiper-button.swiper-button-prev',
//     },
//   });
// };

const advantagesList = document.querySelector('.advantages__list');
const slides = document.querySelectorAll('.advantages__list-item');

const initSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerGroup: 2,
    initialSlide: 2,
    on: { init: function() {
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.classList.Add('slide-clone');
        advantagesList.appendChild(clone);
      });

    } },
    navigation: {
      nextEl: '.advantages__swiper-button.swiper-button-next',
      prevEl: '.advantages__swiper-button.swiper-button-prev',
    },
  });
};
const i = 0;


// nextButton.addEventListener ('click', ()=> {
//   const wrapper = advantagesSwiper.wrapperEl;
//   const active = advantagesSwiper.activeIndex ;

//   const slides = advantagesSwiper.slides;
//   const clone1 = Slides[active - 1].cloneNode(true);
//   const clone = Slides[active - 2].cloneNode(true);
//   wrapper.appendChild(clone);
//   wrapper.appendChild(clone1);
//   advantagesSwiper.slideTo(active + 2);
//   i = i + 1;
//   if (i >= 2) {
//     slides[0].remove();
//     slides[1].remove();
//   }
//   advantagesSwiper.update();
//   clone.style.color = 'red';
//   clone1.style.color = 'green';


//   // advantagesSwiper.slideTo(active);

//   // setTimeout(() => {
//   // }, 1000);
//   // advantagesSwiper.update();
// });

// prevButton.addEventListener ('click', ()=> {
//   const active = advantagesSwiper.activeIndex ;

//   console.log(active);

// });

const destroySwiper = () => {
  if (advantagesSwiper) {
    advantagesSwiper.destroy(true, true);
    advantagesSwiper = null;
    swiperClassListToggle(advantagesSwiperContainer);
  }
};

const resizeListener = () => {
  if (window.innerWidth >= 1440 && !advantagesSwiper) {
    swiperClassListToggle(advantagesSwiperContainer);
    initSwiper();

  } else if (window.innerWidth < 1440 && advantagesSwiper) {
    destroySwiper();
  }
};


window.addEventListener('resize', resizeListener);
resizeListener();

