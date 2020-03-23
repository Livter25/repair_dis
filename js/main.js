$(document).ready(function () {
  var modal = $('.modal'),
      modalbtn = $('[data-toggle=modal]'),
      closebtn = $('.modal__close')
      
  
  modalbtn.on('click', function() {
      $(modal).toggleClass('modal--visible');
      
  } )
  closebtn.on('click', function() {
      $(modal).toggleClass('modal--visible');
      
  } );
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:false,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    nav: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
  new WOW().init();
  // маски
  $('[type=tel]').mask('+7(000)-000-00-00', {placeholder: "+7(000)-000-00-00"});
  
  //валидация формы 
  $('.modal__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработа. Ответ сревера'+response);
          alert('Форма отправлена мы свяжемся с  вами  в течении дня.');
          $(modal).toggleClass('modal--visible');
          $(form)[0].reset();
          
        }
      });
    },
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
        
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policycheckbox: "required",
    },
    messages: {
      userName:{
        required: "Имя обязательно ",
        minlength: jQuery.validator.format("Имя не короче {0} букв "),
        maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
      } ,
      userPhone: "Телефон обязательно",
      userEmail: {
        required: "Обязателно укажите Email",
        email: "Введите в формате sdfsd@asdasd.com"
        },
      policycheckbox: "Согласие обязательно"
      }

  });
  $('.request__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработа. Ответ сревера'+response);
          alert('Форма отправлена мы свяжемся с  вами  в течении дня.');
          $(modal).toggleClass('modal--visible');
          $(form)[0].reset();
          
        }
      });
    },
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
        
      },
      userPhone: "required",
      policycheckbox: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName:{
        required: "Имя обязательно ",
        minlength: jQuery.validator.format("Имя не короче {0} букв "),
        maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
      } ,
      userPhone: "Телефон обязательно",
      userEmail: {
        required: "Обязателно укажите Email",
        email: "Введите в формате sdfsd@asdasd.com"
        },
      policycheckbox: "Согласие обязательно",
      }

  });
  $('.control__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработа. Ответ сревера'+response);
          alert('Форма отправлена мы свяжемся с  вами  в течении дня.');
          $(modal).toggleClass('modal--visible');
          $(form)[0].reset();
          
        }
      });
    },
    
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      policycheckbox: "required",
      // compound rule
      
    },
    messages: {
      userName:{
        required: "Имя обязательно ",
        minlength: jQuery.validator.format("Имя не короче {0} букв и не больше 15"),
        maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
      } ,
      userPhone: "Телефон обязательно",
      policycheckbox: "Согласие обязательно",
      
      }

  });
  $('.footer__form').validate({
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработа. Ответ сревера'+response);
          alert('Форма отправлена мы свяжемся с  вами  в течении дня.');
          $(modal).toggleClass('modal--visible');
          $(form)[0].reset();
          
        }
      });
    },
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      policycheckbox: "required",
      // compound rule
      userQustion: {
        required: true,
        
      }
    },
    messages: {
      userName:{
        required: "Имя обязательно ",
        minlength: jQuery.validator.format("Имя не короче {0} букв"),
        maxlength: jQuery.validator.format("Имя не длинее {0} букв ")
      } ,
      userPhone: "Телефон обязательно",
      policycheckbox: "Согласие обязательно",
      userQustion: {
        required: "Обязателно укажите вопрос",
        
        }
      }

  });
















    


          
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























