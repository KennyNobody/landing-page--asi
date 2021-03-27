import Swiper from 'swiper';

let slider = new Swiper('.intro-slider__slider', {
	// slidesPerView: 'auto',
	width: 280,
	spaceBetween: 30,
	centeredSlides: true,
	centeredSlidesBounds: true,
	slideActiveClass: 'intro-slider__slide--active',
	navigation: {
		nextEl: '.intro-slider__nav-btn--right',
		prevEl: '.intro-slider__nav-btn--left',
	},
});