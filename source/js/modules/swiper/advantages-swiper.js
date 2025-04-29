import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

let advantagesSwiper = null;
const advantagesSwiperContainer = document.querySelector('.advantages__swiper');
const nextButton = document.querySelector('.advantages__swiper-button.swiper-button-next');
const prevButton = document.querySelector('.advantages__swiper-button.swiper-button-prev');
const clones = [];

const classListToggle = (swiperContainer) => {
  swiperContainer.classList.toggle('swiper-container');
  const swiperWrapper = swiperContainer.children[0];
  swiperWrapper.classList.toggle('swiper-wrapper');

  const swiperSlidesArray = Array.from(swiperWrapper.children);
  swiperSlidesArray.forEach((slide) => {
    slide.classList.toggle('swiper-slide');
  });
};

const Slides = [];

const initSwiper = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    modules: [Navigation],
    loop:true,
    speed: 300,
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 2,
    on: {
      init: function() {
        this.slides.forEach((slide) => {
          Slides.push(slide.cloneNode(true));

        });
      }},
    navigation: {
      nextEl: '.advantages__swiper-button.swiper-button-next',
      prevEl: '.advantages__swiper-button.swiper-button-prev',
    },
  });
};

const destroySwiper = () => {
  if (advantagesSwiper) {
    clones.forEach((clone) => clone.remove());
    clones.length = 0;

    advantagesSwiper.destroy(true, true);
    advantagesSwiper = null;
    classListToggle(advantagesSwiperContainer);
  }
};

const resizeListener = () => {
  if (window.innerWidth >= 1440 && !advantagesSwiper) {
    classListToggle(advantagesSwiperContainer);
    initSwiper();
  } else if (window.innerWidth < 1440 && advantagesSwiper) {
    destroySwiper();
  }
};

let i = 0;

nextButton.addEventListener ('click', ()=> {
  const wrapper = advantagesSwiper.wrapperEl;
  const slides = advantagesSwiper.slides;
  const active = advantagesSwiper.activeIndex ;

  const clone = Slides[i].cloneNode(true);
  i = i + 1;
  // Убрись за собой потом

  clone.style.opacity = '0.5';
  wrapper.appendChild(clone);

  if (i === 5) {
    i = 0;
  }

  advantagesSwiper.slideTo(active - 1, 0, false);

  advantagesSwiper.update();
  slides[0].remove();
});


prevButton.addEventListener ('click', ()=> {
  const wrapper = advantagesSwiper.wrapperEl;
  const slides = advantagesSwiper.slides;
  const active = advantagesSwiper.activeIndex ;
  if (i === 0) {
    i = 5;
  }

  i = i - 1;

  const clone = Slides[i].cloneNode(true);


  clone.style.opacity = '0.5';
  // wrapper.appendChild(clone);
  wrapper.insertBefore(clone, wrapper.firstChild);

  if (i === 0) {
    i = 5;
  }

  advantagesSwiper.slideTo(active + 1, 0, false);

  slides[slides.length - 1].remove();
  advantagesSwiper.update();
});

window.addEventListener('resize', resizeListener);
resizeListener();

export { classListToggle };
