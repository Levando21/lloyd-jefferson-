import{S as j,a as y}from"./assets/vendor-bae22d42.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const _="/lloyd-jefferson-/assets/img_1_320-bb988309.png",w="/lloyd-jefferson-/assets/img_1_375-111ca135.png",g="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",h="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",v="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",L="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",m="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",x="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",E="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",A="/lloyd-jefferson-/assets/img_3_375-356430ed.png",u="/lloyd-jefferson-/assets/img_3_768-6322b368.png",S="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",q=document.querySelector(".projects-slider-btn--right"),B=document.querySelector(".projects-slider-btn--left"),f=new j(".projects-box",{speed:400,spaceBetween:100});B.addEventListener("click",()=>{k(),f.slidePrev()});q.addEventListener("click",()=>{P(),f.slideNext()});const $=document.querySelector(".projects-wrapper"),I=`
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
      srcset="${_}292w, ${w} 584w, ${g}528w, ${h}1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${g}"
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
            srcset="${v} 292w, ${L} 584w, ${m} 528w, ${x} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${m}"
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
      srcset="${E} 292w, ${A} 584w, ${u} 528w, ${S} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${u}"
      alt="Vocab Builder App"
    />
  </li>`;$.insertAdjacentHTML("beforeend",I);const n=document.querySelectorAll(".projects-slide"),c=document.querySelector(".projects-slider-btn--right"),a=document.querySelector(".projects-slider-btn--left");function P(){for(let e=0;e<=n.length-1;e++)n[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),n[2].classList.contains("swiper-slide-next")&&(c.classList.toggle("inActive"),c.setAttribute("disabled","true"))}function k(){n[2].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}const C=document.querySelectorAll(".faq-list");C.forEach((e,i)=>{const r=e.querySelector(".faq-panel"),s=e.querySelector(".faq-btn-up"),t=e.querySelector(".faq-btn-down");let o=r.classList.contains("hidden");e.addEventListener("click",()=>{e.classList.toggle("active"),o=!o,r.classList.toggle("hidden",!o),s.classList.toggle("hidden",o),t.classList.toggle("hidden",!o)}),i!==0&&(s.classList.remove("hidden"),t.classList.add("hidden")),s.addEventListener("mouseenter",()=>{s.style.backgroundColor="rgba(250, 250, 250, 0.1)",s.style.borderColor="rgba(250, 250, 250, 0.5)",s.style.color="#FAFAFA"}),s.addEventListener("mouseleave",()=>{s.style.backgroundColor="",s.style.borderColor="",s.style.color=""}),s.addEventListener("focus",()=>{s.style.outline="none",s.style.boxShadow="0 0 0 2px rgba(255, 255, 255, 0.5)"}),s.addEventListener("blur",()=>{s.style.outline="",s.style.boxShadow=""})});const N="https://portfolio-js.b.goit.study/api",O="/requests",T=y.create({baseURL:N}),z=async e=>(await T.post(O,e)).data,R=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,b=document.getElementById("footer-form"),F=document.getElementById("footer-form-input"),M=document.getElementById("footer-form-textarea"),l=document.getElementById("modal"),D=document.querySelector(".modal-btn-close"),U=e=>{l.classList.add("show-modal");const[i]=l.getElementsByTagName("h2"),[r]=l.getElementsByTagName("p");i.textContent=e.title,r.textContent=e.message},p=()=>{l.classList.remove("show-modal")},V=async e=>{e.preventDefault();const i={email:F.value,comment:M.value};if(R.test(i.email)===!1){console.log("email error");return}if(i.comment.trim().length<1){console.log(i.comment.trim()),console.log("comment error");return}try{const r=await z(i);b.reset(),U(r)}catch{alert("error")}};b.addEventListener("submit",V);D.addEventListener("click",()=>{p()});window.addEventListener("click",e=>{e.target===l&&p()});window.addEventListener("keydown",e=>{e.key==="Escape"&&p()});
//# sourceMappingURL=commonHelpers.js.map
