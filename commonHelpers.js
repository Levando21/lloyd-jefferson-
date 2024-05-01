import{A as _,S as f,a as B,N as P,K as N,i as O}from"./assets/vendor-fc10b007.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),o=document.querySelector(".header-icon-burger"),i=document.querySelectorAll(".menu-list a"),s=document.querySelector(".btn-menu-tablet"),n=document.querySelector(".btn-menu"),l=document.querySelector(".menu-center-open"),b=document.querySelector(".menu-center-list");function I(){e.classList.add("is-open"),document.body.style.overflow="hidden",t.style.display="flex"}function u(){e.classList.remove("is-open"),document.body.style.overflow=""}t.addEventListener("click",u),o.addEventListener("click",I),s.addEventListener("click",u),n.addEventListener("click",u),i.forEach(function(g){g.addEventListener("click",function($){u()})}),document.querySelectorAll(".menu-center-item a").forEach(function(g){g.addEventListener("click",function($){b.classList.remove("is-open")})}),l.addEventListener("click",function(){b.classList.toggle("is-open")})});new _(".accordion-container-first",{duration:600,showMultiple:!0,openOnInit:[0]});const T=document.querySelectorAll(".aboutus-accordion-item");T.forEach(function(e){const t=e.querySelector(".aboutus-title-accordion"),o=e.querySelector(".aboutus-accord-btn-down");o.addEventListener("mouseenter",function(){t.classList.add("hovered")}),o.addEventListener("mouseleave",function(){t.classList.remove("hovered")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((s,n)=>{const l=s.cloneNode(!0);t.appendChild(l)});const o=new f(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],n=this.slides[this.activeIndex];s.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{o.slideNext()})});const z="/lloyd-jefferson-/assets/img_1_320-bb988309.png",R="/lloyd-jefferson-/assets/img_1_375-111ca135.png",w="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",V="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",D="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",G="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",y="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",H="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",K="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",W="/lloyd-jefferson-/assets/img_3_375-356430ed.png",h="/lloyd-jefferson-/assets/img_3_768-6322b368.png",F="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",U=document.querySelector(".projects-slider-btn--right"),Z=document.querySelector(".projects-slider-btn--left"),x=new f(".projects-box",{speed:400,spaceBetween:100});Z.addEventListener("click",()=>{Y(),x.slidePrev()});U.addEventListener("click",()=>{Q(),x.slideNext()});const J=document.querySelector(".projects-wrapper"),X=`
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
      srcset="${z} 292w, ${R} 584w, ${w} 528w, ${V} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
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
            srcset="${D} 292w, ${G} 584w, ${y} 528w, ${H} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${y}"
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
      srcset="${K} 292w, ${W} 584w, ${h} 528w, ${F} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${h}"
      alt="Vocab Builder App"
    />
  </li>`;J.insertAdjacentHTML("beforeend",X);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function Q(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function Y(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}new _(".accordion-container",{duration:600,showMultiple:!0});const ee=document.querySelector(".covers"),L=document.querySelectorAll(".covers-line"),te={root:null,rootMargin:"0px",threshold:.5},se=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?L.forEach(i=>{i.classList.add("animation")}):L.forEach(i=>{i.classList.remove("animation")})})},te);se.observe(ee);const oe="https://portfolio-js.b.goit.study/api",ne="/reviews",ie="/requests",S=B.create({baseURL:oe}),re=async()=>(await S.get(ne)).data,ce=async e=>(await S.post(ie,e)).data,le=document.querySelector(".reviews-list"),ae=document.querySelector(".reviews-swiper"),de=async()=>{try{const e=await re();e.length>0?ue(e):j()}catch(e){j(),O.error({message:e.message,position:"bottomRight"})}},ue=e=>{const t=e.map(({_id:o,author:i,avatar_url:s,review:n})=>`<li class="reviews-list-item swiper-slide" id="review-${o}" aria-label="review">
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
      </li>`).join("");le.innerHTML=t},j=(e="Not found")=>{const t=document.createElement("p");t.textContent=e,ae.insertAdjacentElement("afterbegin",t)};de();new f(".reviews-swiper",{modules:[P,N],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const q=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,M=(e,t)=>e.test(t),A=document.getElementById("footer-form"),C=document.getElementById("footer-form-input"),k=document.getElementById("footer-form-textarea"),r=document.querySelector(".email-message"),c=document.querySelector(".comment-message"),d=document.getElementById("modal"),pe=document.querySelector(".footer-modal-btn-close"),E=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");t.textContent=e.title,o.textContent=e.message},v=()=>{d.classList.remove("show-modal")},me=e=>{const t=e.target.value;M(q,t)!==!1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):t.length>0&&(r.textContent="Invalid email, try again",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},ge=e=>{e.target.value.trim().length>1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):(c.textContent="Please, write some text",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},fe=async e=>{e.preventDefault();const t={email:C.value,comment:k.value};if(M(q,t.email)!==!1&&!(t.comment.trim().length<1)){try{const o=await ce(t);A.reset(),E(o)}catch(o){E({title:"Error",message:o.message})}r.textContent="",c.textContent="",r.classList.remove("isSuccessMessage","isErrorMessage"),c.classList.remove("isSuccessMessage","isErrorMessage")}};C.addEventListener("blur",me);k.addEventListener("blur",ge);A.addEventListener("submit",fe);pe.addEventListener("click",()=>{v()});window.addEventListener("click",e=>{e.target===d&&v()});window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});
//# sourceMappingURL=commonHelpers.js.map
