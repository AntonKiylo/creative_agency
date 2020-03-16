$(function () {
    let button = $('#button-up');
    $(window).on('scroll',  () => {
        if ($(this).scrollTop () > 300) {
            button.css({'right': '40px', 'opacity': '1'});
        } else {
            button.css({'right': '-42px', 'opacity': '0'});
        }
    });
    button.on('click', () => {
        $('body, html').animate({
            scrollTop: 0
        }, 700);
    });

    let hamburger = $('.hamburg-btn');
    hamburger.on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $('#bread-crumbs').slideToggle(500);
    });
});