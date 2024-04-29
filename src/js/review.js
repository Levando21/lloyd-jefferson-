import Swiper from 'swiper';
import { getReviews } from './api';

// Функція для створення HTML розмітки для кожного відгуку
function reviewMarkup(reviews) {
  return reviews
    .map(
      review =>
        `<li class="swiper-slide review-item">
          <img
            class="review-avatar"
            src="${review.avatar_url}"
            alt="${review.author}'s avatar"
          />
          <h3 class="review-author">${review.author}</h3>
          <p class="review-text" style="
           padding-right: 0px;
           width: 284px;
           height: 158px;
          ">It's not the will to win that matters—everyone has that. It's the will to prepare to win that matters.</p>
        </li>`
    )
    .join('');
}

// Функція для відображення відгуків
const appearReviews = async () => {
  try {
    const reviewList = document.querySelector('.review-list');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    const res = await getReviews();
    if (!res || res.length === 0) {
      throw new Error('Reviews not found');
    }

    const reviewsHTML = reviewMarkup(res);
    reviewList.innerHTML = '<ul class="swiper-wrapper">' + reviewsHTML + '</ul>';

    const screenWidth = window.innerWidth;
    let slidesPerView = 1;

    if (screenWidth >= 1440) {
      slidesPerView = 4;
    } else if (screenWidth >= 758) {
      slidesPerView = 2;
    }

    const swiper = new Swiper('.review-list', {
      speed: 400,
      spaceBetween: 0,
      loop: true,
      setWrapperSize: true,
      slidesPerView: slidesPerView,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Додавання функціональності до кнопок "Prev" та "Next" з використанням методів Swiper
    prevButton.addEventListener('click', () => {
      swiper.slidePrev();
    });

    nextButton.addEventListener('click', () => {
      swiper.slideNext();
    });

  } catch (error) {
    console.error('Error fetching or displaying reviews:', error);
    alert('Error fetching reviews. Please try again later.');
    reviewList.innerHTML = '<p class="not-found">Not found</p>';
  }
};

appearReviews();
