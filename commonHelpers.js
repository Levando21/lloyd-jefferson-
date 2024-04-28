import{S as v,a as O}from"./assets/vendor-f6a94239.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const _=document.querySelector(".modal-header"),V=document.querySelector(".modal-btn-close"),D=document.querySelector(".header-icon-burger"),N=document.querySelectorAll(".menu-list a");function T(){_.classList.add("is-open"),document.body.style.overflow="hidden"}function q(){_.classList.remove("is-open"),document.body.style.overflow=""}V.addEventListener("click",q);D.addEventListener("click",T);document.addEventListener("DOMContentLoaded",function(){N.forEach(function(e){e.addEventListener("click",function(s){q()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),s=document.querySelector(".menu-center-list");e.addEventListener("click",function(){s.classList.toggle("is-open")})});const z=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){z.forEach(function(s){const o=s.querySelector(".aboutus-accord-btn-down"),n=s.querySelector(".aboutus-accord-btn-up");o.addEventListener("click",function(){e(s)}),n.addEventListener("click",function(){e(s)})});function e(s){const o=s.querySelector(".aboutus-accord-dropdown"),n=s.querySelector(".aboutus-accord-btn-down"),t=s.querySelector(".aboutus-accord-btn-up");o.classList.toggle("hidden"),t.classList.toggle("hidden"),n.classList.toggle("hidden")}});const p=new v(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),f=document.querySelector(".aboutus-skills-btn");f.addEventListener("click",()=>{p.slideNext()});p.on("slideChange",()=>{if(p.params.slidesPerView>=p.slides.length){f.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else f.disabled=!1});const R="/lloyd-jefferson-/assets/img_1_320-bb988309.png",W="/lloyd-jefferson-/assets/img_1_375-111ca135.png",L="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",U="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",H="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",X="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",j="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",Z="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",F="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",G="/lloyd-jefferson-/assets/img_3_375-356430ed.png",E="/lloyd-jefferson-/assets/img_3_768-6322b368.png",J="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",K=document.querySelector(".projects-slider-btn--right"),Q=document.querySelector(".projects-slider-btn--left"),x=new v(".projects-box",{speed:400,spaceBetween:100});Q.addEventListener("click",()=>{te(),x.slidePrev()});K.addEventListener("click",()=>{se(),x.slideNext()});const Y=document.querySelector(".projects-wrapper"),ee=`
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
      srcset="${R} 292w, ${W} 584w, ${L} 528w, ${U} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${L}"
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
            srcset="${H} 292w, ${X} 584w, ${j} 528w, ${Z} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${j}"
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
      srcset="${F} 292w, ${G} 584w, ${E} 528w, ${J} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${E}"
      alt="Vocab Builder App"
    />
  </li>`;Y.insertAdjacentHTML("beforeend",ee);const a=document.querySelectorAll(".projects-slide"),m=document.querySelector(".projects-slider-btn--right"),g=document.querySelector(".projects-slider-btn--left");function se(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(g.classList.toggle("inActive"),g.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(m.classList.toggle("inActive"),m.setAttribute("disabled","true"))}function te(){a[2].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(g.classList.toggle("inActive"),g.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(o){const n=o.querySelector(".faq-btn-up"),t=o.querySelector(".faq-btn-down");n.addEventListener("click",function(){s(o,"up")}),t.addEventListener("click",function(){s(o,"down")})});function s(o,n){const t=o.querySelector(".faq-panel"),i=o.querySelector(".faq-btn-up"),r=o.querySelector(".faq-btn-down");n==="up"?(t.classList.add("hidden"),i.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),i.classList.add("slide-in")):(t.classList.remove("hidden"),i.classList.remove("hidden"),r.classList.add("hidden"),i.classList.remove("slide-out"),i.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const oe=document.querySelector(".covers"),b=document.querySelectorAll(".covers-line");console.log(b);const ne={root:null,rootMargin:"0px",threshold:.5},ie=new IntersectionObserver(function(e,s){e.forEach(o=>{o.isIntersecting?b.forEach(n=>{n.classList.add("animation")}):b.forEach(n=>{n.classList.remove("animation")})})},ne);ie.observe(oe);const re="https://portfolio-js.b.goit.study/api",ce="/reviews",le="/requests",M=O.create({baseURL:re}),ae=async()=>(await M.get(ce)).data,de=async e=>(await M.post(le,e)).data;function ue(e){return e.map(s=>`<li class="review-item">
          <img
            class="review-avatar"
            src="${s.avatar_url}"
            alt="${s.author}'s avatar"
          />
          <h3 class="review-author">${s.author}</h3>
          <p class="review-text">${s.review}</p>
        </li>`).join("")}const pe=async()=>{try{let t=function(P){n+=P,n<0?n=0:n>=e.children.length&&(n=e.children.length-1);const I=-n*e.children[0].offsetWidth;e.style.transform=`translateX(${I}px)`};const e=document.querySelector(".review-list"),s=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");let n=0;s.addEventListener("click",()=>{t(-1)}),o.addEventListener("click",()=>{t(1)});const i=await ae(),r=ue(i);e.insertAdjacentHTML("beforeend",r);const h=window.innerWidth;let u=6;h>=1440?u=4:h>=769?u=2:u=1;const y=new v(".review-list-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,slidesPerView:u,breakpoints:{1440:{slidesPerView:4},769:{slidesPerView:2},375:{slidesPerView:1},320:{slidesPerView:1}}});y.on("slideChange",()=>{n=y.realIndex})}catch(e){console.error("Error fetching reviews:",e)}};pe();const k=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,A=(e,s)=>e.test(s),$=document.getElementById("footer-form"),B=document.getElementById("footer-form-input"),C=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),me=document.querySelector(".footer-modal-btn-close"),S=e=>{d.classList.add("show-modal");const[s]=d.getElementsByTagName("h2"),[o]=d.getElementsByTagName("p");s.textContent=e.title,o.textContent=e.message},w=()=>{d.classList.remove("show-modal")},ge=e=>{const s=e.target.value;A(k,s)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):s.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},fe=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},be=async e=>{e.preventDefault();const s={email:B.value,comment:C.value};if(A(k,s.email)!==!1&&!(s.comment.trim().length<1)){try{const o=await de(s);$.reset(),S(o)}catch(o){S({title:"Error",message:o.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};B.addEventListener("blur",ge);C.addEventListener("blur",fe);$.addEventListener("submit",be);me.addEventListener("click",()=>{w()});window.addEventListener("click",e=>{e.target===d&&w()});window.addEventListener("keydown",e=>{e.key==="Escape"&&w()});
//# sourceMappingURL=commonHelpers.js.map
