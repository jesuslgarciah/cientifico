!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var a=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/cientifico">\n                        100tifi.co\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </div>\n        </div>\n    ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e);return await n.json()}catch{console.log("Fetch Error "+error)}};var o=async()=>`\n        <div class="Characters">\n            ${(await i()).results.map(n=>`\n                <article class="Characters-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n            `).join("")}\n            \n        </div>\n    `;const c=()=>location.hash.slice(1).split("/")[1]||"/";console.log(c);var s=c;var l=()=>'\n        <div class="Error 404">\n            <h2>Error 404</h2>\n        </div>\n    ';var d=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const u={"/":o,"/:id":async()=>{const n=s(),e=await i(n);return console.log(e),`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${e.episode.length}</span></h3>\n                <h3>Status: <span>${e.status}</span></h3>\n                <h3>Species: <span>${e.species}</span></h3>\n                <h3>Gender: <span>${e.gender}</span></h3>\n                <h3>Origin: <span>${e.origin.name}</span></h3>\n                <h3>Last Location: ${e.location.name}</span></h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"};var h=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");let t=s(),r=await d(t),i=u[r]?u[r]:l;e.innerHTML=await i(),n.innerHTML=await a()};window.addEventListener("load",h),window.addEventListener("hashchange",h)}]);
