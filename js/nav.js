$(function () {
    $('.nav-toggle').on('click', function () {
        $('.main-navigation').toggleClass('open');
        $('.main-navigation').toggleClass('shadow');
        $('.overlay').toggleClass('none');
    });
});