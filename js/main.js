// $(document).ready(function () {
//     var modal = $('.modal'),
//         modalbtn = $('[data-toggle=modal]'),
//         closebtn = $('.modal__close')

//     modalbtn.on('click', function() {
//         $(modal).toggleClass('modal--visible');
        
//     } )
//     closebtn.on('click', function() {
//         $(modal).toggleClass('modal--visible');
        
//     } )


//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 100) {
//             $('.skroll-up').fadeIn();
//         } else {
//             $('.skroll-up').fadeOut();
//         }
//         });
          
//         $('.skroll-up').click(function(){
//         $("html, body").animate({ scrollTop: 0 }, 3000);
//         return false;
        
//     });
// });























document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal')
    const modalbtn = document.querySelectorAll('[data-toggle=modal]');
    const closbtn = document.querySelector('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible')

    };
    
    modalbtn.forEach(element => {
        element.addEventListener('click', switchModal);
        
    });

    closbtn.addEventListener('click', switchModal);

    document.addEventListener('keydown', function (e) {
        switch(e.keyCode){
            case 27:
                switchModal();
        }   
    });


});