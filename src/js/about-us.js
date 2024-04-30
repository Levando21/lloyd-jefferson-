import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

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
    1440: {
      slidesPerView: 6,
    },
// Налаштування для десктопу
   
// Налаштування для планшету
    768: {
      slidesPerView: 3,
     
    },
// Налаштування для мобільних пристроїв
    320: {
      slidesPerView: 2,
    }
  }
  
  
});
const btnNext = document.querySelector('.aboutus-skills-btn');

btnNext.addEventListener('click', () => {
  swiper.slideNext();
  
});
swiper.on('slideChange', () => {
  if (swiper.params.slidesPerView >= swiper.slides.length) {
    btnNext.disabled = true;
    const btnIcon = document.querySelector('.aboutus-skills-btn-icon');
    btnIcon.style.fill = '#3b3b3b';
  } else {
    btnNext.disabled = false;
  }
});
