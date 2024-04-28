import{S as j,a as k}from"./assets/vendor-f6a94239.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const h=document.querySelector(".modal-header"),C=document.querySelector(".modal-btn-close"),B=document.querySelector(".header-icon-burger"),I=document.querySelectorAll(".menu-list a");function $(){h.classList.add("is-open"),document.body.style.overflow="hidden"}function _(){h.classList.remove("is-open"),document.body.style.overflow=""}C.addEventListener("click",_);B.addEventListener("click",$);document.addEventListener("DOMContentLoaded",function(){I.forEach(function(e){e.addEventListener("click",function(t){_()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const P=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){P.forEach(function(t){const s=t.querySelector(".aboutus-accord-btn-down"),n=t.querySelector(".aboutus-accord-btn-up");s.addEventListener("click",function(){e(t)}),n.addEventListener("click",function(){e(t)})});function e(t){const s=t.querySelector(".aboutus-accord-dropdown"),n=t.querySelector(".aboutus-accord-btn-down"),o=t.querySelector(".aboutus-accord-btn-up");s.classList.toggle("hidden"),o.classList.toggle("hidden"),n.classList.toggle("hidden")}});const d=new j(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),g=document.querySelector(".aboutus-skills-btn");g.addEventListener("click",()=>{d.slideNext()});d.on("slideChange",()=>{if(d.params.slidesPerView>=d.slides.length){g.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else g.disabled=!1});const O="/lloyd-jefferson-/assets/img_1_320-bb988309.png",D="/lloyd-jefferson-/assets/img_1_375-111ca135.png",v="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",N="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",T="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",z="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",y="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",R="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",U="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",V="/lloyd-jefferson-/assets/img_3_375-356430ed.png",L="/lloyd-jefferson-/assets/img_3_768-6322b368.png",H="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),E=new j(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{W(),E.slidePrev()});Z.addEventListener("click",()=>{K(),E.slideNext()});const G=document.querySelector(".projects-wrapper"),J=`
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
            srcset="${T} 292w, ${z} 584w, ${y} 528w, ${R} 1056w"
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
          href="https://levando21.github.io/lloyd-jefferson-/"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
    <img class="projects-image" 
      srcset="${U} 292w, ${V} 584w, ${L} 528w, ${H} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${L}"
      alt="Vocab Builder App"
    />
  </li>`;G.insertAdjacentHTML("beforeend",J);const l=document.querySelectorAll(".projects-slide"),u=document.querySelector(".projects-slider-btn--right"),p=document.querySelector(".projects-slider-btn--left");function K(){for(let e=0;e<=l.length-1;e++)l[0].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),l[2].classList.contains("swiper-slide-next")&&(u.classList.toggle("inActive"),u.setAttribute("disabled","true"))}function W(){l[2].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),l[0].classList.contains("swiper-slide-prev")&&(p.classList.toggle("inActive"),p.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const n=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");n.addEventListener("click",function(){t(s)}),o.addEventListener("click",function(){t(s)})});function t(s){const n=s.querySelector(".faq-panel"),o=s.querySelector(".faq-btn-up"),c=s.querySelector(".faq-btn-down");n.classList.toggle("hidden"),o.classList.toggle("hidden"),c.classList.toggle("hidden")}});const X=document.querySelector(".covers"),f=document.querySelectorAll(".covers-line");console.log(f);const Q={root:null,rootMargin:"0px",threshold:.5},Y=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?f.forEach(n=>{n.classList.add("animation")}):f.forEach(n=>{n.classList.remove("animation")})})},Q);Y.observe(X);const ee="https://portfolio-js.b.goit.study/api",te="/requests",se=k.create({baseURL:ee}),oe=async e=>(await se.post(te,e)).data,S=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,q=(e,t)=>e.test(t),x=document.getElementById("footer-form"),M=document.getElementById("footer-form-input"),A=document.getElementById("footer-form-textarea"),i=document.querySelector(".email-message"),r=document.querySelector(".comment-message"),a=document.getElementById("modal"),ne=document.querySelector(".footer-modal-btn-close"),w=e=>{a.classList.add("show-modal");const[t]=a.getElementsByTagName("h2"),[s]=a.getElementsByTagName("p");t.textContent=e.title,s.textContent=e.message},b=()=>{a.classList.remove("show-modal")},ce=e=>{const t=e.target.value;q(S,t)!==!1?(i.textContent="Success!",i.classList.remove("isErrorMessage"),i.classList.add("isSuccessMessage")):t.length>0&&(i.textContent="Invalid email, try again",i.classList.remove("isSuccessMessage"),i.classList.add("isErrorMessage"))},ie=e=>{e.target.value.trim().length>1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):(r.textContent="Please, write some text",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},re=async e=>{e.preventDefault();const t={email:M.value,comment:A.value};if(q(S,t.email)!==!1&&!(t.comment.trim().length<1)){try{const s=await oe(t);x.reset(),w(s)}catch(s){w({title:"Error",message:s.message})}i.textContent="",r.textContent="",i.classList.remove("isSuccessMessage","isErrorMessage"),r.classList.remove("isSuccessMessage","isErrorMessage")}};M.addEventListener("blur",ce);A.addEventListener("blur",ie);x.addEventListener("submit",re);ne.addEventListener("click",()=>{b()});window.addEventListener("click",e=>{e.target===a&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});
//# sourceMappingURL=commonHelpers.js.map
