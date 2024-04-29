import Swiper from 'swiper';
import {Navigation, Keyboard} from 'swiper/modules';
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

import {getReviewsApi} from './api.js';

const reviewsList = document.querySelector('.reviews-list');
const reviewsWrap = document.querySelector('.reviews-swiper')

const getReviews = async () => {
  try {
    const reviews = await getReviewsApi();

    if (reviews.length > 0) {
      renderReviewsEl(reviews)
    } else {
      renderNotFoundEl()
    }
  } catch (e) {
    renderNotFoundEl()
    iziToast.error({
      message: e.message,
      position: 'bottomRight',
    });
  }
}

const renderReviewsEl = (reviews) => {
  const reviewItems = reviews.map(({_id, author, avatar_url, review}) => (
    `<li class="reviews-list-item swiper-slide" id="review-${_id}" aria-label="review">
          <picture>
            <source srcset="${avatar_url}"
              type="image/jpeg">
              <img
                class="review-photo"
                src="${avatar_url}"
                alt="${author} photo"
                width="48"
                height="48"
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${author}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${review}</p>
          </div>
      </li>`)).join('');

  reviewsList.innerHTML = reviewItems;
}

const renderNotFoundEl = (text = 'Not found') => {
  const p = document.createElement('p')
  p.textContent = text
  reviewsWrap.insertAdjacentElement('afterbegin', p)
}

getReviews()

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,
  spaceBetween: 16,

  navigation: {
    nextEl: '.next-review-btn',
    prevEl: '.prev-review-btn',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },
});