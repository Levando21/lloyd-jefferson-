const coversSection = document.querySelector('.covers');
const coversLine = document.querySelectorAll('.covers-line');
console.log(coversLine);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coversLine.forEach(line => {
        line.classList.add('animation');
      });
    } else {
      coversLine.forEach(line => {
        line.classList.remove('animation');
      });
    }
  });
}, options);

observer.observe(coversSection);
