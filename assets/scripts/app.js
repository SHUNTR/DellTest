$('.burger').on('click', function () {
    $(this).toggleClass('opened');
    $('.main-header__nav').toggleClass('opened');
    $('.main-header').toggleClass('drop-shadow');
})


const [name, phone, submit] = [$('#name'), $('#phone'), $('.contacts__btn')];
const SpecSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const Phonelayout = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;

phone.mask("+8(999) 999-9999");

submit.on('click', function () {
    if (name.val().trim().length == 0 || SpecSymbols.test(name.val())) {
        alert('Поле "Имя" обязательно и не должно содержать спец-символы');
        return;
    }
    if (!Phonelayout.test(phone.val())) {
        alert('Поле "Номер телефона" обязательно');
        return;
    }
})



// Инициализация слайдера
const main_swiper = new Swiper('.main-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pag',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper__btn_next',
    },
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 3000,
    },
})
const secondary_swiper = new Swiper('.secondary-swiper', {
    allowTouchMove: false,
    direction: 'vertical',
    loop: true,

    navigation: {
        nextEl: '.swiper__btn_next',
    },

})
// Привязываем слайдеры друг к другу
main_swiper.controller.control = secondary_swiper;
secondary_swiper.controller.control = main_swiper;

