`use strict`;
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

import img_1_320 from '../img/projects/img_1_320.png';
import img_1_375 from '../img/projects/img_1_375.png';
import img_1_768 from '../img/projects/img_1_768.png';
import img_1_1440 from '../img/projects/img_1_1440.png';

import img_2_320 from '../img/projects/img_2_320.png';
import img_2_375 from '../img/projects/img_2_375.png';
import img_2_768 from '../img/projects/img_2_768.png';
import img_2_1440 from '../img/projects/img_2_1440.png';

import img_3_320 from '../img/projects/img_3_320.png';
import img_3_375 from '../img/projects/img_3_375.png';
import img_3_768 from '../img/projects/img_3_768.png';
import img_3_1440 from '../img/projects/img_3_1440.png';

const btnNext = document.querySelector('.projects-slider-btn--right');
const btnPrev = document.querySelector('.projects-slider-btn--left');

const swiper = new Swiper('.projects-box', {
  speed: 400,
  spaceBetween: 100,
});

btnPrev.addEventListener('click', () => {
  disableBtn();
  swiper.slidePrev();
});

btnNext.addEventListener('click', () => {
  enableBtn();
  swiper.slideNext();
});

const swiperBox = document.querySelector('.projects-wrapper');
const projectsImg = `
  <li class="swiper-slide projects-slide" id=1>
    <div class="projects-description-box">
        <ul class="projects-tag-list">
          <li class="projects-tag">#react</li>
          <li class="projects-tag">#js</li>
          <li class="projects-tag">#node js</li>
          <li class="projects-tag">#git</li>
        </ul>
        <p class="projects-description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://github.com/Levando21/lloyd-jefferson-"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
    <img
      class="projects-image" 
      srcset="${img_1_320} 292w, ${img_1_375} 584w, ${img_1_768} 528w, ${img_1_1440} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${img_1_768}"
      alt="Read Jorney App"
    />
  </li>
  <li class="swiper-slide projects-slide" id="2">
    <div class="projects-description-box">
        <ul class="projects-tag-list">
          <li class="projects-tag">#react</li>
          <li class="projects-tag">#js</li>
          <li class="projects-tag">#node js</li>
          <li class="projects-tag">#git</li>
        </ul>
        <p class="projects-description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://github.com/Levando21/lloyd-jefferson-"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
          <img
            class="projects-image"
            srcset="${img_2_320} 292w, ${img_2_375} 584w, ${img_2_768} 528w, ${img_2_1440} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${img_2_768}"
            alt="Pet Love App"
          />
  </li>
  <li class="swiper-slide projects-slide" id=3>
   <div class="projects-description-box">
        <ul class="projects-tag-list">
          <li class="projects-tag">#react</li>
          <li class="projects-tag">#js</li>
          <li class="projects-tag">#node js</li>
          <li class="projects-tag">#git</li>
        </ul>
        <p class="projects-description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://github.com/Levando21/lloyd-jefferson-"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
    <img class="projects-image" 
      srcset="${img_3_320} 292w, ${img_3_375} 584w, ${img_3_768} 528w, ${img_3_1440} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${img_3_768}"
      alt="Vocab Builder App"
    />
  </li>`;

swiperBox.insertAdjacentHTML('beforeend', projectsImg);

const slides = document.querySelectorAll('.projects-slide');
const swiperBtnRight = document.querySelector('.projects-slider-btn--right');
const swiperBtnLeft = document.querySelector('.projects-slider-btn--left');

function enableBtn() {
  for (let i = 0; i <= slides.length - 1; i++) {
    if (slides[0].classList.contains('swiper-slide-active')) {
      swiperBtnLeft.classList.toggle('inActive');
      swiperBtnLeft.removeAttribute('disabled');
    }
    if (slides[2].classList.contains('swiper-slide-next')) {
      swiperBtnRight.classList.toggle('inActive');
      swiperBtnRight.setAttribute('disabled', 'true');
    }
  }
}
function disableBtn() {
  if (slides[2].classList.contains('swiper-slide-active')) {
    swiperBtnRight.classList.toggle('inActive');
    swiperBtnRight.removeAttribute('disabled');
  }
  if (slides[0].classList.contains('swiper-slide-prev')) {
    swiperBtnLeft.classList.toggle('inActive');
    swiperBtnLeft.setAttribute('disbled', 'true');
  }
}
