$('.burger').on('click', function () {
    $(this).toggleClass('opened');
    $('.main-header__nav').toggleClass('opened');
    $('.main-header').toggleClass('drop-shadow');
})


const [name, phone, submit] = [$('#name'), $('#phone'), $('.contacts__btn')];
const SpecSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const Phonelayout = phone_pattern = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;

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
