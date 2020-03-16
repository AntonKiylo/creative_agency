$(function () {
    addLike($('#like-counter1'));
    addLike($('#like-counter2'));
    addLike($('#like-counter3'));

    toggle($('#toggle1'));
    toggle($('#toggle2'));
    toggle($('#toggle3'));

    function addLike(counter) {
        let likeValue = 0;
        counter.children('.count').html(likeValue);
        counter.on("click", () => {
            likeValue += 1;
            counter.children('.count').html(likeValue);
            counter.find('#svg_3').css({"fill": "#ea6a6a", "stroke": "transparent"});
        });
    }
    function toggle(par){
        par.children('h5').on('click', function () {
            if ($(this).text() === 'CONTINUE READING'){
                $(this).text('HIDE');
                par.children('.hide-text').slideDown();
            }
            else {
                $(this).text('CONTINUE READING');
                par.children('.hide-text').slideUp();
            }
        });
    }

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