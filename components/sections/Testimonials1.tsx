'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
}