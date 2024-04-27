import{S as h,a as v,i as p}from"./assets/vendor-7014bba5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const w="/lloyd-jefferson-/assets/img_1_320-bb988309.png",_="/lloyd-jefferson-/assets/img_1_375-111ca135.png",u="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",L="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",x="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",E="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",f="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",A="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",S="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",q="/lloyd-jefferson-/assets/img_3_375-356430ed.png",b="/lloyd-jefferson-/assets/img_3_768-6322b368.png",B="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",$=document.querySelector(".projects-slider-btn--right"),I=document.querySelector(".projects-slider-btn--left"),j=new h(".projects-box",{speed:400,spaceBetween:100});I.addEventListener("click",()=>{k(),j.slidePrev()});$.addEventListener("click",()=>{R(),j.slideNext()});const P=document.querySelector(".projects-wrapper"),O=`
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
      srcset="${w} 292w, ${_} 584w, ${u} 528w, ${L} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${u}"
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
            srcset="${x} 292w, ${E} 584w, ${f} 528w, ${A} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${f}"
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
      srcset="${S} 292w, ${q} 584w, ${b} 528w, ${B} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${b}"
      alt="Vocab Builder App"
    />
  </li>`;P.insertAdjacentHTML("beforeend",O);const n=document.querySelectorAll(".projects-slide"),c=document.querySelector(".projects-slider-btn--right"),a=document.querySelector(".projects-slider-btn--left");function R(){for(let s=0;s<=n.length-1;s++)n[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),n[2].classList.contains("swiper-slide-next")&&(c.classList.toggle("inActive"),c.setAttribute("disabled","true"))}function k(){n[2].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}const C=document.querySelectorAll(".faq-list");C.forEach((s,i)=>{const r=s.querySelector(".faq-panel"),e=s.querySelector(".faq-btn-up"),t=s.querySelector(".faq-btn-down");let o=r.classList.contains("hidden");s.addEventListener("click",()=>{s.classList.toggle("active"),o=!o,r.classList.toggle("hidden",!o),e.classList.toggle("hidden",o),t.classList.toggle("hidden",!o)}),i!==0&&(e.classList.remove("hidden"),t.classList.add("hidden")),e.addEventListener("mouseenter",()=>{e.style.backgroundColor="rgba(250, 250, 250, 0.1)",e.style.borderColor="rgba(250, 250, 250, 0.5)",e.style.color="#FAFAFA"}),e.addEventListener("mouseleave",()=>{e.style.backgroundColor="",e.style.borderColor="",e.style.color=""}),e.addEventListener("focus",()=>{e.style.outline="none",e.style.boxShadow="0 0 0 2px rgba(255, 255, 255, 0.5)"}),e.addEventListener("blur",()=>{e.style.outline="",e.style.boxShadow=""})});const N=document.querySelector(".covers"),g=document.querySelectorAll(".covers-line");console.log(g);const T={root:null,rootMargin:"0px",threshold:.5},z=new IntersectionObserver(function(s,i){s.forEach(r=>{r.isIntersecting?g.forEach(e=>{e.classList.add("animation")}):g.forEach(e=>{e.classList.remove("animation")})})},T);z.observe(N);const M="https://portfolio-js.b.goit.study/api",F="/requests",D=v.create({baseURL:M}),U=async s=>(await D.post(F,s)).data,V=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,y=document.getElementById("footer-form"),Z=document.getElementById("footer-form-input"),G=document.getElementById("footer-form-textarea"),l=document.getElementById("modal"),H=document.querySelector(".modal-btn-close"),J=s=>{l.classList.add("show-modal");const[i]=l.getElementsByTagName("h2"),[r]=l.getElementsByTagName("p");i.textContent=s.title,r.textContent=s.message},m=()=>{l.classList.remove("show-modal")},K=async s=>{s.preventDefault();const i={email:Z.value,comment:G.value};if(V.test(i.email)===!1){p.error({message:"email is not allowed to be empty",position:"bottomRight"});return}if(i.comment.trim().length<1){p.error({message:"comment is not allowed to be empty",position:"bottomRight"});return}try{const r=await U(i);y.reset(),J(r)}catch(r){p.error({message:r.message,position:"bottomRight"})}};y.addEventListener("submit",K);H.addEventListener("click",()=>{m()});window.addEventListener("click",s=>{s.target===l&&m()});window.addEventListener("keydown",s=>{s.key==="Escape"&&m()});
//# sourceMappingURL=commonHelpers.js.map
