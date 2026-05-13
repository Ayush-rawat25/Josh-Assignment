const swiper = new Swiper(".mySwiper", {

    loop: true,
    loopedslide: 5,
    loopAdditionalSlides: 2,
    centeredSlides: false,

    // slidesPerView: 3.4,

    spaceBetween: 27,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        480: {
            slidesPerView: 1.2,
            spaceBetween: 15
        },

        640: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 2.5,
            spaceBetween: 25
        },

        1280: {
            slidesPerView: 3.4,
            spaceBetween: 27
        }
    }

});