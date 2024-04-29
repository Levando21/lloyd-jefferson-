import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordions = Array.from(
    document.querySelectorAll('.faq-container-list .faq-list')
  );

  new Accordion(accordions, {
    duration: 300,
    ariaEnabled: true,
    collapse: true,
    showMultiple: false,
    beforeOpen: function (currElement) {
      togglePanel(currElement, true);
    },
    beforeClose: function (currElement) {
      togglePanel(currElement, false);
    },
  });

  accordions.forEach(function (item) {
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down');

    btnUp.addEventListener('click', function () {
      togglePanel(item, true);
    });

    btnDown.addEventListener('click', function () {
      togglePanel(item, false);
    });
  });

  function togglePanel(item, expanded) {
    const panel = item.querySelector('.faq-panel');
    const btnUp = item.querySelector('.faq-btn-up');
    const btnDown = item.querySelector('.faq-btn-down');

    panel.classList.toggle('active');
    btnUp.classList.toggle('hidden');
    btnDown.classList.toggle('hidden');
  }
});
