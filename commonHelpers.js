import{S as g,a as $,N as I,K as P,i as B}from"./assets/vendor-dfcf2b01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),s=document.querySelector(".header-icon-burger"),i=document.querySelectorAll(".menu-list a"),o=document.querySelector(".btn-menu-tablet"),n=document.querySelector(".btn-menu");function l(){e.classList.add("is-open"),document.body.style.overflow="hidden"}function u(){e.classList.remove("is-open"),document.body.style.overflow=""}t.addEventListener("click",u),s.addEventListener("click",l),o.addEventListener("click",u),i.forEach(function(C){C.addEventListener("click",function(ge){u()})}),n.addEventListener("click",function(){u()});const k=document.querySelector(".menu-center-open"),A=document.querySelector(".menu-center-list");k.addEventListener("click",function(){A.classList.toggle("is-open")})});const N=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){N.forEach(function(t,s){const i=t.querySelector(".aboutus-accord-dropdown"),o=t.querySelector(".aboutus-accord-btn-down"),n=t.querySelector(".aboutus-accord-btn-up");s===0&&(i.classList.toggle("hidden"),i.classList.add("active"),o.classList.add("hidden"),n.classList.remove("hidden")),o.addEventListener("click",function(){e(t)}),n.addEventListener("click",function(){e(t)})});function e(t){const s=t.querySelector(".aboutus-accord-dropdown"),i=t.querySelector(".aboutus-accord-btn-down"),o=t.querySelector(".aboutus-accord-btn-up");s.classList.toggle("active"),s.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden"),s.classList.contains("active")?s.style.maxHeight=s.scrollHeight+"px":s.style.maxHeight="0"}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((o,n)=>{const l=o.cloneNode(!0);t.appendChild(l)});const s=new g(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],n=this.slides[this.activeIndex];o.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{s.slideNext()})});const O="/lloyd-jefferson-/assets/img_1_320-bb988309.png",T="/lloyd-jefferson-/assets/img_1_375-111ca135.png",b="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",D="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",z="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",R="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",v="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",V="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",H="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",U="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",G="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",K=document.querySelector(".projects-slider-btn--right"),W=document.querySelector(".projects-slider-btn--left"),j=new g(".projects-box",{speed:400,spaceBetween:100});W.addEventListener("click",()=>{X(),j.slidePrev()});K.addEventListener("click",()=>{J(),j.slideNext()});const F=document.querySelector(".projects-wrapper"),Z=`
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
          href="https://levando21.github.io/lloyd-jefferson-/"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
    <img
      class="projects-image" 
      srcset="${O} 292w, ${T} 584w, ${b} 528w, ${D} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${b}"
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
          href="https://levando21.github.io/lloyd-jefferson-/"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
          <img
            class="projects-image"
            srcset="${z} 292w, ${R} 584w, ${v} 528w, ${V} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${v}"
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
          href="https://levando21.github.io/lloyd-jefferson-/"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
    <img class="projects-image" 
      srcset="${H} 292w, ${U} 584w, ${w} 528w, ${G} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;F.insertAdjacentHTML("beforeend",Z);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function J(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function X(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const i=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");i.addEventListener("click",function(){t(s)}),o.addEventListener("click",function(){t(s)})});function t(s){const i=s.querySelector(".faq-panel"),o=s.querySelector(".faq-btn-up"),n=s.querySelector(".faq-btn-down");i.classList.toggle("active"),o.classList.toggle("hidden"),n.classList.toggle("hidden")}});const Q=document.querySelector(".covers"),y=document.querySelectorAll(".covers-line"),Y={root:null,rootMargin:"0px",threshold:.5},ee=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?y.forEach(i=>{i.classList.add("animation")}):y.forEach(i=>{i.classList.remove("animation")})})},Y);ee.observe(Q);const te="https://portfolio-js.b.goit.study/api",se="/reviews",oe="/requests",E=$.create({baseURL:te}),ne=async()=>(await E.get(se)).data,ie=async e=>(await E.post(oe,e)).data,re=document.querySelector(".reviews-list"),ce=document.querySelector(".reviews-swiper"),le=async()=>{try{const e=await ne();e.length>0?ae(e):h()}catch(e){h(),B.error({message:e.message,position:"bottomRight"})}},ae=e=>{const t=e.map(({_id:s,author:i,avatar_url:o,review:n})=>`<li class="reviews-list-item swiper-slide" id="review-${s}" aria-label="review">
          <picture>
            <source srcset="${o}"
              type="image/jpeg">
              <img
                class="review-photo"
                src="${o}"
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
      </li>`).join("");re.innerHTML=t},h=(e="Not found")=>{const t=document.createElement("p");t.textContent=e,ce.insertAdjacentElement("afterbegin",t)};le();new g(".reviews-swiper",{modules:[I,P],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const S=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,x=(e,t)=>e.test(t),_=document.getElementById("footer-form"),q=document.getElementById("footer-form-input"),M=document.getElementById("footer-form-textarea"),r=document.querySelector(".email-message"),c=document.querySelector(".comment-message"),d=document.getElementById("modal"),de=document.querySelector(".footer-modal-btn-close"),L=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[s]=d.getElementsByTagName("p");t.textContent=e.title,s.textContent=e.message},f=()=>{d.classList.remove("show-modal")},ue=e=>{const t=e.target.value;x(S,t)!==!1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):t.length>0&&(r.textContent="Invalid email, try again",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},pe=e=>{e.target.value.trim().length>1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):(c.textContent="Please, write some text",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},me=async e=>{e.preventDefault();const t={email:q.value,comment:M.value};if(x(S,t.email)!==!1&&!(t.comment.trim().length<1)){try{const s=await ie(t);_.reset(),L(s)}catch(s){L({title:"Error",message:s.message})}r.textContent="",c.textContent="",r.classList.remove("isSuccessMessage","isErrorMessage"),c.classList.remove("isSuccessMessage","isErrorMessage")}};q.addEventListener("blur",ue);M.addEventListener("blur",pe);_.addEventListener("submit",me);de.addEventListener("click",()=>{f()});window.addEventListener("click",e=>{e.target===d&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
