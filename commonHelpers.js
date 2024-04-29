import{S as m,a as A}from"./assets/vendor-f6a94239.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const L=document.querySelector(".modal-header"),C=document.querySelector(".modal-btn-close"),B=document.querySelector(".header-icon-burger"),I=document.querySelectorAll(".menu-list a");function P(){L.classList.add("is-open"),document.body.style.overflow="hidden"}function j(){L.classList.remove("is-open"),document.body.style.overflow=""}C.addEventListener("click",j);B.addEventListener("click",P);document.addEventListener("DOMContentLoaded",function(){I.forEach(function(t){t.addEventListener("click",function(e){j()})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-center-open"),e=document.querySelector(".menu-center-list");t.addEventListener("click",function(){e.classList.toggle("is-open")})});const $=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){$.forEach(function(e){const o=e.querySelector(".aboutus-accord-btn-down"),i=e.querySelector(".aboutus-accord-btn-up");o.addEventListener("click",function(){t(e)}),i.addEventListener("click",function(){t(e)})});function t(e){const o=e.querySelector(".aboutus-accord-dropdown"),i=e.querySelector(".aboutus-accord-btn-down"),s=e.querySelector(".aboutus-accord-btn-up");o.classList.toggle("hidden"),s.classList.toggle("hidden"),i.classList.toggle("hidden")}});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".aboutus-skills-circle"),e=document.querySelector(".swiper-wrapper");t.forEach((s,n)=>{const r=s.cloneNode(!0);e.appendChild(r)});const o=new m(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],n=this.slides[this.activeIndex];s.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{o.slideNext()})});const O="/lloyd-jefferson-/assets/img_1_320-bb988309.png",N="/lloyd-jefferson-/assets/img_1_375-111ca135.png",v="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",D="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",T="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",R="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",b="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",z="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",V="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",W="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",H="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",U=document.querySelector(".projects-slider-btn--right"),Z=document.querySelector(".projects-slider-btn--left"),E=new m(".projects-box",{speed:400,spaceBetween:100});Z.addEventListener("click",()=>{K(),E.slidePrev()});U.addEventListener("click",()=>{J(),E.slideNext()});const F=document.querySelector(".projects-wrapper"),G=`
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
      srcset="${O} 292w, ${N} 584w, ${v} 528w, ${D} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${v}"
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
            srcset="${T} 292w, ${R} 584w, ${b} 528w, ${z} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${b}"
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
      srcset="${V} 292w, ${W} 584w, ${w} 528w, ${H} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;F.insertAdjacentHTML("beforeend",G);const a=document.querySelectorAll(".projects-slide"),u=document.querySelector(".projects-slider-btn--right"),p=document.querySelector(".projects-slider-btn--left");function J(){for(let t=0;t<=a.length-1;t++)a[0].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(u.classList.toggle("inActive"),u.setAttribute("disabled","true"))}function K(){a[2].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(p.classList.toggle("inActive"),p.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(o){const i=o.querySelector(".faq-btn-up"),s=o.querySelector(".faq-btn-down");i.addEventListener("click",function(){e(o,"up")}),s.addEventListener("click",function(){e(o,"down")})});function e(o,i){const s=o.querySelector(".faq-panel"),n=o.querySelector(".faq-btn-up"),r=o.querySelector(".faq-btn-down");i==="up"?(s.classList.add("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),n.classList.add("slide-in")):(s.classList.remove("hidden"),n.classList.remove("hidden"),r.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const X=document.querySelector(".covers"),h=document.querySelectorAll(".covers-line"),Q={root:null,rootMargin:"0px",threshold:.5},Y=new IntersectionObserver(function(t,e){t.forEach(o=>{o.isIntersecting?h.forEach(i=>{i.classList.add("animation")}):h.forEach(i=>{i.classList.remove("animation")})})},Q);Y.observe(X);const ee="https://portfolio-js.b.goit.study/api",te="/reviews",se="/requests",S=A.create({baseURL:ee}),oe=async()=>(await S.get(te)).data,ne=async t=>(await S.post(se,t)).data;function ie(t){return t.map(e=>`<li class="swiper-slide review-item">
        <img
          class="review-avatar"
          src="${e.avatar_url}"
          alt="${e.author}'s avatar"
        />
        <h3 class="review-author">${e.author}</h3>
        <p
          class="review-text"
          style="
           padding-right: 0px;
           width: 284px;
           height: 158px;
          "
        >
          It's not the will to win that matters—everyone has that. It's the will
          to prepare to win that matters.
        </p>
      </li>`).join("")}const re=async()=>{try{const t=document.querySelector(".review-list"),e=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next"),i=await oe();if(!i||i.length===0)throw new Error("Reviews not found");const s=ie(i);t.innerHTML='<ul class="swiper-wrapper">'+s+"</ul>";const n=window.innerWidth;let r=1;n>=1440?r=4:n>=758&&(r=2);const f=new m(".review-list",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,slidesPerView:r,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});e.addEventListener("click",()=>{f.slidePrev()}),o.addEventListener("click",()=>{f.slideNext()})}catch(t){console.error("Error fetching or displaying reviews:",t),alert("Error fetching reviews. Please try again later."),reviewList.innerHTML='<p class="not-found">Not found</p>'}};re();const _=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,x=(t,e)=>t.test(e),q=document.getElementById("footer-form"),M=document.getElementById("footer-form-input"),k=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ce=document.querySelector(".footer-modal-btn-close"),y=t=>{d.classList.add("show-modal");const[e]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");e.textContent=t.title,o.textContent=t.message},g=()=>{d.classList.remove("show-modal")},le=t=>{const e=t.target.value;x(_,e)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):e.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ae=t=>{t.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},de=async t=>{t.preventDefault();const e={email:M.value,comment:k.value};if(x(_,e.email)!==!1&&!(e.comment.trim().length<1)){try{const o=await ne(e);q.reset(),y(o)}catch(o){y({title:"Error",message:o.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};M.addEventListener("blur",le);k.addEventListener("blur",ae);q.addEventListener("submit",de);ce.addEventListener("click",()=>{g()});window.addEventListener("click",t=>{t.target===d&&g()});window.addEventListener("keydown",t=>{t.key==="Escape"&&g()});
//# sourceMappingURL=commonHelpers.js.map
