import{S as b,a as $}from"./assets/vendor-f6a94239.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const j=document.querySelector(".modal-header"),B=document.querySelector(".modal-btn-close"),C=document.querySelector(".header-icon-burger"),P=document.querySelectorAll(".menu-list a");function I(){j.classList.add("is-open"),document.body.style.overflow="hidden"}function E(){j.classList.remove("is-open"),document.body.style.overflow=""}B.addEventListener("click",E);C.addEventListener("click",I);document.addEventListener("DOMContentLoaded",function(){P.forEach(function(e){e.addEventListener("click",function(s){E()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),s=document.querySelector(".menu-center-list");e.addEventListener("click",function(){s.classList.toggle("is-open")})});const O=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){O.forEach(function(s){const t=s.querySelector(".aboutus-accord-btn-down"),i=s.querySelector(".aboutus-accord-btn-up");t.addEventListener("click",function(){e(s)}),i.addEventListener("click",function(){e(s)})});function e(s){const t=s.querySelector(".aboutus-accord-dropdown"),i=s.querySelector(".aboutus-accord-btn-down"),o=s.querySelector(".aboutus-accord-btn-up");t.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden")}});const u=new b(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),g=document.querySelector(".aboutus-skills-btn");g.addEventListener("click",()=>{u.slideNext()});u.on("slideChange",()=>{if(u.params.slidesPerView>=u.slides.length){g.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else g.disabled=!1});const D="/lloyd-jefferson-/assets/img_1_320-bb988309.png",N="/lloyd-jefferson-/assets/img_1_375-111ca135.png",w="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",T="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",V="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",z="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",L="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",R="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",U="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",H="/lloyd-jefferson-/assets/img_3_375-356430ed.png",y="/lloyd-jefferson-/assets/img_3_768-6322b368.png",W="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),_=new b(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{X(),_.slidePrev()});Z.addEventListener("click",()=>{K(),_.slideNext()});const G=document.querySelector(".projects-wrapper"),J=`
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
      srcset="${D} 292w, ${N} 584w, ${w} 528w, ${T} 1056w"
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
            srcset="${V} 292w, ${z} 584w, ${L} 528w, ${R} 1056w"
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
      srcset="${U} 292w, ${H} 584w, ${y} 528w, ${W} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${y}"
      alt="Vocab Builder App"
    />
  </li>`;G.insertAdjacentHTML("beforeend",J);const a=document.querySelectorAll(".projects-slide"),p=document.querySelector(".projects-slider-btn--right"),m=document.querySelector(".projects-slider-btn--left");function K(){for(let e=0;e<=a.length-1;e++)a[0].classList.contains("swiper-slide-active")&&(m.classList.toggle("inActive"),m.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(p.classList.toggle("inActive"),p.setAttribute("disabled","true"))}function X(){a[2].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(m.classList.toggle("inActive"),m.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(t){const i=t.querySelector(".faq-btn-up"),o=t.querySelector(".faq-btn-down");i.addEventListener("click",function(){s(t,"up")}),o.addEventListener("click",function(){s(t,"down")})});function s(t,i){const o=t.querySelector(".faq-panel"),n=t.querySelector(".faq-btn-up"),r=t.querySelector(".faq-btn-down");i==="up"?(o.classList.add("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),n.classList.add("slide-in")):(o.classList.remove("hidden"),n.classList.remove("hidden"),r.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const Q=document.querySelector(".covers"),f=document.querySelectorAll(".covers-line");console.log(f);const Y={root:null,rootMargin:"0px",threshold:.5},ee=new IntersectionObserver(function(e,s){e.forEach(t=>{t.isIntersecting?f.forEach(i=>{i.classList.add("animation")}):f.forEach(i=>{i.classList.remove("animation")})})},Y);ee.observe(Q);const se="https://portfolio-js.b.goit.study/api",te="/reviews",oe="/requests",S=$.create({baseURL:se}),ne=async()=>(await S.get(te)).data,ie=async e=>(await S.post(oe,e)).data,re=document.querySelector(".review-list");async function ce(){try{const e=await ne(),s=le(e);re.innerHTML=s,new b(".review-list-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:4},769:{slidesPerView:2},320:{slidesPerView:1}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})}catch(e){console.error("Error fetching reviews:",e)}}ce();function le(e){return e.map(s=>`<li class="swiper-slide">
          <img class="review-avatar" src="${s.avatar_url}" alt="${s.author}'s avatar" />
          <h3 class="review-author">${s.author}</h3>
          <p class="review-text">${s.review}</p>
        </li>`).join("")}const q=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,x=(e,s)=>e.test(s),M=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),k=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ae=document.querySelector(".footer-modal-btn-close"),h=e=>{d.classList.add("show-modal");const[s]=d.getElementsByTagName("h2"),[t]=d.getElementsByTagName("p");s.textContent=e.title,t.textContent=e.message},v=()=>{d.classList.remove("show-modal")},de=e=>{const s=e.target.value;x(q,s)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):s.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ue=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},pe=async e=>{e.preventDefault();const s={email:A.value,comment:k.value};if(x(q,s.email)!==!1&&!(s.comment.trim().length<1)){try{const t=await ie(s);M.reset(),h(t)}catch(t){h({title:"Error",message:t.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};A.addEventListener("blur",de);k.addEventListener("blur",ue);M.addEventListener("submit",pe);ae.addEventListener("click",()=>{v()});window.addEventListener("click",e=>{e.target===d&&v()});window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});
//# sourceMappingURL=commonHelpers.js.map
