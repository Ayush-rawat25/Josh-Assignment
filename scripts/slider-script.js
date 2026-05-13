const swiper = new Swiper(".mySwiper", {

    loop: true,

    centeredSlides: false,

    slidesPerView: 3.4,

    spaceBetween: 27,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});