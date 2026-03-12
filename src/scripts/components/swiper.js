import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const slidersBrands = document.querySelectorAll(".brands-slider");
const slidersTimeline = document.querySelectorAll(".timeline-section");

document.addEventListener("DOMContentLoaded", () => {
    if (slidersTimeline) {
        slidersTimeline.forEach((el) => {
            const swiperEl = el.querySelector(".timeline-swiper");
            const prevEl = el.querySelector(".timeline-nav__prev");
            const nextEl = el.querySelector(".timeline-nav__next");

            new Swiper(swiperEl, {
                modules: [Navigation],
                speed: 800,
                slidesPerView: 1,
                navigation: {
                    prevEl,
                    nextEl,
                    disabledClass: "disabled",
                },
            });
        });
    }

    if (slidersBrands) {
        slidersBrands.forEach((el) => {
            const swiperEL = el.querySelector(".swiper");
            const paginationEl = el.querySelector(".swiper-pagination");

            const pagination = paginationEl
                ? { el: paginationEl, clickable: true }
                : undefined;
            const swiper = new Swiper(swiperEL, {
                modules: [Pagination, Autoplay],
                speed: 1200,
                spaceBetween: 16,
                slidesPerView: 2,
                slidesPerGroup: 4,
                watchOverflow: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination,
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                    },
                    720: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                },
            });
        });
    }
});
