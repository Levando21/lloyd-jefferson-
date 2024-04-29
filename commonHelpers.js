import{S as g,a as u,N as P,K as $}from"./assets/vendor-18157253.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const E=document.querySelector(".modal-header"),B=document.querySelector(".modal-btn-close"),I=document.querySelector(".header-icon-burger"),O=document.querySelectorAll(".menu-list a");function N(){E.classList.add("is-open"),document.body.style.overflow="hidden"}function S(){E.classList.remove("is-open"),document.body.style.overflow=""}B.addEventListener("click",S);I.addEventListener("click",N);document.addEventListener("DOMContentLoaded",function(){O.forEach(function(e){e.addEventListener("click",function(t){S()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const T=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){T.forEach(function(t,s){const i=t.querySelector(".aboutus-accord-dropdown"),o=t.querySelector(".aboutus-accord-btn-down"),n=t.querySelector(".aboutus-accord-btn-up");s===0&&(i.classList.toggle("hidden"),i.classList.add("active"),o.classList.add("hidden"),n.classList.remove("hidden")),o.addEventListener("click",function(){e(t)}),n.addEventListener("click",function(){e(t)})});function e(t){const s=t.querySelector(".aboutus-accord-dropdown"),i=t.querySelector(".aboutus-accord-btn-down"),o=t.querySelector(".aboutus-accord-btn-up");s.classList.toggle("active"),s.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden"),s.classList.contains("active")?s.style.maxHeight=s.scrollHeight+"px":s.style.maxHeight="0"}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((o,n)=>{const r=o.cloneNode(!0);t.appendChild(r)});const s=new g(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],n=this.slides[this.activeIndex];o.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{s.slideNext()})});const D="/lloyd-jefferson-/assets/img_1_320-bb988309.png",z="/lloyd-jefferson-/assets/img_1_375-111ca135.png",b="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",V="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",H="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",R="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",v="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",U="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",G="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",K="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",W="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),x=new g(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{Y(),x.slidePrev()});Z.addEventListener("click",()=>{Q(),x.slideNext()});const J=document.querySelector(".projects-wrapper"),X=`
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
            srcset="${H} 292w, ${R} 584w, ${v} 528w, ${U} 1056w"
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
      srcset="${G} 292w, ${K} 584w, ${w} 528w, ${W} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;J.insertAdjacentHTML("beforeend",X);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function Q(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function Y(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const i=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");i.addEventListener("click",function(){t(s)}),o.addEventListener("click",function(){t(s)})});function t(s){const i=s.querySelector(".faq-panel"),o=s.querySelector(".faq-btn-up"),n=s.querySelector(".faq-btn-down");i.classList.toggle("active"),o.classList.toggle("hidden"),n.classList.toggle("hidden")}});const ee=document.querySelector(".covers"),y=document.querySelectorAll(".covers-line"),te={root:null,rootMargin:"0px",threshold:.5},se=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?y.forEach(i=>{i.classList.add("animation")}):y.forEach(i=>{i.classList.remove("animation")})})},te);se.observe(ee);u.defaults.baseURL="https://portfolio-js.b.goit.study/api";u.defaults.headers.common.Accept="application/json";u.defaults.headers.common["Content-Type"]="application/json";function oe(){return u.get("/reviews")}function ne(e){return u.post("/requests",e)}const h=document.querySelector(".reviews-list");oe().then(e=>{if(!e.statusText==="OK")throw new Error("Empty response data");L(e.data,h,!0)}).catch(()=>{showMessage("Server error. Please try again!"),L([],h,!1)});function L(e,t,s){if(s){const i=e.map(({_id:o,author:n,avatar_url:r,review:k})=>`<li class="reviews-list-item swiper-slide" id="review-${o}" aria-label="review">
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
          
      </li>`).join("");t.insertAdjacentHTML("beforeend",i)}}new g(".reviews-swiper",{modules:[P,$],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const _=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,q=(e,t)=>e.test(t),M=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),C=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ie=document.querySelector(".footer-modal-btn-close"),j=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[s]=d.getElementsByTagName("p");t.textContent=e.title,s.textContent=e.message},f=()=>{d.classList.remove("show-modal")},re=e=>{const t=e.target.value;q(_,t)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):t.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ce=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},le=async e=>{e.preventDefault();const t={email:A.value,comment:C.value};if(q(_,t.email)!==!1&&!(t.comment.trim().length<1)){try{const s=await ne(t);M.reset(),j(s)}catch(s){j({title:"Error",message:s.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};A.addEventListener("blur",re);C.addEventListener("blur",ce);M.addEventListener("submit",le);ie.addEventListener("click",()=>{f()});window.addEventListener("click",e=>{e.target===d&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
