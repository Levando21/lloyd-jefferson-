import{S as v,A as I,a as P,N as O,K as N,i as T}from"./assets/vendor-2ddadce4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),s=document.querySelector(".header-icon-burger"),c=document.querySelectorAll(".menu-list a"),o=document.querySelector(".btn-menu-tablet"),n=document.querySelector(".btn-menu");function i(){e.classList.add("is-open"),document.body.style.overflow="hidden"}function a(){e.classList.remove("is-open"),document.body.style.overflow=""}t.addEventListener("click",a),s.addEventListener("click",i),o.addEventListener("click",a),c.forEach(function(y){y.addEventListener("click",function(m){a()})}),n.addEventListener("click",function(){a()});const b=document.querySelector(".menu-center-open"),d=document.querySelector(".menu-center-list");b.addEventListener("click",function(){d.classList.toggle("is-open")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),t=document.querySelector(".modal-btn-close"),s=document.querySelector(".header-icon-burger"),c=document.querySelectorAll(".menu-list a"),o=document.querySelector(".btn-menu-tablet"),n=document.querySelector(".btn-menu"),i=document.querySelector(".menu-center-open"),a=document.querySelector(".menu-center-list");function b(){e.classList.add("is-open"),document.body.style.overflow="hidden",t.style.display="flex"}function d(){e.classList.remove("is-open"),document.body.style.overflow=""}t.addEventListener("click",d),s.addEventListener("click",b),o.addEventListener("click",d),n.addEventListener("click",d),c.forEach(function(m){m.addEventListener("click",function(B){d()})}),document.querySelectorAll(".menu-center-item a").forEach(function(m){m.addEventListener("click",function(B){a.classList.remove("is-open")})}),i.addEventListener("click",function(){a.classList.toggle("is-open")})});const D=document.querySelectorAll(".aboutus-accordion-item");document.addEventListener("DOMContentLoaded",function(){D.forEach(function(t,s){const c=t.querySelector(".aboutus-accord-dropdown"),o=t.querySelector(".aboutus-accord-btn-down"),n=t.querySelector(".aboutus-accord-btn-up");s===0&&(c.classList.toggle("hidden"),c.classList.add("active"),o.classList.add("hidden"),n.classList.remove("hidden")),o.addEventListener("click",function(){e(t)}),n.addEventListener("click",function(){e(t)})});function e(t){const s=t.querySelector(".aboutus-accord-dropdown"),c=t.querySelector(".aboutus-accord-btn-down"),o=t.querySelector(".aboutus-accord-btn-up");s.classList.toggle("active"),s.classList.toggle("hidden"),o.classList.toggle("hidden"),c.classList.toggle("hidden"),s.classList.contains("active")?s.style.maxHeight=s.scrollHeight+"px":s.style.maxHeight="0"}});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutus-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((o,n)=>{const i=o.cloneNode(!0);t.appendChild(i)});const s=new v(".aboutus-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],n=this.slides[this.activeIndex];o.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutus-skills-btn").addEventListener("click",()=>{s.slideNext()})});const z="/lloyd-jefferson-/assets/img_1_320-bb988309.png",R="/lloyd-jefferson-/assets/img_1_375-111ca135.png",L="/lloyd-jefferson-/assets/img_1_768-daf377c0.png",V="/lloyd-jefferson-/assets/img_1_1440-6e1e77a8.png",H="/lloyd-jefferson-/assets/img_2_320-9880dbfd.png",U="/lloyd-jefferson-/assets/img_2_375-eb6c78ab.png",h="/lloyd-jefferson-/assets/img_2_768-0ceb49a4.png",G="/lloyd-jefferson-/assets/img_2_1440-1fb0ec3f.png",K="/lloyd-jefferson-/assets/img_3_320-82c7ad1f.png",W="/lloyd-jefferson-/assets/img_3_375-356430ed.png",E="/lloyd-jefferson-/assets/img_3_768-6322b368.png",F="/lloyd-jefferson-/assets/img_3_1440-e3ae8908.png",Z=document.querySelector(".projects-slider-btn--right"),J=document.querySelector(".projects-slider-btn--left"),x=new v(".projects-box",{speed:400,spaceBetween:100});J.addEventListener("click",()=>{ee(),x.slidePrev()});Z.addEventListener("click",()=>{Y(),x.slideNext()});const X=document.querySelector(".projects-wrapper"),Q=`
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
      srcset="${z} 292w, ${R} 584w, ${L} 528w, ${V} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${L}"
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
            srcset="${H} 292w, ${U} 584w, ${h} 528w, ${G} 1056w"
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${h}"
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
      srcset="${K} 292w, ${W} 584w, ${E} 528w, ${F} 1056w"
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${E}"
      alt="Vocab Builder App"
    />
  </li>`;X.insertAdjacentHTML("beforeend",Q);const u=document.querySelectorAll(".projects-slide"),g=document.querySelector(".projects-slider-btn--right"),f=document.querySelector(".projects-slider-btn--left");function Y(){for(let e=0;e<=u.length-1;e++)u[0].classList.contains("swiper-slide-active")&&(f.classList.toggle("inActive"),f.removeAttribute("disabled")),u[2].classList.contains("swiper-slide-next")&&(g.classList.toggle("inActive"),g.setAttribute("disabled","true"))}function ee(){u[2].classList.contains("swiper-slide-active")&&(g.classList.toggle("inActive"),g.removeAttribute("disabled")),u[0].classList.contains("swiper-slide-prev")&&(f.classList.toggle("inActive"),f.setAttribute("disbled","true"))}document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".faq-container-list .faq-list"));new I(e,{duration:300,ariaEnabled:!0,collapse:!0,showMultiple:!1,beforeOpen:function(s){t(s)},beforeClose:function(s){t(s)}}),e.forEach(function(s){const c=s.querySelector(".faq-btn-up"),o=s.querySelector(".faq-btn-down");c.addEventListener("click",function(){t(s)}),o.addEventListener("click",function(){t(s)})});function t(s,c){const o=s.querySelector(".faq-panel"),n=s.querySelector(".faq-btn-up"),i=s.querySelector(".faq-btn-down");o.classList.toggle("active"),n.classList.toggle("hidden"),i.classList.toggle("hidden")}});const te=document.querySelector(".covers"),j=document.querySelectorAll(".covers-line"),se={root:null,rootMargin:"0px",threshold:.5},oe=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?j.forEach(c=>{c.classList.add("animation")}):j.forEach(c=>{c.classList.remove("animation")})})},se);oe.observe(te);const ne="https://portfolio-js.b.goit.study/api",ce="/reviews",ie="/requests",_=P.create({baseURL:ne}),re=async()=>(await _.get(ce)).data,le=async e=>(await _.post(ie,e)).data,ae=document.querySelector(".reviews-list"),de=document.querySelector(".reviews-swiper"),ue=async()=>{try{const e=await re();e.length>0?pe(e):S()}catch(e){S(),T.error({message:e.message,position:"bottomRight"})}},pe=e=>{const t=e.map(({_id:s,author:c,avatar_url:o,review:n})=>`<li class="reviews-list-item swiper-slide" id="review-${s}" aria-label="review">
          <picture>
            <source srcset="${o}"
              type="image/jpeg">
              <img
                class="review-photo"
                src="${o}"
                alt="${c} photo"
                width="48"
                height="48"
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${c}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${n}</p>
          </div>
      </li>`).join("");ae.innerHTML=t},S=(e="Not found")=>{const t=document.createElement("p");t.textContent=e,de.insertAdjacentElement("afterbegin",t)};ue();new v(".reviews-swiper",{modules:[O,N],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const M=/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,k=(e,t)=>e.test(t),A=document.getElementById("footer-form"),C=document.getElementById("footer-form-input"),$=document.getElementById("footer-form-textarea"),r=document.querySelector(".email-message"),l=document.querySelector(".comment-message"),p=document.getElementById("modal"),me=document.querySelector(".footer-modal-btn-close"),q=e=>{p.classList.add("show-modal");const[t]=p.getElementsByTagName("h2"),[s]=p.getElementsByTagName("p");t.textContent=e.title,s.textContent=e.message},w=()=>{p.classList.remove("show-modal")},ge=e=>{const t=e.target.value;k(M,t)!==!1?(r.textContent="Success!",r.classList.remove("isErrorMessage"),r.classList.add("isSuccessMessage")):t.length>0&&(r.textContent="Invalid email, try again",r.classList.remove("isSuccessMessage"),r.classList.add("isErrorMessage"))},fe=e=>{e.target.value.trim().length>1?(l.textContent="Success!",l.classList.remove("isErrorMessage"),l.classList.add("isSuccessMessage")):(l.textContent="Please, write some text",l.classList.remove("isSuccessMessage"),l.classList.add("isErrorMessage"))},be=async e=>{e.preventDefault();const t={email:C.value,comment:$.value};if(k(M,t.email)!==!1&&!(t.comment.trim().length<1)){try{const s=await le(t);A.reset(),q(s)}catch(s){q({title:"Error",message:s.message})}r.textContent="",l.textContent="",r.classList.remove("isSuccessMessage","isErrorMessage"),l.classList.remove("isSuccessMessage","isErrorMessage")}};C.addEventListener("blur",ge);$.addEventListener("blur",fe);A.addEventListener("submit",be);me.addEventListener("click",()=>{w()});window.addEventListener("click",e=>{e.target===p&&w()});window.addEventListener("keydown",e=>{e.key==="Escape"&&w()});
//# sourceMappingURL=commonHelpers.js.map
