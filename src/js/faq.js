// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// // Default options
// new Accordion('.container-first');

// // User options
// new Accordion('.container-second', {
//   duration: 400,
//   showMultiple: true,
//   onOpen: function(currentElement) {
//     console.log(currentElement);
//   }
// });

// // Define several accordions with the same options (pass an array with selectors)
// new Accordion(['.container-first', '.container-second'], {});

// // or pass an array with HTMLElements
// const accordions = Array.from(document.querySelectorAll('.accordion-container'));
// new Accordion(accordions, {});

// // Detach events
// const accordion = new Accordion('.container-first');
// accordion.detachEvents();



const accordionItems = document.querySelectorAll('.faq-list');
accordionItems.forEach((item, index) => {
  const panel = item.querySelector('.faq-panel');
  const btnUp = item.querySelector('.faq-btn-up');
  const btnDown = item.querySelector('.faq-btn-down');
  let isVisible = panel.classList.contains('hidden');
  
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    isVisible = !isVisible;
    panel.classList.toggle('hidden', !isVisible);
    btnUp.classList.toggle('hidden', isVisible);
    btnDown.classList.toggle('hidden', !isVisible);
  });

  if (index !== 0) {
    btnUp.classList.remove('hidden');
    btnDown.classList.add('hidden');
  }

 
  btnUp.addEventListener('mouseenter', () => {
    btnUp.style.backgroundColor = 'rgba(250, 250, 250, 0.1)';
    btnUp.style.borderColor = 'rgba(250, 250, 250, 0.5)';
    btnUp.style.color = '#FAFAFA';
  });

  btnUp.addEventListener('mouseleave', () => {
    btnUp.style.backgroundColor = '';
    btnUp.style.borderColor = '';
    btnUp.style.color = '';
  });

  btnUp.addEventListener('focus', () => {
    btnUp.style.outline = 'none';
    btnUp.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.5)';
  });

  btnUp.addEventListener('blur', () => {
    btnUp.style.outline = '';
    btnUp.style.boxShadow = '';
  });
});


