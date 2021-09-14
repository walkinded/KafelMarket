/* ==================== OPEN MENU ====================*/ 
const openMenu = document.querySelector('#open-menu');
const menuModal = document.querySelector('.mobile-menu');
const closeModalBtn = document.querySelector('.close-icon');

openMenu.addEventListener('click', function(){
  menuModal.classList.add('mobile-menu_open');
  this.style.opacity = 0;
});

closeModalBtn.addEventListener('click', function(){
  menuModal.classList.remove('mobile-menu_open');
  openMenu.style.opacity = 1;
});

$( document ).ready(function() {
/* ==================== SCROLL HEADER ====================*/ 
  $(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 10) sticky.addClass('header-scroll');
    else sticky.removeClass('header-scroll');
  });
});

