import{S as u,a as b}from"./assets/vendor-bae22d42.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const j="/lloyd-jefferson-/assets/img_1_320-bb988309.png",y="/lloyd-jefferson-/assets/img_1_375-111ca135.png",d="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",_="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",h="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",w="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",p="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",v="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",L="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",x="/lloyd-jefferson-/assets/img_3_375-356430ed.png",g="/lloyd-jefferson-/assets/img_3_768-6322b368.png",A="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",S=document.querySelector(".projects-slider-btn--right"),q=document.querySelector(".projects-slider-btn--left"),f=new u(".projects-box",{speed:400,spaceBetween:100});q.addEventListener("click",()=>{I(),f.slidePrev()});S.addEventListener("click",()=>{B(),f.slideNext()});const E=document.querySelector(".projects-wrapper"),$=`
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
      srcset="${j}292w, ${y} 584w, ${d}528w, ${_}1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${d}"
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
            srcset="${h} 292w, ${w} 584w, ${p} 528w, ${v} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${p}"
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
      srcset="${L} 292w, ${x} 584w, ${g} 528w, ${A} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${g}"
      alt="Vocab Builder App"
    />
  </li>`;E.insertAdjacentHTML("beforeend",$);const l=document.querySelectorAll(".projects-slide"),n=document.querySelector(".projects-slider-btn--right"),c=document.querySelector(".projects-slider-btn--left");function B(){for(let o=0;o<=l.length-1;o++)l[0].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),l[2].classList.contains("swiper-slide-next")&&(n.classList.toggle("inActive"),n.setAttribute("disabled","true"))}function I(){l[2].classList.contains("swiper-slide-active")&&(n.classList.toggle("inActive"),n.removeAttribute("disabled")),l[0].classList.contains("swiper-slide-prev")&&(c.classList.toggle("inActive"),c.setAttribute("disbled","true"))}const P=document.querySelectorAll(".faq-list");P.forEach((o,i)=>{const r=o.querySelector(".faq-panel"),e=o.querySelector(".faq-btn-up"),s=o.querySelector(".faq-btn-down");let t=r.classList.contains("hidden");o.addEventListener("click",()=>{o.classList.toggle("active"),t=!t,r.classList.toggle("hidden",!t),e.classList.toggle("hidden",t),s.classList.toggle("hidden",!t)}),i!==0&&(e.classList.remove("hidden"),s.classList.add("hidden")),e.addEventListener("mouseenter",()=>{e.style.backgroundColor="rgba(250, 250, 250, 0.1)",e.style.borderColor="rgba(250, 250, 250, 0.5)",e.style.color="#FAFAFA"}),e.addEventListener("mouseleave",()=>{e.style.backgroundColor="",e.style.borderColor="",e.style.color=""}),e.addEventListener("focus",()=>{e.style.outline="none",e.style.boxShadow="0 0 0 2px rgba(255, 255, 255, 0.5)"}),e.addEventListener("blur",()=>{e.style.outline="",e.style.boxShadow=""})});const O="https://portfolio-js.b.goit.study/api",z="/requests",N=b.create({baseURL:O}),C=async o=>(await N.post(z,o)).data,F=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,m=document.getElementById("footer-form"),R=document.getElementById("footer-form-input"),T=document.getElementById("footer-form-textarea"),k=async o=>{o.preventDefault();const i={email:R.value,comment:T.value};if(F.test(i.email)===!1){console.log("email error");return}if(i.comment.trim().length<1){console.log(i.comment.trim()),console.log("comment error");return}try{await C(i),alert("send data is success"),m.reset()}catch(r){console.log(r)}};m.addEventListener("submit",k);
//# sourceMappingURL=commonHelpers.js.map
