import{S as w,a as k}from"./assets/vendor-f6a94239.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const j=document.querySelector(".modal-header"),C=document.querySelector(".modal-btn-close"),B=document.querySelector(".header-icon-burger"),I=document.querySelectorAll(".menu-list a");function $(){j.classList.add("is-open"),document.body.style.overflow="hidden"}function _(){j.classList.remove("is-open"),document.body.style.overflow=""}C.addEventListener("click",_);B.addEventListener("click",$);document.addEventListener("DOMContentLoaded",function(){I.forEach(function(e){e.addEventListener("click",function(s){_()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),s=document.querySelector(".menu-center-list");e.addEventListener("click",function(){s.classList.toggle("is-open")})});const P=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){P.forEach(function(s){const t=s.querySelector(".aboutus-accord-btn-down"),c=s.querySelector(".aboutus-accord-btn-up");t.addEventListener("click",function(){e(s)}),c.addEventListener("click",function(){e(s)})});function e(s){const t=s.querySelector(".aboutus-accord-dropdown"),c=s.querySelector(".aboutus-accord-btn-down"),o=s.querySelector(".aboutus-accord-btn-up");t.classList.toggle("hidden"),o.classList.toggle("hidden"),c.classList.toggle("hidden")}});const u=new w(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),g=document.querySelector(".aboutus-skills-btn");g.addEventListener("click",()=>{u.slideNext()});u.on("slideChange",()=>{if(u.params.slidesPerView>=u.slides.length){g.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else g.disabled=!1});const O="/lloyd-jefferson-/assets/img_1_320-bb988309.png",D="/lloyd-jefferson-/assets/img_1_375-111ca135.png",v="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",N="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",T="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",z="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",L="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",R="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",U="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",V="/lloyd-jefferson-/assets/img_3_375-356430ed.png",y="/lloyd-jefferson-/assets/img_3_768-6322b368.png",H="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",W=document.querySelector(".projects-slider-btn--right"),Z=document.querySelector(".projects-slider-btn--left"),E=new w(".projects-box",{speed:400,spaceBetween:100});Z.addEventListener("click",()=>{K(),E.slidePrev()});W.addEventListener("click",()=>{J(),E.slideNext()});const F=document.querySelector(".projects-wrapper"),G=`
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
      srcset="${O} 292w, ${D} 584w, ${v} 528w, ${N} 1056w"
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
            srcset="${T} 292w, ${z} 584w, ${L} 528w, ${R} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${L}"
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
      srcset="${U} 292w, ${V} 584w, ${y} 528w, ${H} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${y}"
      alt="Vocab Builder App"
    />
  </li>`;F.insertAdjacentHTML("beforeend",G);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function J(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function K(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(t){const c=t.querySelector(".faq-btn-up"),o=t.querySelector(".faq-btn-down");c.addEventListener("click",function(){s(t,"up")}),o.addEventListener("click",function(){s(t,"down")})});function s(t,c){const o=t.querySelector(".faq-panel"),n=t.querySelector(".faq-btn-up"),i=t.querySelector(".faq-btn-down");c==="up"?(o.classList.add("hidden"),n.classList.add("hidden"),i.classList.remove("hidden"),i.classList.remove("slide-out"),n.classList.add("slide-in")):(o.classList.remove("hidden"),n.classList.remove("hidden"),i.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),i.offsetWidth,i.classList.remove("slide-out"),i.classList.add("slide-in"))}});const X=document.querySelector(".covers"),f=document.querySelectorAll(".covers-line");console.log(f);const Q={root:null,rootMargin:"0px",threshold:.5},Y=new IntersectionObserver(function(e,s){e.forEach(t=>{t.isIntersecting?f.forEach(c=>{c.classList.add("animation")}):f.forEach(c=>{c.classList.remove("animation")})})},Q);Y.observe(X);const ee="https://portfolio-js.b.goit.study/api",se="/requests",te=k.create({baseURL:ee}),oe=async e=>(await te.post(se,e)).data,S=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,q=(e,s)=>e.test(s),x=document.getElementById("footer-form"),M=document.getElementById("footer-form-input"),A=document.getElementById("footer-form-textarea"),r=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ne=document.querySelector(".footer-modal-btn-close"),h=e=>{d.classList.add("show-modal");const[s]=d.getElementsByTagName("h2"),[t]=d.getElementsByTagName("p");s.textContent=e.title,t.textContent=e.message},b=()=>{d.classList.remove("show-modal")},ce=e=>{const s=e.target.value;q(S,s)!==!1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):s.length>0&&(r.textContent="Invalid email, try again",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},ie=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},re=async e=>{e.preventDefault();const s={email:M.value,comment:A.value};if(q(S,s.email)!==!1&&!(s.comment.trim().length<1)){try{const t=await oe(s);x.reset(),h(t)}catch(t){h({title:"Error",message:t.message})}r.textContent="",l.textContent="",r.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};M.addEventListener("blur",ce);A.addEventListener("blur",ie);x.addEventListener("submit",re);ne.addEventListener("click",()=>{b()});window.addEventListener("click",e=>{e.target===d&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});
//# sourceMappingURL=commonHelpers.js.map
