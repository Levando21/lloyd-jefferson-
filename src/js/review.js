import Swiper from 'swiper'; // Імпорт Swiper для реалізації слайдера
import { getReviews } from './api'; // Імпорт функції для отримання відгуків з сервера

// Функція для створення HTML розмітки для кожного відгуку
function reviewMarkup(reviews) {
  return reviews
    .map(
      review =>
        `<li class="review-item">
          <img
            class="review-avatar"
            src="${review.avatar_url}"
            alt="${review.author}'s avatar"
          />
          <h3 class="review-author">${review.author}</h3>
          <p class="review-text">${review.review}</p>
        </li>`
    )
    .join('');
}

// Функція для відображення відгуків
const appearReviews = async () => {
  try {
    const reviewList = document.querySelector('.review-list'); // Елемент списку відгуків
    const prevButton = document.querySelector('.swiper-button-prev'); // Кнопка "Попередній"
    const nextButton = document.querySelector('.swiper-button-next'); // Кнопка "Наступний"

    let currentIndex = 0; // Поточний індекс відгука

    // Функція для перемикання коментарів
    function switchComments(direction) {
      currentIndex += direction; // Змінити поточний індекс на вказане значення

      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex >= reviewList.children.length) {
        currentIndex = reviewList.children.length - 1;
      }

      const offset = -currentIndex * reviewList.children[0].offsetWidth; // Обчислити зсув для переміщення списку відгуків
      reviewList.style.transform = `translateX(${offset}px)`; // Застосувати зсув до списку відгуків
    }

    prevButton.addEventListener('click', () => {
      switchComments(-1); // Перемикання до попереднього відгука при натисканні на кнопку "Попередній"
    });

    nextButton.addEventListener('click', () => {
      switchComments(1); // Перемикання до наступного відгука при натисканні на кнопку "Наступний"
    });

    const res = await getReviews(); // Отримати відгуки з сервера
    const reviewsHTML = reviewMarkup(res); // Створити HTML розмітку для відгуків
    reviewList.insertAdjacentHTML('beforeend', reviewsHTML); // Вставити HTML розмітку у список відгуків

    const screenWidth = window.innerWidth; // Отримати ширину екрану

    let slidesPerView = 6; // Кількість відгуків на екрані за замовчуванням

    if (screenWidth >= 1440) {
      slidesPerView = 4; // Налаштування для широкого екрану
    } else if (screenWidth >= 769) {
      slidesPerView = 2; // Налаштування для планшетів
    } else {
      slidesPerView = 1; // Налаштування для мобільних пристроїв
    }

    const swiper = new Swiper('.review-list-swiper', {
      // Налаштування Swiper
      speed: 400,
      spaceBetween: 0,
      loop: true,
      setWrapperSize: true,
      slidesPerView: slidesPerView,
      breakpoints: {
        1440: { slidesPerView: 4 }, // Відображати 4 коментарі при ширині більше або рівній 1440px
        769: { slidesPerView: 2 }, // Відображати 2 коментарі при ширині від 769px до 1439px
        375: { slidesPerView: 1 }, // Відображати 1 коментар при ширині менше або рівній 375px
        320: { slidesPerView: 1 } // Відображати 1 коментар при ширині від 320px до 768px
      }
    });

    swiper.on('slideChange', () => {
      currentIndex = swiper.realIndex; // Оновити поточний індекс на поточний слайд
    });

  } catch (error) {
    console.error('Error fetching reviews:', error); // Обробка помилок під час отримання відгуків
  }
};

appearReviews(); // Викликаємо функцію для відображення відгуків
