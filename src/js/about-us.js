import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

// Accordion //

const accordion = new Accordion('.accordion', {
  animationDuration: 300, 
  singleOpen: true,
});

const accordionItems = document.querySelectorAll('.aboutus-accordion-item');

accordionItems.forEach(item => {
  const btnUp = item.querySelector('.aboutus-accord-btn-up');
  const btnDown = item.querySelector('.aboutus-accord-btn-down');

  btnUp.addEventListener('click', () => {
  const dropdown = item.querySelector('.aboutus-accord-dropdown');
  
  accordion.open(item); 
  dropdown.classList.remove('hidden'); 
  setTimeout(() => {
    btnUp.classList.add('hidden');
    btnDown.classList.remove('hidden');
  }, 100); 
});

btnDown.addEventListener('click', () => {
  const dropdown = item.querySelector('.aboutus-accord-dropdown');
  accordion.close(item); 
  dropdown.classList.add('hidden'); 
  btnUp.classList.remove('hidden');
  btnDown.classList.add('hidden');

  
});
});

// Swiper //

const swiper = new Swiper('.aboutus-skills-swiper', {
  speed: 400,
  spaceBetween: 0,
  loop: true,
  setWrapperSize: true,
  breakpoints: {
// Налаштування для десктопу
    1280: {
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
