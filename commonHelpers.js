import{S as g,a as u,N as P,K as $}from"./assets/vendor-18157253.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const E=document.querySelector(".modal-header"),B=document.querySelector(".modal-btn-close"),I=document.querySelector(".header-icon-burger"),O=document.querySelectorAll(".menu-list a");function N(){E.classList.add("is-open"),document.body.style.overflow="hidden"}function S(){E.classList.remove("is-open"),document.body.style.overflow=""}B.addEventListener("click",S);I.addEventListener("click",N);document.addEventListener("DOMContentLoaded",function(){O.forEach(function(e){e.addEventListener("click",function(t){S()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const T=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){T.forEach(function(t){const o=t.querySelector(".aboutus-accord-btn-down"),i=t.querySelector(".aboutus-accord-btn-up");o.addEventListener("click",function(){e(t)}),i.addEventListener("click",function(){e(t)})});function e(t){const o=t.querySelector(".aboutus-accord-dropdown"),i=t.querySelector(".aboutus-accord-btn-down"),s=t.querySelector(".aboutus-accord-btn-up");o.classList.toggle("hidden"),s.classList.toggle("hidden"),i.classList.toggle("hidden")}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((s,n)=>{const r=s.cloneNode(!0);t.appendChild(r)});const o=new g(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],n=this.slides[this.activeIndex];s.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{o.slideNext()})});const D="/lloyd-jefferson-/assets/img_1_320-bb988309.png",z="/lloyd-jefferson-/assets/img_1_375-111ca135.png",b="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",V="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",R="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",U="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",v="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",G="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",H="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",K="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",W="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),_=new g(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{Y(),_.slidePrev()});Z.addEventListener("click",()=>{Q(),_.slideNext()});const J=document.querySelector(".projects-wrapper"),X=`
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
      srcset="${D} 292w, ${z} 584w, ${b} 528w, ${V} 1056w"
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
            srcset="${R} 292w, ${U} 584w, ${v} 528w, ${G} 1056w"
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
      srcset="${H} 292w, ${K} 584w, ${w} 528w, ${W} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;J.insertAdjacentHTML("beforeend",X);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function Q(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function Y(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(o){const i=o.querySelector(".faq-btn-up"),s=o.querySelector(".faq-btn-down");i.addEventListener("click",function(){t(o,"up")}),s.addEventListener("click",function(){t(o,"down")})});function t(o,i){const s=o.querySelector(".faq-panel"),n=o.querySelector(".faq-btn-up"),r=o.querySelector(".faq-btn-down");i==="up"?(s.classList.add("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),n.classList.add("slide-in")):(s.classList.remove("hidden"),n.classList.remove("hidden"),r.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const ee=document.querySelector(".covers"),h=document.querySelectorAll(".covers-line"),te={root:null,rootMargin:"0px",threshold:.5},se=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?h.forEach(i=>{i.classList.add("animation")}):h.forEach(i=>{i.classList.remove("animation")})})},te);se.observe(ee);u.defaults.baseURL="https://portfolio-js.b.goit.study/api";u.defaults.headers.common.Accept="application/json";u.defaults.headers.common["Content-Type"]="application/json";function oe(){return u.get("/reviews")}function ne(e){return u.post("/requests",e)}const y=document.querySelector(".reviews-list");oe().then(e=>{if(!e.statusText==="OK")throw new Error("Empty response data");L(e.data,y,!0)}).catch(()=>{showMessage("Server error. Please try again!"),L([],y,!1)});function L(e,t,o){if(o){const i=e.map(({_id:s,author:n,avatar_url:r,review:k})=>`<li class="reviews-list-item swiper-slide" id="review-${s}" aria-label="review">
          <picture>
            <source srcset="${r}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${r}" 
                alt="${n} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${n}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${k}</p>
          </div>
          
      </li>`).join("");t.insertAdjacentHTML("beforeend",i)}}new g(".reviews-swiper",{modules:[P,$],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const x=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,q=(e,t)=>e.test(t),M=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),C=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ie=document.querySelector(".footer-modal-btn-close"),j=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");t.textContent=e.title,o.textContent=e.message},f=()=>{d.classList.remove("show-modal")},re=e=>{const t=e.target.value;q(x,t)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):t.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ce=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},le=async e=>{e.preventDefault();const t={email:A.value,comment:C.value};if(q(x,t.email)!==!1&&!(t.comment.trim().length<1)){try{const o=await ne(t);M.reset(),j(o)}catch(o){j({title:"Error",message:o.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};A.addEventListener("blur",re);C.addEventListener("blur",ce);M.addEventListener("submit",le);ie.addEventListener("click",()=>{f()});window.addEventListener("click",e=>{e.target===d&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
