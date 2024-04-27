window.addEventListener('scroll', function () {
  const coversSection = document.querySelector('.covers');
  const coversMarquee = document.querySelector('.covers-marquee');

  if (isInViewport(coversSection)) {
    coversMarquee.classList.add('animate');
  } else {
    coversMarquee.classList.remove('animate');
  }
});

function isInViewport(element) {}
