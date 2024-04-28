import{A as B,S as j,a as C}from"./assets/vendor-b2ad7bee.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();const _=document.querySelector(".modal-header"),I=document.querySelector(".modal-btn-close"),$=document.querySelector(".header-icon-burger"),P=document.querySelectorAll(".menu-list a");function O(){_.classList.add("is-open"),document.body.style.overflow="hidden"}function E(){_.classList.remove("is-open"),document.body.style.overflow=""}I.addEventListener("click",E);$.addEventListener("click",O);document.addEventListener("DOMContentLoaded",function(){P.forEach(function(e){e.addEventListener("click",function(s){E()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),s=document.querySelector(".menu-center-list");e.addEventListener("click",function(){s.classList.toggle("is-open")})});const v=new B(".accordion",{animationDuration:300,singleOpen:!0}),N=document.querySelectorAll(".aboutus-accordion-item");N.forEach(e=>{const s=e.querySelector(".aboutus-accord-btn-up"),t=e.querySelector(".aboutus-accord-btn-down");s.addEventListener("click",()=>{const n=e.querySelector(".aboutus-accord-dropdown");v.open(e),n.classList.remove("hidden"),setTimeout(()=>{s.classList.add("hidden"),t.classList.remove("hidden")},100)}),t.addEventListener("click",()=>{const n=e.querySelector(".aboutus-accord-dropdown");v.close(e),n.classList.add("hidden"),s.classList.remove("hidden"),t.classList.add("hidden")})});const d=new j(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1280:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),g=document.querySelector(".aboutus-skills-btn");g.addEventListener("click",()=>{d.slideNext()});d.on("slideChange",()=>{if(d.params.slidesPerView>=d.slides.length){g.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else g.disabled=!1});const D="/lloyd-jefferson-/assets/img_1_320-bb988309.png",T="/lloyd-jefferson-/assets/img_1_375-111ca135.png",y="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",z="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",R="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",V="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",L="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",U="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",H="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",Z="/lloyd-jefferson-/assets/img_3_375-356430ed.png",w="/lloyd-jefferson-/assets/img_3_768-6322b368.png",F="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",G=document.querySelector(".projects-slider-btn--right"),J=document.querySelector(".projects-slider-btn--left"),S=new j(".projects-box",{speed:400,spaceBetween:100});J.addEventListener("click",()=>{Q(),S.slidePrev()});G.addEventListener("click",()=>{X(),S.slideNext()});const K=document.querySelector(".projects-wrapper"),W=`
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
      srcset="${D} 292w, ${T} 584w, ${y} 528w, ${z} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${y}"
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
            srcset="${R} 292w, ${V} 584w, ${L} 528w, ${U} 1056w"
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
      srcset="${H} 292w, ${Z} 584w, ${w} 528w, ${F} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${w}"
      alt="Vocab Builder App"
    />
  </li>`;K.insertAdjacentHTML("beforeend",W);const l=document.querySelectorAll(".projects-slide"),u=document.querySelector(".projects-slider-btn--right"),p=document.querySelector(".projects-slider-btn--left");function X(){for(let e=0;e<=l.length-1;e++)l[0].classList.contains("swiper-slide-active")&&(p.classList.toggle("inActive"),p.removeAttribute("disabled")),l[2].classList.contains("swiper-slide-next")&&(u.classList.toggle("inActive"),u.setAttribute("disabled","true"))}function Q(){l[2].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),l[0].classList.contains("swiper-slide-prev")&&(p.classList.toggle("inActive"),p.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(t){const n=t.querySelector(".faq-btn-up"),o=t.querySelector(".faq-btn-down");n.addEventListener("click",function(){s(t)}),o.addEventListener("click",function(){s(t)})});function s(t){const n=t.querySelector(".faq-panel"),o=t.querySelector(".faq-btn-up"),c=t.querySelector(".faq-btn-down");n.classList.toggle("hidden"),o.classList.toggle("hidden"),c.classList.toggle("hidden")}});const Y=document.querySelector(".covers"),f=document.querySelectorAll(".covers-line");console.log(f);const ee={root:null,rootMargin:"0px",threshold:.5},se=new IntersectionObserver(function(e,s){e.forEach(t=>{t.isIntersecting?f.forEach(n=>{n.classList.add("animation")}):f.forEach(n=>{n.classList.remove("animation")})})},ee);se.observe(Y);const te="https://portfolio-js.b.goit.study/api",oe="/requests",ne=C.create({baseURL:te}),ce=async e=>(await ne.post(oe,e)).data,q=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,x=(e,s)=>e.test(s),M=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),k=document.getElementById("footer-form-textarea"),i=document.querySelector(".email-message"),r=document.querySelector(".comment-message"),a=document.getElementById("modal"),ie=document.querySelector(".footer-modal-btn-close"),h=e=>{a.classList.add("show-modal");const[s]=a.getElementsByTagName("h2"),[t]=a.getElementsByTagName("p");s.textContent=e.title,t.textContent=e.message},b=()=>{a.classList.remove("show-modal")},re=e=>{const s=e.target.value;x(q,s)!==!1?(i.textContent="Success!",i.classList.remove("isErrorMessage"),i.classList.add("isSuccessMessage")):s.length>0&&(i.textContent="Invalid email, try again",i.classList.remove("isSuccessMessage"),i.classList.add("isErrorMessage"))},le=e=>{e.target.value.trim().length>1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):(r.textContent="Please, write some text",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},ae=async e=>{e.preventDefault();const s={email:A.value,comment:k.value};if(x(q,s.email)!==!1&&!(s.comment.trim().length<1)){try{const t=await ce(s);M.reset(),h(t)}catch(t){h({title:"Error",message:t.message})}i.textContent="",r.textContent="",i.classList.remove("isSuccessMessage","isErrorMessage"),r.classList.remove("isSuccessMessage","isErrorMessage")}};A.addEventListener("blur",re);k.addEventListener("blur",le);M.addEventListener("submit",ae);ie.addEventListener("click",()=>{b()});window.addEventListener("click",e=>{e.target===a&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});
//# sourceMappingURL=commonHelpers.js.map
