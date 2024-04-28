const modalHeader = document.querySelector('.modal-header');
const modalBtnClose = document.querySelector('.modal-btn-close');
const btnMenu = document.querySelector('.header-icon-burger');
const menuLinks = document.querySelectorAll('.menu-list a');


function openModal() {
    modalHeader.classList.add('is-open'); 
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modalHeader.classList.remove('is-open');
    document.body.style.overflow = '';
}
modalBtnClose.addEventListener('click', closeModal); 
btnMenu.addEventListener('click', openModal); 


document.addEventListener('DOMContentLoaded', function() {
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            closeModal();
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuCenterOpen = document.querySelector('.menu-center-open');
    const menuCenterList = document.querySelector('.menu-center-list');

    menuCenterOpen.addEventListener('click', function() {
        menuCenterList.classList.toggle('is-open');
    });
});

