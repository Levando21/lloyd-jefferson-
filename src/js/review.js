mport Swiper from 'swiper';
import { getReviews } from './api';

const reviewList = document.querySelector('.review-list');

async function appearReviews() {
  try {
    const res = await getReviews(); // Fetch reviews
    const reviewsHTML = reviewMarkup(res); // Generate HTML markup for reviews
    reviewList.innerHTML = reviewsHTML; // Insert reviews into the review list

    // Initialize Swiper
    new Swiper('.review-list-swiper', {
      speed: 400,
      spaceBetween: 0,
      loop: true,
      setWrapperSize: true,
      breakpoints: {
        1440: { slidesPerView: 4 },
        769: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

appearReviews();

function reviewMarkup(reviews) {
  return reviews
    .map(
      review =>
        `<li class="swiper-slide">
          <img class="review-avatar" src="${review.avatar_url}" alt="${review.author}'s avatar" />
          <h3 class="review-author">${review.author}</h3>
          <p class="review-text">${review.review}</p>
        </li>`
    )
    .join('');
}