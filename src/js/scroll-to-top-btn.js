const btnEl = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    btnEl.style.display = 'flex';
  } else {
    btnEl.style.display = 'none';
  }
});

btnEl.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});