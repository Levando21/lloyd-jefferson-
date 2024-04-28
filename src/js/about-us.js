import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

// Accordion //

const accordionsList = document.querySelectorAll('.aboutus-accordion-item');


//const accordions = Array.from(activeText);
document.addEventListener('DOMContentLoaded', function () {
  accordionsList.forEach(function (item) {
    
    const btnDown = item.querySelector('.aboutus-accord-btn-down');
    const btnUp = item.querySelector('.aboutus-accord-btn-up');
    btnDown.addEventListener('click', function () {
      activity(item);
    });
    btnUp.addEventListener('click', function () {
      activity(item);
    });
  });

  function activity(item) {
    const activeText = item.querySelector('.aboutus-accord-dropdown');
    const btnDown = item.querySelector('.aboutus-accord-btn-down');
    const btnUp = item.querySelector('.aboutus-accord-btn-up');
    
    activeText.classList.toggle('hidden');
    btnUp.classList.toggle('hidden');
    btnDown.classList.toggle('hidden');
  }
});

// Swiper //

const swiper = new Swiper('.aboutus-skills-swiper', {
  speed: 400,
  spaceBetween: 0,
  loop: true,
  setWrapperSize: true,
  breakpoints: {
// Налаштування для десктопу
    1440: {
      slidesPerView: 6,
    },
// Налаштування для планшету
    768: {
      slidesPerView: 3,
    },
// Налаштування для мобільних пристроїв
    320: {
      slidesPerView: 2,
    }
  },
  on: {
    init: function () {
     
      document.querySelector('.swiper-slide').style.backgroundColor = '#ed3b44';
    },
    slideChange: function () {

      const previousSlide = this.slides[this.previousIndex];
      const activeSlide = this.slides[this.activeIndex];
      previousSlide.style.background = '' ;
      activeSlide.style.backgroundColor = '#ed3b44';
    },
  },

});
  
    

const btnNext = document.querySelector('.aboutus-skills-btn');
btnNext.addEventListener('click', () => {
  swiper.slideNext();
});
