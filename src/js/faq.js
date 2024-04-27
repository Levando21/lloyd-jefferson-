// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';



// const accordions = Array.from(document.querySelectorAll('.faq-container'));
// new Accordion(accordions, {
//   onOpen: function(currentElement) {
//     currentElement.classList.add('active');
//     const panel = currentElement.querySelector('.faq-panel');
//     panel.classList.remove('hidden');
//     const btnUp = currentElement.querySelector('.faq-btn-up');
//     const btnDown = currentElement.querySelector('.faq-btn-down');
//     btnUp.classList.add('hidden');
//     btnDown.classList.remove('hidden');
//   },
//   onClose: function(currentElement) {
//     currentElement.classList.remove('active');
//     const panel = currentElement.querySelector('.faq-panel');
//     panel.classList.add('hidden');
//     const btnUp = currentElement.querySelector('.faq-btn-up');
//     const btnDown = currentElement.querySelector('.faq-btn-down');
//     btnUp.classList.remove('hidden');
//     btnDown.classList.add('hidden');
//   }
// });



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


