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


          
        $('.skroll-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
        
    });
   


    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          },
          

      });

      var next = $('.swiper-button-next__project');
      var prev = $('.swiper-button-prev__project');
      var bullets = $('.swiper-pagination__project');

      next.css('left', prev.width() + 10 + bullets.width() + 10)
      bullets.css('left', prev.width() + 10 )

      var nexts = $('.swiper-button-next__steps');
      var prevs = $('.swiper-button-prev__steps');
      var bulletss = $('.swiper-pagination__steps');

      nexts.css('left', prevs.width() + 10 + bulletss.width() + 10)
      bulletss.css('left', prevs.width() + 10 )
      

      
    
});























