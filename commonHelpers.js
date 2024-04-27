import{S as y,a as v}from"./assets/vendor-bae22d42.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const h="/lloyd-jefferson-/assets/img_1_320-bb988309.png",_="/lloyd-jefferson-/assets/img_1_375-111ca135.png",m="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",w="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",L="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",x="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",u="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",E="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",A="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",S="/lloyd-jefferson-/assets/img_3_375-356430ed.png",f="/lloyd-jefferson-/assets/img_3_768-6322b368.png",q="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",B=document.querySelector(".projects-slider-btn--right"),$=document.querySelector(".projects-slider-btn--left"),b=new y(".projects-box",{speed:400,spaceBetween:100});$.addEventListener("click",()=>{k(),b.slidePrev()});B.addEventListener("click",()=>{O(),b.slideNext()});const I=document.querySelector(".projects-wrapper"),P=`
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
      srcset="${h}292w, ${_} 584w, ${m}528w, ${w}1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${m}"
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
            srcset="${L} 292w, ${x} 584w, ${u} 528w, ${E} 1056w"
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
      srcset="${A} 292w, ${S} 584w, ${f} 528w, ${q} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
      alt="Vocab Builder App"
    />
  </li>`;I.insertAdjacentHTML("beforeend",P);const n=document.querySelectorAll(".projects-slide"),c=document.querySelector(".projects-slider-btn--right"),a=document.querySelector(".projects-slider-btn--left");function O(){for(let s=0;s<=n.length-1;s++)n[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),n[2].classList.contains("swiper-slide-next")&&(c.classList.toggle("inActive"),c.setAttribute("disabled","true"))}function k(){n[2].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}const C=document.querySelectorAll(".faq-list");C.forEach((s,r)=>{const i=s.querySelector(".faq-panel"),e=s.querySelector(".faq-btn-up"),t=s.querySelector(".faq-btn-down");let o=i.classList.contains("hidden");s.addEventListener("click",()=>{s.classList.toggle("active"),o=!o,i.classList.toggle("hidden",!o),e.classList.toggle("hidden",o),t.classList.toggle("hidden",!o)}),r!==0&&(e.classList.remove("hidden"),t.classList.add("hidden")),e.addEventListener("mouseenter",()=>{e.style.backgroundColor="rgba(250, 250, 250, 0.1)",e.style.borderColor="rgba(250, 250, 250, 0.5)",e.style.color="#FAFAFA"}),e.addEventListener("mouseleave",()=>{e.style.backgroundColor="",e.style.borderColor="",e.style.color=""}),e.addEventListener("focus",()=>{e.style.outline="none",e.style.boxShadow="0 0 0 2px rgba(255, 255, 255, 0.5)"}),e.addEventListener("blur",()=>{e.style.outline="",e.style.boxShadow=""})});const N=document.querySelector(".covers"),p=document.querySelectorAll(".covers-line");console.log(p);const T={root:null,rootMargin:"0px",threshold:.5},z=new IntersectionObserver(function(s,r){s.forEach(i=>{i.isIntersecting?p.forEach(e=>{e.classList.add("animation")}):p.forEach(e=>{e.classList.remove("animation")})})},T);z.observe(N);const M="https://portfolio-js.b.goit.study/api",R="/requests",F=v.create({baseURL:M}),D=async s=>(await F.post(R,s)).data,U=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,j=document.getElementById("footer-form"),V=document.getElementById("footer-form-input"),Z=document.getElementById("footer-form-textarea"),l=document.getElementById("modal"),G=document.querySelector(".modal-btn-close"),H=s=>{l.classList.add("show-modal");const[r]=l.getElementsByTagName("h2"),[i]=l.getElementsByTagName("p");r.textContent=s.title,i.textContent=s.message},g=()=>{l.classList.remove("show-modal")},J=async s=>{s.preventDefault();const r={email:V.value,comment:Z.value};if(U.test(r.email)===!1){console.log("email error");return}if(r.comment.trim().length<1){console.log(r.comment.trim()),console.log("comment error");return}try{const i=await D(r);j.reset(),H(i)}catch{alert("error")}};j.addEventListener("submit",J);G.addEventListener("click",()=>{g()});window.addEventListener("click",s=>{s.target===l&&g()});window.addEventListener("keydown",s=>{s.key==="Escape"&&g()});
//# sourceMappingURL=commonHelpers.js.map
