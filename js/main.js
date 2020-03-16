$(document).ready(function () {
  new WOW().init();
    //  var bob = $('.col-chos__ssl1'),
    //     cols = $('[data-toggle=col]')

    // cols.on('click', function () {
    //     $(bob).toggleClass('swiper-pagination-bullets');
    //     $(bob).toggleClass('swiper-pagination-bullet-active');
           

      
    //   })















    var modal = $('.modal'),
        modalbtn = $('[data-toggle=modal]'),
        closebtn = $('.modal__close')
        

    modalbtn.on('click', function() {
        $(modal).toggleClass('modal--visible');
        
    } )
    closebtn.on('click', function() {
        $(modal).toggleClass('modal--visible');
        
    } );

    


          
        $('.skroll-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
        
    });
    

    var mywiper = new Swiper ('.swiper-container_21', {
        // Optional parameters
        loop: true,
        
        pagination: {
            el: '.swiper-slide__number',
            type: 'fraction',
            
          },
        
        navigation: {
            nextEl: '.swiper-button-next_21',
            prevEl: '.swiper-button-prev_21',
            
          },
          
          

      });
    
    

    var mySwiper = new Swiper ('.swiper-container_21', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination_21',
            type: 'bullets',
            clickable: true,
            
          },
        
        
        navigation: {
            nextEl: '.swiper-button-next_21',
            prevEl: '.swiper-button-prev_21',
            
          },
          
          

    });
    var mySwiper = new Swiper ('.swiper-container_22', {
      // Optional parameters
      loop: true,
      pagination: {
          el: '.swiper-pagination_22',
          type: 'bullets',
          
          
        },
      
      
      navigation: {
          nextEl: '.swiper-button-next_22',
          prevEl: '.swiper-button-prev_22',
          
        },
        
        

  });
    

     


      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');


    

      next.css('left', prev.width() + 10 + bullets.width() + 10)
      bullets.css('left', prev.width() + 10 );

      var nexts = $('.swiper-button-next_21');
      var prevs = $('.swiper-button-prev_21');
      var bulletss = $('.swiper-pagination_21');


    

      nexts.css('left', prevs.width() + 10 + bulletss.width() + 10)
      bulletss.css('left', prevs.width() + 10 )


  


      


   

      
    
});























