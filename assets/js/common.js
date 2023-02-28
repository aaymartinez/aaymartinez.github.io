$(document).ready(function () {

    // onload
    $('.content').load('intro.html');

    // navigation
    $('.menu .nav-item a').click((e) => {
        e.preventDefault();

        $('.content').load($(e.target).attr('data') + '.html', () => {
            $('.content').fadeIn('slow');
        });
    });


});