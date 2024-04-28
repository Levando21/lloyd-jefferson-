import{A as B,S as j,a as I,i as b}from"./assets/vendor-1235e62f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const h=document.querySelector(".modal-header"),M=document.querySelector(".modal-btn-close"),k=document.querySelector(".header-icon-burger"),$=document.querySelectorAll(".menu-list a");function P(){h.classList.add("is-open"),document.body.style.overflow="hidden"}function _(){h.classList.remove("is-open"),document.body.style.overflow=""}M.addEventListener("click",_);k.addEventListener("click",P);document.addEventListener("DOMContentLoaded",function(){$.forEach(function(e){e.addEventListener("click",function(t){_()})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-center-open"),t=document.querySelector(".menu-center-list");e.addEventListener("click",function(){t.classList.toggle("is-open")})});const v=new B(".accordion",{animationDuration:300,singleOpen:!0}),C=document.querySelectorAll(".aboutus-accordion-item");C.forEach(e=>{const t=e.querySelector(".aboutus-accord-btn-up"),s=e.querySelector(".aboutus-accord-btn-down");t.addEventListener("click",()=>{const n=e.querySelector(".aboutus-accord-dropdown");v.open(e),n.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden"),s.classList.remove("hidden")},100)}),s.addEventListener("click",()=>{const n=e.querySelector(".aboutus-accord-dropdown");v.close(e),n.classList.add("hidden"),t.classList.remove("hidden"),s.classList.add("hidden")})});const a=new j(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1280:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}}}),m=document.querySelector(".aboutus-skills-btn");m.addEventListener("click",()=>{a.slideNext()});a.on("slideChange",()=>{if(a.params.slidesPerView>=a.slides.length){m.disabled=!0;const e=document.querySelector(".aboutus-skills-btn-icon");e.style.fill="#3b3b3b"}else m.disabled=!1});const O="/lloyd-jefferson-/assets/img_1_320-bb988309.png",N="/lloyd-jefferson-/assets/img_1_375-111ca135.png",y="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",D="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",T="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",z="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",w="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",R="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",V="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",U="/lloyd-jefferson-/assets/img_3_375-356430ed.png",L="/lloyd-jefferson-/assets/img_3_768-6322b368.png",H="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),F=document.querySelector(".projects-slider-btn--left"),E=new j(".projects-box",{speed:400,spaceBetween:100});F.addEventListener("click",()=>{W(),E.slidePrev()});Z.addEventListener("click",()=>{K(),E.slideNext()});const G=document.querySelector(".projects-wrapper"),J=`
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
      srcset="${O} 292w, ${N} 584w, ${y} 528w, ${D} 1056w"
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
            srcset="${T} 292w, ${z} 584w, ${w} 528w, ${R} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${w}"
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
      srcset="${V} 292w, ${U} 584w, ${L} 528w, ${H} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${L}"
      alt="Vocab Builder App"
    />
  </li>`;G.insertAdjacentHTML("beforeend",J);const r=document.querySelectorAll(".projects-slide"),d=document.querySelector(".projects-slider-btn--right"),u=document.querySelector(".projects-slider-btn--left");function K(){for(let e=0;e<=r.length-1;e++)r[0].classList.contains("swiper-slide-active")&&(u.classList.toggle("inActive"),u.removeAttribute("disabled")),r[2].classList.contains("swiper-slide-next")&&(d.classList.toggle("inActive"),d.setAttribute("disabled","true"))}function W(){r[2].classList.contains("swiper-slide-active")&&(d.classList.toggle("inActive"),d.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(u.classList.toggle("inActive"),u.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(s){const n=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");n.addEventListener("click",function(){t(s)}),o.addEventListener("click",function(){t(s)})});function t(s){const n=s.querySelector(".faq-panel"),o=s.querySelector(".faq-btn-up"),i=s.querySelector(".faq-btn-down");n.classList.toggle("hidden"),o.classList.toggle("hidden"),i.classList.toggle("hidden")}});const X=document.querySelector(".covers"),g=document.querySelectorAll(".covers-line");console.log(g);const Q={root:null,rootMargin:"0px",threshold:.5},Y=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?g.forEach(n=>{n.classList.add("animation")}):g.forEach(n=>{n.classList.remove("animation")})})},Q);Y.observe(X);const ee="https://portfolio-js.b.goit.study/api",te="/requests",se=I.create({baseURL:ee}),oe=async e=>(await se.post(te,e)).data,S=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,q=(e,t)=>e.test(t),x=document.getElementById("footer-form"),A=document.getElementById("footer-form-input"),c=document.getElementById("email-message"),ne=document.getElementById("footer-form-textarea"),l=document.getElementById("modal"),ie=document.querySelector(".modal-btn-close"),ce=e=>{l.classList.add("show-modal");const[t]=l.getElementsByTagName("h2"),[s]=l.getElementsByTagName("p");t.textContent=e.title,s.textContent=e.message},f=()=>{l.classList.remove("show-modal")},re=async e=>{e.preventDefault();const t={email:A.value,comment:ne.value};if(q(S,t.email)!==!1){if(t.comment.trim().length<1){b.error({message:"comment is not allowed to be empty",position:"bottomRight"});return}try{const s=await oe(t);x.reset(),ce(s),c.textContent="",c.classList.remove("isSuccessMessage")}catch(s){b.error({message:s.message,position:"bottomRight"})}}};x.addEventListener("submit",re);A.addEventListener("blur",e=>{const t=e.target.value;q(S,t)!==!1?(c.textContent="Success!",c.classList.remove("isErrorMessage"),c.classList.add("isSuccessMessage")):t.length>0?(c.textContent="Invalid email, try again",c.classList.remove("isSuccessMessage"),c.classList.add("isErrorMessage")):(c.textContent="",c.classList.remove("isSuccessMessage"),c.classList.remove("isErrorMessage"))});ie.addEventListener("click",()=>{f()});window.addEventListener("click",e=>{e.target===l&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});
//# sourceMappingURL=commonHelpers.js.map
