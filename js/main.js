$(document).ready(function () {
    var modal = $('.modal'),
        modalbtn = $('[data-toggle=modal]'),
        closebtn = $('.modal__close')

    modalbtn.on('click', function() {
        $(modal).toggleClass('modal--visible');
        
    } )
    closebtn.on('click', function() {
        $(modal).toggleClass('modal--visible');
        
    } )

    $('.skroll-up').fadeOut();


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.skroll-up').fadeIn();
        } else {
            $('.skroll-up').fadeOut();
        }
        });
          
        $('.skroll-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
        
    });
});























