import Swiper from 'swiper';
import { getReviews } from './api';

// Function to create HTML markup for each review
function reviewMarkup(reviews) {
  return reviews
    .map(
      review =>
        `<li class="review-item">
      <img class="review-avatar" src="${review.avatar_url}" alt="${review.author}'s avatar"/>
      <h3 class="review-author">${review.author}</h3>
      <p class="review-text">${review.review}</p>
    </li>`
    )
    .join('');
}

// Function to display reviews
const appearReviews = async () => {
  try {
    const reviewList = document.querySelector('.review-list');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    let currentIndex = 0; // Current review index

    // Function to switch between reviews
    function switchComments(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex >= reviewList.children.length) {
        currentIndex = reviewList.children.length - 1;
      }

      const offset = -currentIndex * reviewList.children[0].offsetWidth;
      reviewList.style.transform = `translateX(${offset}px)`; // Corrected syntax
    }

    prevButton.addEventListener('click', () => {
      switchComments(-1);
    });

    nextButton.addEventListener('click', () => {
      switchComments(1);
      console.log('Helo');
    });

    // Fetch reviews
    const res = await getReviews();
    const reviewsHTML = reviewMarkup(res);
    reviewList.insertAdjacentHTML('beforeend', reviewsHTML);

    // Calculate slidesPerView based on screen width
    const screenWidth = window.innerWidth;
    let slidesPerView = 6;

    if (screenWidth >= 1440) {
      slidesPerView = 4;
    } else if (screenWidth >= 786) {
      slidesPerView = 2;
    } else {
      slidesPerView = 1;
    }

    // Initialize Swiper
    const swiper = new Swiper('.review-list-swiper', {
      speed: 400,
      spaceBetween: 0,
      loop: true,
      setWrapperSize: true,
      slidesPerView: slidesPerView,
      breakpoints: {
        1440: { slidesPerView: 4 },
        769: { slidesPerView: 2 },
        375: { slidesPerView: 1 },
        320: { slidesPerView: 1 },
      },
    });

    // Update currentIndex on slide change
    swiper.on('slideChange', () => {
      currentIndex = swiper.realIndex;
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
};

// Call appearReviews to display reviews
appearReviews();
