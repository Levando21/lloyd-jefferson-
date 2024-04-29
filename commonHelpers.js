import{S as g,a as I}from"./assets/vendor-f6a94239.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const S=document.querySelector(".modal-header"),P=document.querySelector(".modal-btn-close"),O=document.querySelector(".header-icon-burger"),V=document.querySelectorAll(".menu-list a");function D(){S.classList.add("is-open"),document.body.style.overflow="hidden"}function E(){S.classList.remove("is-open"),document.body.style.overflow=""}P.addEventListener("click",E);O.addEventListener("click",D);document.addEventListener("DOMContentLoaded",function(){V.forEach(function(e){e.addEventListener("click",function(t){E()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const N=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){N.forEach(function(t){const o=t.querySelector(".aboutus-accord-btn-down"),n=t.querySelector(".aboutus-accord-btn-up");o.addEventListener("click",function(){e(t)}),n.addEventListener("click",function(){e(t)})});function e(t){const o=t.querySelector(".aboutus-accord-dropdown"),n=t.querySelector(".aboutus-accord-btn-down"),s=t.querySelector(".aboutus-accord-btn-up");o.classList.toggle("hidden"),s.classList.toggle("hidden"),n.classList.toggle("hidden")}});const T=new g(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const e=this.slides[this.previousIndex],t=this.slides[this.activeIndex];e.style.background="",t.style.backgroundColor="#ed3b44"}}}),z=document.querySelector(".aboutus-skills-btn");z.addEventListener("click",()=>{T.slideNext()});const R="/lloyd-jefferson-/assets/img_1_320-bb988309.png",W="/lloyd-jefferson-/assets/img_1_375-111ca135.png",w="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",U="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",H="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",X="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",h="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",Z="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",F="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",G="/lloyd-jefferson-/assets/img_3_375-356430ed.png",y="/lloyd-jefferson-/assets/img_3_768-6322b368.png",J="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",K=document.querySelector(".projects-slider-btn--right"),Q=document.querySelector(".projects-slider-btn--left"),_=new g(".projects-box",{speed:400,spaceBetween:100});Q.addEventListener("click",()=>{se(),_.slidePrev()});K.addEventListener("click",()=>{te(),_.slideNext()});const Y=document.querySelector(".projects-wrapper"),ee=`
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
      srcset="${R} 292w, ${W} 584w, ${w} 528w, ${U} 1056w"
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
          href="https://levando21.github.io/lloyd-jefferson-/"
          target="_blank"
        >
          <button class="projects-description-btn">See projects</button>
        </a>
    </div>
          <img
            class="projects-image"
            srcset="${H} 292w, ${X} 584w, ${h} 528w, ${Z} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${h}"
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
      srcset="${F} 292w, ${G} 584w, ${y} 528w, ${J} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${y}"
      alt="Vocab Builder App"
    />
  </li>`;Y.insertAdjacentHTML("beforeend",ee);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function te(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function se(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(o){const n=o.querySelector(".faq-btn-up"),s=o.querySelector(".faq-btn-down");n.addEventListener("click",function(){t(o,"up")}),s.addEventListener("click",function(){t(o,"down")})});function t(o,n){const s=o.querySelector(".faq-panel"),i=o.querySelector(".faq-btn-up"),r=o.querySelector(".faq-btn-down");n==="up"?(s.classList.add("hidden"),i.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),i.classList.add("slide-in")):(s.classList.remove("hidden"),i.classList.remove("hidden"),r.classList.add("hidden"),i.classList.remove("slide-out"),i.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const oe=document.querySelector(".covers"),L=document.querySelectorAll(".covers-line"),ne={root:null,rootMargin:"0px",threshold:.5},ie=new IntersectionObserver(function(e,t){e.forEach(o=>{o.isIntersecting?L.forEach(n=>{n.classList.add("animation")}):L.forEach(n=>{n.classList.remove("animation")})})},ne);ie.observe(oe);const re="https://portfolio-js.b.goit.study/api",ce="/reviews",le="/requests",x=I.create({baseURL:re}),ae=async()=>(await x.get(ce)).data,de=async e=>(await x.post(le,e)).data;function ue(e){return e.map(t=>`<li class="review-item">
      <img class="review-avatar" src="${t.avatar_url}" alt="${t.author}'s avatar"/>
      <h3 class="review-author">${t.author}</h3>
      <p class="review-text">${t.review}</p>
    </li>`).join("")}const pe=async()=>{try{let s=function($){n+=$,n<0?n=0:n>=e.children.length&&(n=e.children.length-1);const B=-n*e.children[0].offsetWidth;e.style.transform=`translateX(${B}px)`};const e=document.querySelector(".review-list"),t=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");let n=0;t.addEventListener("click",()=>{s(-1)}),o.addEventListener("click",()=>{s(1)});const i=await ae(),r=ue(i);e.insertAdjacentHTML("beforeend",r);const v=window.innerWidth;let u=6;v>=1440?u=4:v>=786?u=2:u=1;const b=new g(".review-list-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,slidesPerView:u,breakpoints:{1440:{slidesPerView:4},769:{slidesPerView:2},375:{slidesPerView:1},320:{slidesPerView:1}}});b.on("slideChange",()=>{n=b.realIndex})}catch(e){console.error("Error fetching reviews:",e)}};pe();const q=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,M=(e,t)=>e.test(t),k=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),C=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),me=document.querySelector(".footer-modal-btn-close"),j=e=>{d.classList.add("show-modal");const[t]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");t.textContent=e.title,o.textContent=e.message},f=()=>{d.classList.remove("show-modal")},ge=e=>{const t=e.target.value;M(q,t)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):t.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},fe=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},ve=async e=>{e.preventDefault();const t={email:A.value,comment:C.value};if(M(q,t.email)!==!1&&!(t.comment.trim().length<1)){try{const o=await de(t);k.reset(),j(o)}catch(o){j({title:"Error",message:o.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};A.addEventListener("blur",ge);C.addEventListener("blur",fe);k.addEventListener("submit",ve);me.addEventListener("click",()=>{f()});window.addEventListener("click",e=>{e.target===d&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
