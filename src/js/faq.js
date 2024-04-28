import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';



document.addEventListener('DOMContentLoaded', function() {  
  const faqItems = document.querySelectorAll('.faq-list');
  faqItems.forEach(function(item) {
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down');

    btnUp.addEventListener('click', function() {
      togglePanel(item, 'up');
    });
 
    btnDown.addEventListener('click', function() {
      togglePanel(item, 'down');
    });
  });

  function togglePanel(item, direction) {
    const panel = item.querySelector('.faq-panel');
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down'); 

    if (direction === 'up') {
      panel.classList.add('hidden');   
      btnUp.classList.add('hidden');
      btnDown.classList.remove('hidden');
      btnDown.classList.remove('slide-out');
      btnUp.classList.add('slide-in');
    } else {
      panel.classList.remove('hidden');   
      btnUp.classList.remove('hidden');
      btnDown.classList.add('hidden');
      btnUp.classList.remove('slide-out');
      btnUp.classList.remove('slide-in'); 
      void btnDown.offsetWidth; 
      btnDown.classList.remove('slide-out'); 
      btnDown.classList.add('slide-in');
    }
  }
});


// document.addEventListener('DOMContentLoaded', function() {  
//   const faqItems = document.querySelectorAll('.faq-list');
//   faqItems.forEach(function(item) {
//     const btnUp = item.querySelector('.faq-btn-up');
//     const btnDown = item.querySelector('.faq-btn-down');

//     btnUp.addEventListener('click', function() {
//       togglePanel(item);
//     });
 
//     btnDown.addEventListener('click', function() {
//       togglePanel(item);
//     });
//   });

 
//   function togglePanel(item) {
//     const panel = item.querySelector('.faq-panel');
//     const btnUp = item.querySelector('.faq-btn-up');
//     const btnDown = item.querySelector('.faq-btn-down'); 
//     panel.classList.toggle('hidden');   
//     btnUp.classList.toggle('hidden');
//     btnDown.classList.toggle('hidden');
//   }
// });





