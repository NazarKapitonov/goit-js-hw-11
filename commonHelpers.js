import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const u=t=>{const o={key:"43314444-d9e0e152357d5f337246a957f",q:t.srcElement.elements.search_input.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9},e=`https://pixabay.com/api/?${new URLSearchParams(o).toString()}`;return fetch(e).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},d=t=>t.map(s=>`
      <li class="gallery-item"><a href="${s.largeImageURL}" class="gallery-link"><img src="${s.webformatURL}"
            alt="${s.tags}" class="gallery-img"></a>
        <div class="card-content">
          <div class="label-cont"><span class="label">Likes</span><span class="value">${s.likes}</span></div>
          <div class="label-cont"><span class="label">Views</span><span class="value">${s.views}</span></div>
          <div class="label-cont"><span class="label">Comments</span><span class="value">${s.comments}</span>
          </div>
          <div class="label-cont"><span class="label">Downloads</span><span class="value">${s.downloads}</span></div>
        </div>
      </li>
      `).join(""),r={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p={noMatches(){i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ff3333",position:"topRight"})}},f={captionsData:"alt",captionDelay:250},m=new c(".gallery a",f),h=t=>{t.preventDefault(),r.gallery.innerHTML="",r.loader.classList.add("is-open"),u(t).then(s=>{if(s.hits.length===0){p.noMatches();return}r.gallery.insertAdjacentHTML("beforeend",d(s.hits)),m.refresh()}).finally(()=>{r.loader.classList.remove("is-open")})};r.searchForm.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
