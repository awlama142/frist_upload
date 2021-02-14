$('img').click(function () {
    $('.pup').fadeIn();
});

$('.pup').click(function () {
    $(this).fadeOut();
});

$('.pup-box').click(function (e) {
    e.stopPropagation();
});

$('.hea .joi').click(function () {
    $('.log-pop').fadeIn();
});

$('.log-pop').click(function () {
    $(this).fadeOut();
});

$('.log-inn .log').click(function () {
    $('.log-pop').fadeOut();
});

$('.log-inn').click(function (e) {
    e.stopPropagation();
});

