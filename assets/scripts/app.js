$('.burger').on('click', function () {
    $(this).toggleClass('opened');
    $('.main-header__nav').toggleClass('opened');
    $('.main-header').toggleClass('drop-shadow');
})