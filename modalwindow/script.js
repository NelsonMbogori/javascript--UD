'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
function openModal() {
    modal.classList.remove('hidden');//do not use .hidden. adding more classes is done with a comma to separate the classes
    overlay.classList.remove('hidden');
}
for (let i = 0; i <btnOpenModal.length;i++)
{
    btnOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);
//keyboard input are global events. thus we listen on the whole document
document.addEventListener('keydown',function(e) {
    //key down -press
    //key up -release
    //key press-hold
    //now we log that a key was pressed
    //when an even occurs javascript creates an object and we can access information from that object.
    //that object can be accessed from the event handler function
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});