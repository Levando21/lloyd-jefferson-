import{S,a as q,i as g}from"./assets/vendor-f4b3ae08.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const y=document.querySelector(".modal-header"),x=document.querySelector(".modal-btn-close"),A=document.querySelector(".header-icon-burger"),B=document.querySelectorAll(".menu-list a");function M(){y.classList.add("is-open"),document.body.style.overflow="hidden"}function j(){y.classList.remove("is-open"),document.body.style.overflow=""}x.addEventListener("click",j);A.addEventListener("click",M);document.addEventListener("DOMContentLoaded",function(){B.forEach(function(e){e.addEventListener("click",function(t){j()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const I="/lloyd-jefferson-/assets/img_1_320-bb988309.png",$="/lloyd-jefferson-/assets/img_1_375-111ca135.png",f="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",C="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",O="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",k="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",b="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",P="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",N="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",R="/lloyd-jefferson-/assets/img_3_375-356430ed.png",v="/lloyd-jefferson-/assets/img_3_768-6322b368.png",T="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",z=document.querySelector(".projects-slider-btn--right"),D=document.querySelector(".projects-slider-btn--left"),L=new S(".projects-box",{speed:400,spaceBetween:100});D.addEventListener("click",()=>{F(),L.slidePrev()});z.addEventListener("click",()=>{Z(),L.slideNext()});const U=document.querySelector(".projects-wrapper"),H=`
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
      srcset="${I} 292w, ${$} 584w, ${f} 528w, ${C} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
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
            srcset="${O} 292w, ${k} 584w, ${b} 528w, ${P} 1056w"
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
      srcset="${N} 292w, ${R} 584w, ${v} 528w, ${T} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${v}"
      alt="Vocab Builder App"
    />
  </li>`;U.insertAdjacentHTML("beforeend",H);const r=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects-slider-btn--right"),d=document.querySelector(".projects-slider-btn--left");function Z(){for(let e=0;e<=r.length-1;e++)r[0].classList.contains("swiper-slide-active")&&(d.classList.toggle("inActive"),d.removeAttribute("disabled")),r[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function F(){r[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(d.classList.toggle("inActive"),d.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(o){const c=o.querySelector(".faq-btn-up"),s=o.querySelector(".faq-btn-down");c.addEventListener("click",function(){t(o)}),s.addEventListener("click",function(){t(o)})});function t(o){const c=o.querySelector(".faq-panel"),s=o.querySelector(".faq-btn-up"),n=o.querySelector(".faq-btn-down");c.classList.toggle("hidden"),s.classList.toggle("hidden"),n.classList.toggle("hidden")}});const G=document.querySelector(".covers"),m=document.querySelectorAll(".covers-line");console.log(m);const J={root:null,rootMargin:"0px",threshold:.5},K=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?m.forEach(c=>{c.classList.add("animation")}):m.forEach(c=>{c.classList.remove("animation")})})},J);K.observe(G);const V="https://portfolio-js.b.goit.study/api",X="/requests",Q=q.create({baseURL:V}),W=async e=>(await Q.post(X,e)).data,h=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,w=(e,t)=>e.test(t),_=document.getElementById("footer-form"),E=document.getElementById("footer-form-input"),i=document.getElementById("email-message"),Y=document.getElementById("footer-form-textarea"),l=document.getElementById("modal"),ee=document.querySelector(".modal-btn-close"),te=e=>{l.classList.add("show-modal");const[t]=l.getElementsByTagName("h2"),[o]=l.getElementsByTagName("p");t.textContent=e.title,o.textContent=e.message},u=()=>{l.classList.remove("show-modal")},se=async e=>{e.preventDefault();const t={email:E.value,comment:Y.value};if(w(h,t.email)!==!1){if(t.comment.trim().length<1){g.error({message:"comment is not allowed to be empty",position:"bottomRight"});return}try{const o=await W(t);_.reset(),te(o),i.textContent="",i.classList.remove("isSuccessMessage")}catch(o){g.error({message:o.message,position:"bottomRight"})}}};_.addEventListener("submit",se);E.addEventListener("blur",e=>{const t=e.target.value;w(h,t)!==!1?(i.textContent="Success!",i.classList.remove("isErrorMessage"),i.classList.add("isSuccessMessage")):t.length>0?(i.textContent="Invalid email, try again",i.classList.remove("isSuccessMessage"),i.classList.add("isErrorMessage")):(i.textContent="",i.classList.remove("isSuccessMessage"),i.classList.remove("isErrorMessage"))});ee.addEventListener("click",()=>{u()});window.addEventListener("click",e=>{e.target===l&&u()});window.addEventListener("keydown",e=>{e.key==="Escape"&&u()});
//# sourceMappingURL=commonHelpers.js.map
