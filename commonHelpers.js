import{S as m,a as A}from"./assets/vendor-f6a94239.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const L=document.querySelector(".modal-header"),B=document.querySelector(".modal-btn-close"),C=document.querySelector(".header-icon-burger"),I=document.querySelectorAll(".menu-list a");function $(){L.classList.add("is-open"),document.body.style.overflow="hidden"}function j(){L.classList.remove("is-open"),document.body.style.overflow=""}B.addEventListener("click",j);C.addEventListener("click",$);document.addEventListener("DOMContentLoaded",function(){I.forEach(function(t){t.addEventListener("click",function(e){j()})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-center-open"),e=document.querySelector(".menu-center-list");t.addEventListener("click",function(){e.classList.toggle("is-open")})});const P=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){P.forEach(function(e){const s=e.querySelector(".aboutus-accord-btn-down"),i=e.querySelector(".aboutus-accord-btn-up");s.addEventListener("click",function(){t(e)}),i.addEventListener("click",function(){t(e)})});function t(e){const s=e.querySelector(".aboutus-accord-dropdown"),i=e.querySelector(".aboutus-accord-btn-down"),o=e.querySelector(".aboutus-accord-btn-up");s.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden")}});const O=new m(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const t=this.slides[this.previousIndex],e=this.slides[this.activeIndex];t.style.background="",e.style.backgroundColor="#ed3b44"}}}),N=document.querySelector(".aboutus-skills-btn");N.addEventListener("click",()=>{O.slideNext()});const T="/lloyd-jefferson-/assets/img_1_320-bb988309.png",D="/lloyd-jefferson-/assets/img_1_375-111ca135.png",v="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",R="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",z="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",V="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",b="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",H="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",U="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",W="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",Z="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",F=document.querySelector(".projects-slider-btn--right"),G=document.querySelector(".projects-slider-btn--left"),E=new m(".projects-box",{speed:400,spaceBetween:100});G.addEventListener("click",()=>{Q(),E.slidePrev()});F.addEventListener("click",()=>{X(),E.slideNext()});const J=document.querySelector(".projects-wrapper"),K=`
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
      srcset="${T} 292w, ${D} 584w, ${v} 528w, ${R} 1056w"
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
            srcset="${z} 292w, ${V} 584w, ${b} 528w, ${H} 1056w"
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
      srcset="${U} 292w, ${W} 584w, ${w} 528w, ${Z} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;J.insertAdjacentHTML("beforeend",K);const a=document.querySelectorAll(".projects-slide"),u=document.querySelector(".projects-slider-btn--right"),p=document.querySelector(".projects-slider-btn--left");function X(){for(let t=0;t<=a.length-1;t++)a[0].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),a[2].classList.contains("swiper-slide-next")&&(u.classList.toggle("inActive"),u.setAttribute("disabled","true"))}function Q(){a[2].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(p.classList.toggle("inActive"),p.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const i=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");i.addEventListener("click",function(){e(s,"up")}),o.addEventListener("click",function(){e(s,"down")})});function e(s,i){const o=s.querySelector(".faq-panel"),n=s.querySelector(".faq-btn-up"),r=s.querySelector(".faq-btn-down");i==="up"?(o.classList.add("hidden"),n.classList.add("hidden"),r.classList.remove("hidden"),r.classList.remove("slide-out"),n.classList.add("slide-in")):(o.classList.remove("hidden"),n.classList.remove("hidden"),r.classList.add("hidden"),n.classList.remove("slide-out"),n.classList.remove("slide-in"),r.offsetWidth,r.classList.remove("slide-out"),r.classList.add("slide-in"))}});const Y=document.querySelector(".covers"),h=document.querySelectorAll(".covers-line"),ee={root:null,rootMargin:"0px",threshold:.5},te=new IntersectionObserver(function(t,e){t.forEach(s=>{s.isIntersecting?h.forEach(i=>{i.classList.add("animation")}):h.forEach(i=>{i.classList.remove("animation")})})},ee);te.observe(Y);const se="https://portfolio-js.b.goit.study/api",oe="/reviews",ne="/requests",S=A.create({baseURL:se}),ie=async()=>(await S.get(oe)).data,re=async t=>(await S.post(ne,t)).data;function ce(t){return t.map(e=>`<li class="swiper-slide review-item">
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
      </li>`).join("")}const le=async()=>{try{const t=document.querySelector(".review-list"),e=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next"),i=await ie();if(!i||i.length===0)throw new Error("Reviews not found");const o=ce(i);t.innerHTML='<ul class="swiper-wrapper">'+o+"</ul>";const n=window.innerWidth;let r=1;n>=1440?r=4:n>=758&&(r=2);const f=new m(".review-list",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,slidesPerView:r,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});e.addEventListener("click",()=>{f.slidePrev()}),s.addEventListener("click",()=>{f.slideNext()})}catch(t){console.error("Error fetching or displaying reviews:",t),alert("Error fetching reviews. Please try again later."),reviewList.innerHTML='<p class="not-found">Not found</p>'}};le();const _=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,x=(t,e)=>t.test(e),q=document.getElementById("footer-form"),M=document.getElementById("footer-form-input"),k=document.getElementById("footer-form-textarea"),c=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),d=document.getElementById("modal"),ae=document.querySelector(".footer-modal-btn-close"),y=t=>{d.classList.add("show-modal");const[e]=d.getElementsByTagName("h2"),[s]=d.getElementsByTagName("p");e.textContent=t.title,s.textContent=t.message},g=()=>{d.classList.remove("show-modal")},de=t=>{const e=t.target.value;x(_,e)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):e.length>0&&(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage"))},ue=t=>{t.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},pe=async t=>{t.preventDefault();const e={email:M.value,comment:k.value};if(x(_,e.email)!==!1&&!(e.comment.trim().length<1)){try{const s=await re(e);q.reset(),y(s)}catch(s){y({title:"Error",message:s.message})}c.textContent="",l.textContent="",c.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};M.addEventListener("blur",de);k.addEventListener("blur",ue);q.addEventListener("submit",pe);ae.addEventListener("click",()=>{g()});window.addEventListener("click",t=>{t.target===d&&g()});window.addEventListener("keydown",t=>{t.key==="Escape"&&g()});
//# sourceMappingURL=commonHelpers.js.map
