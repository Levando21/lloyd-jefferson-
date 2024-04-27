import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


document.addEventListener('DOMContentLoaded', function() {  
  const faqItems = document.querySelectorAll('.faq-list');
  faqItems.forEach(function(item) {
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down');

    btnUp.addEventListener('click', function() {
      togglePanel(item);
    });
 
    btnDown.addEventListener('click', function() {
      togglePanel(item);
    });
  });

 
  function togglePanel(item) {
    const panel = item.querySelector('.faq-panel');
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down'); 
    panel.classList.toggle('hidden');   
    btnUp.classList.toggle('hidden');
    btnDown.classList.toggle('hidden');
  }
});






