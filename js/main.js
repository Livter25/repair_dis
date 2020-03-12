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

    document.addEventListener('keydown', (event) =>{
        console.log(event);
    });




    document.addEventListener('keydown', (event) =>{
        console.log(event);
    });


    
});