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
            el: '.swiper-slide__number',
            type: 'fraction',
            
          },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          },
          
          

      });
    
    

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            
            clickable: true,
            // renderBullet: function (index, className) {
            //     return '<span class="bullet">' + (index + 1) + '</span>';
          },
        
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          },
          
          

    });

     


      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');


    

      next.css('left', prev.width() + 10 + bullets.width() + 10)
      bullets.css('left', prev.width() + 10 )


   

      
    
});























