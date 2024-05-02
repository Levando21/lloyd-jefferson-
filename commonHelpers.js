import{A as M,S as w,a as V,N as T,K as z,i as p,v as A}from"./assets/vendor-cc0b5173.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),o=document.querySelector(".header-icon-burger"),i=document.querySelectorAll(".menu-list a"),s=document.querySelector(".btn-menu-tablet"),n=document.querySelector(".btn-menu"),l=document.querySelector(".menu-center-open"),L=document.querySelector(".menu-center-list");function O(){e.classList.add("is-open"),document.body.style.overflow="hidden",t.style.display="flex"}function m(){e.classList.remove("is-open"),document.body.style.overflow=""}t.addEventListener("click",m),o.addEventListener("click",O),s.addEventListener("click",m),n.addEventListener("click",m),i.forEach(function(v){v.addEventListener("click",function(R){m()})}),document.querySelectorAll(".menu-center-item a").forEach(function(v){v.addEventListener("click",function(R){L.classList.remove("is-open")})}),l.addEventListener("click",function(){L.classList.toggle("is-open")})});new M(".accordion-container-first",{duration:600,showMultiple:!0,openOnInit:[0]});const D=document.querySelectorAll(".aboutus-accordion-item");D.forEach(function(e){const t=e.querySelector(".aboutus-title-accordion"),o=e.querySelector(".aboutus-accord-btn-down");o.addEventListener("mouseenter",function(){t.classList.add("hovered")}),o.addEventListener("mouseleave",function(){t.classList.remove("hovered")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((s,n)=>{const l=s.cloneNode(!0);t.appendChild(l)});const o=new w(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],n=this.slides[this.activeIndex];s.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{o.slideNext()})});const G="/lloyd-jefferson-/assets/img_1_320-bb988309.png",W="/lloyd-jefferson-/assets/img_1_375-111ca135.png",j="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",F="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",H="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",K="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",E="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",U="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",Z="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",J="/lloyd-jefferson-/assets/img_3_375-356430ed.png",S="/lloyd-jefferson-/assets/img_3_768-6322b368.png",X="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Q=document.querySelector(".projects-slider-btn--right"),Y=document.querySelector(".projects-slider-btn--left"),k=new w(".projects-box",{speed:400,spaceBetween:100});Y.addEventListener("click",()=>{oe(),k.slidePrev()});Q.addEventListener("click",()=>{se(),k.slideNext()});const ee=document.querySelector(".projects-wrapper"),te=`
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
      srcset="${G} 292w, ${W} 584w, ${j} 528w, ${F} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${j}"
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
            srcset="${H} 292w, ${K} 584w, ${E} 528w, ${U} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${E}"
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
      srcset="${Z} 292w, ${J} 584w, ${S} 528w, ${X} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${S}"
      alt="Vocab Builder App"
    />
  </li>`;ee.insertAdjacentHTML("beforeend",te);const a=document.querySelectorAll(".projects-slide"),g=document.querySelector(".projects-slider-btn--right"),f=document.querySelector(".projects-slider-btn--left");function se(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(f.classList.toggle("inActive"),f.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(g.classList.toggle("inActive"),g.setAttribute("disabled","true"))}function oe(){a[2].classList.contains("swiper-slide-active")&&(g.classList.toggle("inActive"),g.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(f.classList.toggle("inActive"),f.setAttribute("disbled","true"))}new M(".accordion-container",{duration:600,showMultiple:!0});const ne=document.querySelector(".covers"),x=document.querySelectorAll(".covers-line"),ie={root:null,rootMargin:"0px",threshold:.5},re=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?x.forEach(i=>{i.classList.add("animation")}):x.forEach(i=>{i.classList.remove("animation")})})},ie);re.observe(ne);const ce="https://portfolio-js.b.goit.study/api",le="/reviews",ae="/requests",C=V.create({baseURL:ce}),de=async()=>(await C.get(le)).data,I=async e=>(await C.post(ae,e)).data,ue=document.querySelector(".reviews-list"),me=document.querySelector(".reviews-swiper"),pe=async()=>{try{const e=await de();e.length>0?ge(e):_()}catch(e){_(),p.error({message:e.message,position:"bottomRight"})}},ge=e=>{const t=e.map(({_id:o,author:i,avatar_url:s,review:n})=>`<li class="reviews-list-item swiper-slide" id="review-${o}" aria-label="review">
          <picture>
            <source srcset="${s}"
              type="image/jpeg">
              <img
                class="review-photo"
                src="${s}"
                alt="${i} photo"
                width="48"
                height="48"
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${i}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${n}</p>
          </div>
      </li>`).join("");ue.innerHTML=t},_=(e="Not found")=>{const t=document.createElement("p");t.textContent=e,me.insertAdjacentElement("afterbegin",t)};pe();new w(".reviews-swiper",{modules:[T,z],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const fe=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;console.log(fe.test("user11@mail"));const ve={email:"user11@mail",comment:"some text"},we=async e=>await I(e);we(ve);p.settings({position:"bottomRight"});const $=document.getElementById("footer-form"),b=document.getElementById("footer-form-input"),y=document.getElementById("footer-form-textarea"),r=document.querySelector(".email-message"),c=document.querySelector(".comment-message"),u=document.querySelector(".footer-form-res"),d=document.getElementById("modal"),be=document.querySelector(".footer-modal-btn-close"),B=e=>{A.isEmail(e)!==!1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):(r.textContent="Invalid email, try again",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},P=e=>{e.trim().length>0?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):(c.textContent="Please, write some text",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},N=()=>{r.textContent="",c.textContent="",r.classList.remove("isSuccessMessage","isErrorMessage"),c.classList.remove("isSuccessMessage","isErrorMessage")},q=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");t.textContent=e.title,o.textContent=e.message},h=()=>{d.classList.remove("show-modal")},ye=e=>{const t=e.target.value;B(t),u.style.display="block"},he=e=>{const t=e.target.value;P(t),u.style.display="block"},Le=async e=>{e.preventDefault();const t={email:b.value,comment:y.value};if(A.isEmail(t.email)===!1){p.error({title:t.email.length<1?"Please, write your email":"Not validate email"}),B(t.email);return}if(t.comment.trim().length<1){p.error({title:"Write some text"}),P(t.comment);return}try{const o=await I(t);q(o)}catch(o){q({title:"Error",message:o.message})}$.reset(),u.style.display="none",N()},je=()=>{u.style.display="none",b.value="",y.value="",N()};b.addEventListener("input",ye);y.addEventListener("input",he);$.addEventListener("submit",Le);u.addEventListener("click",je);be.addEventListener("click",()=>{h()});window.addEventListener("click",e=>{e.target===d&&h()});window.addEventListener("keydown",e=>{e.key==="Escape"&&h()});
//# sourceMappingURL=commonHelpers.js.map
