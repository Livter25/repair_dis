$(document).ready(function(){YaMapsShown=!1,$(window).scroll(function(){var e;YaMapsShown||$(window).scrollTop()+$(window).height()>$(document).height()-300&&((e=document.createElement("script")).type="text/javascript",e.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A94b6a03efa4024fd02ee8654333d0c5c103c06046a362ca90f909b31d6795a1d&amp;width=100%25&amp;height=562&amp;lang=ru_RU&amp;scroll=false",document.getElementById("YaMaps").appendChild(e),YaMapsShown=!0)});var e=$(".modal"),r=$("[data-toggle=modal]"),t=$(".modal__close");r.on("click",function(){$(e).toggleClass("modal--visible")}),t.on("click",function(){$(e).toggleClass("modal--visible")}),$(".owl-carousel").owlCarousel({items:1,loop:!1,center:!0,margin:10,URLhashListener:!0,autoplayHoverPause:!0,startPosition:"URLHash",nav:!0,animateOut:"slideOutUp",animateIn:"slideInUp"}),(new WOW).init(),$("[type=tel]").mask("+7(000)-000-00-00",{placeholder:"+7(000)-000-00-00"}),$(".modal__form").validate({errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},submitHandler:function(r){$.ajax({type:"POST",url:"send.php",data:$(r).serialize(),success:function(t){console.log("Ajax сработа. Ответ сревера"+t),alert("Форма отправлена мы свяжемся с  вами  в течении дня."),$(e).toggleClass("modal--visible"),$(r)[0].reset()}})},errorClass:"invalid",errorElement:"div",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:"required",userEmail:{required:!0,email:!0},policycheckbox:"required"},messages:{userName:{required:"Имя обязательно ",minlength:jQuery.validator.format("Имя не короче {0} букв "),maxlength:jQuery.validator.format("Имя не длинее {0} букв ")},userPhone:"Телефон обязательно",userEmail:{required:"Обязателно укажите Email",email:"Введите в формате sdfsd@asdasd.com"},policycheckbox:"Согласие обязательно"}}),$(".request__form").validate({errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){console.log("Ajax сработа. Ответ сревера"+r),alert("Форма отправлена мы свяжемся с  вами  в течении дня."),$(e)[0].reset()}})},errorClass:"invalid",errorElement:"em",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:"required",policycheckbox:"required",userEmail:{required:!0,email:!0}},messages:{userName:{required:"Имя обязательно ",minlength:jQuery.validator.format("Имя не короче {0} букв "),maxlength:jQuery.validator.format("Имя не длинее {0} букв ")},userPhone:"Телефон обязательно",userEmail:{required:"Обязателно укажите Email",email:"Введите в формате sdfsd@asdasd.com"},policycheckbox:"Согласие обязательно"}}),$(".control__form").validate({errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){console.log("Ajax сработа. Ответ сревера"+r),alert("Форма отправлена мы свяжемся с  вами  в течении дня."),$(e)[0].reset()}})},errorClass:"invalid",errorElement:"em",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:"required",policycheckbox:"required"},messages:{userName:{required:"Имя обязательно ",minlength:jQuery.validator.format("Имя не короче {0} букв и не больше 15"),maxlength:jQuery.validator.format("Имя не длинее {0} букв ")},userPhone:"Телефон обязательно",policycheckbox:"Согласие обязательно"}}),$(".footer__form").validate({errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){console.log("Ajax сработа. Ответ сревера"+r),alert("Форма отправлена мы свяжемся с  вами  в течении дня."),$(e)[0].reset()}})},errorClass:"invalid",errorElement:"em",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:"required",policycheckbox:"required",userQustion:{required:!0}},messages:{userName:{required:"Имя обязательно ",minlength:jQuery.validator.format("Имя не короче {0} букв"),maxlength:jQuery.validator.format("Имя не длинее {0} букв ")},userPhone:"Телефон обязательно",policycheckbox:"Согласие обязательно",userQustion:{required:"Обязателно укажите вопрос"}}}),$(".skroll-up").click(function(){return $("html, body").animate({scrollTop:0},3e3),!1});new Swiper(".swiper-container_21",{loop:!0,pagination:{el:".swiper-slide__number",type:"fraction"},navigation:{nextEl:".swiper-button-next_21",prevEl:".swiper-button-prev_21"}}),new Swiper(".swiper-container_21",{loop:!0,pagination:{el:".swiper-pagination_21",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next_21",prevEl:".swiper-button-prev_21"}}),new Swiper(".swiper-container_22",{loop:!0,pagination:{el:".swiper-pagination_22",type:"bullets"},navigation:{nextEl:".swiper-button-next_22",prevEl:".swiper-button-prev_22"}}),new Swiper(".swiper-container__fantasy",{loop:!0,navigation:{nextEl:".swiper-button-n",prevEl:".swiper-button-p"}});var a=$(".swiper-button-next"),i=$(".swiper-button-prev"),n=$(".swiper-pagination");a.css("left",i.width()+10+n.width()+10),n.css("left",i.width()+10);var o=$(".swiper-button-next_21"),l=$(".swiper-button-prev_21"),s=$(".swiper-pagination_21");o.css("left",l.width()+10+s.width()+10),s.css("left",l.width()+10)});