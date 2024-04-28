import{S as g,a as k}from"./assets/vendor-f6a94239.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const L=document.querySelector(".modal-header"),A=document.querySelector(".modal-btn-close"),C=document.querySelector(".header-icon-burger"),$=document.querySelectorAll(".menu-list a");function B(){L.classList.add("is-open"),document.body.style.overflow="hidden"}function h(){L.classList.remove("is-open"),document.body.style.overflow=""}A.addEventListener("click",h);C.addEventListener("click",B);document.addEventListener("DOMContentLoaded",function(){$.forEach(function(s){s.addEventListener("click",function(e){h()})})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".menu-center-open"),e=document.querySelector(".menu-center-list");s.addEventListener("click",function(){e.classList.toggle("is-open")})});const I=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){I.forEach(function(e){const t=e.querySelector(".aboutus-accord-btn-down"),i=e.querySelector(".aboutus-accord-btn-up");t.addEventListener("click",function(){s(e)}),i.addEventListener("click",function(){s(e)})});function s(e){const t=e.querySelector(".aboutus-accord-dropdown"),i=e.querySelector(".aboutus-accord-btn-down"),o=e.querySelector(".aboutus-accord-btn-up");t.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden")}});const P=new g(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const s=this.slides[this.previousIndex],e=this.slides[this.activeIndex];s.style.background="",e.style.backgroundColor="#ed3b44"}}}),O=document.querySelector(".aboutus-skills-btn");O.addEventListener("click",()=>{P.slideNext()});const D="/lloyd-jefferson-/assets/img_1_320-bb988309.png",N="/lloyd-jefferson-/assets/img_1_375-111ca135.png",v="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",T="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",z="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",R="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",b="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",V="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",U="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",H="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",W="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),j=new g(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{X(),j.slidePrev()});Z.addEventListener("click",()=>{K(),j.slideNext()});const G=document.querySelector(".projects-wrapper"),J=`
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
      srcset="${D} 292w, ${N} 584w, ${v} 528w, ${T} 1056w"
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
            srcset="${z} 292w, ${R} 584w, ${b} 528w, ${V} 1056w"
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
      srcset="${U} 292w, ${H} 584w, ${w} 528w, ${W} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;G.insertAdjacentHTML("beforeend",J);const a=document.querySelectorAll(".projects-slide"),u=document.querySelector(".projects-slider-btn--right"),p=document.querySelector(".projects-slider-btn--left");function K(){for(let s=0;s<=a.length-1;s++)a[0].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(u.classList.toggle("inActive"),u.setAttribute("disabled","true"))}function X(){a[2].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(p.classList.toggle("inActive"),p.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(t){const i=t.querySelector(".faq-btn-up"),o=t.querySelector(".faq-btn-down");i.addEventListener("click",function(){e(t,"up")}),o.addEventListener("click",function(){e(t,"down")})});function e(t,i){const o=t.querySelector(".faq-panel"),n=t.querySelector(".faq-btn-up"),r=t.querySelector(".faq-btn-down");i==="up"?(o.classList.add("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),n.classList.add("slide-in")):(o.classList.remove("hidden"),n.classList.remove("hidden"),r.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const Q=document.querySelector(".covers"),m=document.querySelectorAll(".covers-line");console.log(m);const Y={root:null,rootMargin:"0px",threshold:.5},ee=new IntersectionObserver(function(s,e){s.forEach(t=>{t.isIntersecting?m.forEach(i=>{i.classList.add("animation")}):m.forEach(i=>{i.classList.remove("animation")})})},Y);ee.observe(Q);const se="https://portfolio-js.b.goit.study/api",te="/reviews",oe="/requests",E=k.create({baseURL:se}),ne=async()=>(await E.get(te)).data,ie=async s=>(await E.post(oe,s)).data,re=document.querySelector(".review-list");async function ce(){try{const s=await ne(),e=le(s);re.innerHTML=e,new g(".review-list-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:4},769:{slidesPerView:2},320:{slidesPerView:1}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}})}catch(s){console.error("Error fetching reviews:",s)}}ce();function le(s){return s.map(e=>`<li class="swiper-slide">
          <img class="review-avatar" src="${e.avatar_url}" alt="${e.author}'s avatar" />
          <h3 class="review-author">${e.author}</h3>
          <p class="review-text">${e.review}</p>
        </li>`).join("")}const S=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,_=(s,e)=>s.test(e),q=document.getElementById("footer-form"),x=document.getElementById("footer-form-input"),M=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ae=document.querySelector(".footer-modal-btn-close"),y=s=>{d.classList.add("show-modal");const[e]=d.getElementsByTagName("h2"),[t]=d.getElementsByTagName("p");e.textContent=s.title,t.textContent=s.message},f=()=>{d.classList.remove("show-modal")},de=s=>{const e=s.target.value;_(S,e)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):e.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ue=s=>{s.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},pe=async s=>{s.preventDefault();const e={email:x.value,comment:M.value};if(_(S,e.email)!==!1&&!(e.comment.trim().length<1)){try{const t=await ie(e);q.reset(),y(t)}catch(t){y({title:"Error",message:t.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};x.addEventListener("blur",de);M.addEventListener("blur",ue);q.addEventListener("submit",pe);ae.addEventListener("click",()=>{f()});window.addEventListener("click",s=>{s.target===d&&f()});window.addEventListener("keydown",s=>{s.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
