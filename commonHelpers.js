import{S as w,a as _,i as p}from"./assets/vendor-f4b3ae08.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const h="/lloyd-jefferson-/assets/img_1_320-bb988309.png",v="/lloyd-jefferson-/assets/img_1_375-111ca135.png",f="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",L="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",x="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",q="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",u="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",E="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",S="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",A="/lloyd-jefferson-/assets/img_3_375-356430ed.png",b="/lloyd-jefferson-/assets/img_3_768-6322b368.png",B="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",I=document.querySelector(".projects-slider-btn--right"),$=document.querySelector(".projects-slider-btn--left"),j=new w(".projects-box",{speed:400,spaceBetween:100});$.addEventListener("click",()=>{N(),j.slidePrev()});I.addEventListener("click",()=>{R(),j.slideNext()});const P=document.querySelector(".projects-wrapper"),O=`
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
      srcset="${h} 292w, ${v} 584w, ${f} 528w, ${L} 1056w"
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
            srcset="${x} 292w, ${q} 584w, ${u} 528w, ${E} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${u}"
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
      srcset="${S} 292w, ${A} 584w, ${b} 528w, ${B} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${b}"
      alt="Vocab Builder App"
    />
  </li>`;P.insertAdjacentHTML("beforeend",O);const r=document.querySelectorAll(".projects-slide"),l=document.querySelector(".projects-slider-btn--right"),a=document.querySelector(".projects-slider-btn--left");function R(){for(let s=0;s<=r.length-1;s++)r[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),r[2].classList.contains("swiper-slide-next")&&(l.classList.toggle("inActive"),l.setAttribute("disabled","true"))}function N(){r[2].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-list").forEach(function(t){const n=t.querySelector(".faq-btn-up"),e=t.querySelector(".faq-btn-down");n.addEventListener("click",function(){o(t)}),e.addEventListener("click",function(){o(t)})});function o(t){const n=t.querySelector(".faq-panel"),e=t.querySelector(".faq-btn-up"),i=t.querySelector(".faq-btn-down");n.classList.toggle("hidden"),e.classList.toggle("hidden"),i.classList.toggle("hidden")}});const T=document.querySelector(".covers"),g=document.querySelectorAll(".covers-line");console.log(g);const k={root:null,rootMargin:"0px",threshold:.5},z=new IntersectionObserver(function(s,o){s.forEach(t=>{t.isIntersecting?g.forEach(n=>{n.classList.add("animation")}):g.forEach(n=>{n.classList.remove("animation")})})},k);z.observe(T);const M="https://portfolio-js.b.goit.study/api",C="/requests",D=_.create({baseURL:M}),U=async s=>(await D.post(C,s)).data,Z=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,y=document.getElementById("footer-form"),F=document.getElementById("footer-form-input"),G=document.getElementById("footer-form-textarea"),c=document.getElementById("modal"),H=document.querySelector(".modal-btn-close"),J=s=>{c.classList.add("show-modal");const[o]=c.getElementsByTagName("h2"),[t]=c.getElementsByTagName("p");o.textContent=s.title,t.textContent=s.message},m=()=>{c.classList.remove("show-modal")},K=async s=>{s.preventDefault();const o={email:F.value,comment:G.value};if(Z.test(o.email)===!1){p.error({message:"email is not allowed to be empty",position:"bottomRight"});return}if(o.comment.trim().length<1){p.error({message:"comment is not allowed to be empty",position:"bottomRight"});return}try{const t=await U(o);y.reset(),J(t)}catch(t){p.error({message:t.message,position:"bottomRight"})}};y.addEventListener("submit",K);H.addEventListener("click",()=>{m()});window.addEventListener("click",s=>{s.target===c&&m()});window.addEventListener("keydown",s=>{s.key==="Escape"&&m()});
//# sourceMappingURL=commonHelpers.js.map
