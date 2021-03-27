import Swiper from 'swiper';

let slider = new Swiper('.grid-slider__container', {
	slidesPerView: 1,
	spaceBetween: 30,
	slideActiveClass: 'grid-slider__slide--active',
	navigation: {
		nextEl: '.grid-slider__nav-btn--right',
		prevEl: '.grid-slider__nav-btn--left',
		disabledClass: 'grid-slider__nav-btn--disabled'
	},
});