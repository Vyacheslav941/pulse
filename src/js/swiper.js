const swiper = new Swiper('.carousel__slider', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    effect: 'slide',
    speed: 1200,
    loop: true,
    // стрелки
    navigation: {
        nextEl: '.carousel__button-next',
        prevEl: '.carousel__button-prev',
    },

    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});