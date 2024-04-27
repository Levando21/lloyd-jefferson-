import{S as w,a as _,i as p}from"./assets/vendor-f4b3ae08.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const y=document.querySelector(".modal-header"),L=document.querySelector(".modal-btn-close"),q=document.querySelector(".header-icon-burger"),E=document.querySelectorAll(".menu-list a");function S(){y.classList.add("is-open"),document.body.style.overflow="hidden"}function j(){y.classList.remove("is-open"),document.body.style.overflow=""}L.addEventListener("click",j);q.addEventListener("click",S);document.addEventListener("DOMContentLoaded",function(){E.forEach(function(e){e.addEventListener("click",function(o){j()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),o=document.querySelector(".menu-center-list");e.addEventListener("click",function(){o.classList.toggle("is-open")})});const x="/lloyd-jefferson-/assets/img_1_320-bb988309.png",A="/lloyd-jefferson-/assets/img_1_375-111ca135.png",g="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",B="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",I="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",$="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",f="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",O="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",k="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",M="/lloyd-jefferson-/assets/img_3_375-356430ed.png",b="/lloyd-jefferson-/assets/img_3_768-6322b368.png",P="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",C=document.querySelector(".projects-slider-btn--right"),R=document.querySelector(".projects-slider-btn--left"),v=new w(".projects-box",{speed:400,spaceBetween:100});R.addEventListener("click",()=>{D(),v.slidePrev()});C.addEventListener("click",()=>{z(),v.slideNext()});const N=document.querySelector(".projects-wrapper"),T=`
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
      srcset="${x} 292w, ${A} 584w, ${g} 528w, ${B} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${g}"
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
            srcset="${I} 292w, ${$} 584w, ${f} 528w, ${O} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${f}"
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
      srcset="${k} 292w, ${M} 584w, ${b} 528w, ${P} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${b}"
      alt="Vocab Builder App"
    />
  </li>`;N.insertAdjacentHTML("beforeend",T);const c=document.querySelectorAll(".projects-slide"),l=document.querySelector(".projects-slider-btn--right"),a=document.querySelector(".projects-slider-btn--left");function z(){for(let e=0;e<=c.length-1;e++)c[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),c[2].classList.contains("swiper-slide-next")&&(l.classList.toggle("inActive"),l.setAttribute("disabled","true"))}function D(){c[2].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const i=s.querySelector(".faq-btn-up"),t=s.querySelector(".faq-btn-down");i.addEventListener("click",function(){o(s)}),t.addEventListener("click",function(){o(s)})});function o(s){const i=s.querySelector(".faq-panel"),t=s.querySelector(".faq-btn-up"),n=s.querySelector(".faq-btn-down");i.classList.toggle("hidden"),t.classList.toggle("hidden"),n.classList.toggle("hidden")}});const U=document.querySelector(".covers"),m=document.querySelectorAll(".covers-line");console.log(m);const H={root:null,rootMargin:"0px",threshold:.5},Z=new IntersectionObserver(function(e,o){e.forEach(s=>{s.isIntersecting?m.forEach(i=>{i.classList.add("animation")}):m.forEach(i=>{i.classList.remove("animation")})})},H);Z.observe(U);const F="https://portfolio-js.b.goit.study/api",G="/requests",J=_.create({baseURL:F}),K=async e=>(await J.post(G,e)).data,V=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,h=document.getElementById("footer-form"),X=document.getElementById("footer-form-input"),Q=document.getElementById("footer-form-textarea"),r=document.getElementById("modal"),W=document.querySelector(".modal-btn-close"),Y=e=>{r.classList.add("show-modal");const[o]=r.getElementsByTagName("h2"),[s]=r.getElementsByTagName("p");o.textContent=e.title,s.textContent=e.message},u=()=>{r.classList.remove("show-modal")},ee=async e=>{e.preventDefault();const o={email:X.value,comment:Q.value};if(V.test(o.email)===!1){p.error({message:"email is not allowed to be empty",position:"bottomRight"});return}if(o.comment.trim().length<1){p.error({message:"comment is not allowed to be empty",position:"bottomRight"});return}try{const s=await K(o);h.reset(),Y(s)}catch(s){p.error({message:s.message,position:"bottomRight"})}};h.addEventListener("submit",ee);W.addEventListener("click",()=>{u()});window.addEventListener("click",e=>{e.target===r&&u()});window.addEventListener("keydown",e=>{e.key==="Escape"&&u()});
//# sourceMappingURL=commonHelpers.js.map
