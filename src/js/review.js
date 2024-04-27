// Отримання даних про відгуки з сервера
fetch('/reviews')
  .then(response => response.json()) // Парсимо відповідь сервера у формат JSON
  .then(data => {
    if (data.error) {
      document.querySelector('.reviews-slider').innerHTML = '<div class="reviews-error">' + data.error + '</div>';
      return;
    }

    // Створення HTML-коду для слайдів на основі даних від сервера
    const slidesHTML = data.reviews.map(review => `
      <div class="swiper-slide">
        <h3>${review.name}</h3>
        <p>${review.feedback}</p>
      </div>
    `).join('');

    document.querySelector('.reviews-slider').innerHTML = slidesHTML;

    const swiper = new Swiper('.reviews-slider', {
      slidesPerView: 1, // Кількість слайдів, що відображаються одночасно
      spaceBetween: 20, // Відступ між слайдами
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      disableNavigationOnReachingLimits: true,
    });
  })
  .catch(error => {
    console.error('Помилка при отриманні даних про відгуки:', error);
  });
