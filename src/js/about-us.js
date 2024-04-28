import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

// Accordion //

const accordionsList = document.querySelectorAll(".aboutus-accordion-item");



//const accordions = Array.from(activeText);
document.addEventListener('DOMContentLoaded', function () {
    accordionsList.forEach(function (item) {
    console.log(item);
    const btnDown = item.querySelector(".aboutus-accord-btn-down");
    const btnUp = item.querySelector(".aboutus-accord-btn-up");
        btnDown.addEventListener('click', function () { activity(item); });
        btnUp.addEventListener('click', function () { activity(item) });
})


  function activity(item) {
    const activeText = item.querySelector(".aboutus-accord-dropdown")
    const btnDown = item.querySelector(".aboutus-accord-btn-down");
    const btnUp = item.querySelector(".aboutus-accord-btn-up");
    activeText.classList.toggle('hidden');   
    btnUp.classList.toggle('hidden');
    btnDown.classList.toggle('hidden');
  }

})

// Swiper //

const btnNext = document.querySelector('.aboutus-skills-btn');

const swiper = new Swiper('.swiper', {
  speed: 400,
    spaceBetween: 100,
  slidesPerView: 2,
});

btnNext.addEventListener('click', () => {

  swiper.slideNext();
});

