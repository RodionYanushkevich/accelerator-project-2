const swiperClassListToggle = (swiperContainer) => {
  swiperContainer.classList.toggle('swiper-container');
  const swiperWrapper = swiperContainer.children[0];
  swiperWrapper.classList.toggle('swiper-wrapper');

  const swiperSlidesArray = Array.from(swiperWrapper.children);
  swiperSlidesArray.forEach((slide) => {
    slide.classList.toggle('swiper-slide');
  });
};

export { swiperClassListToggle };
