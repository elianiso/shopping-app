if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const o=e=>s(e,n),d={module:{uri:n},exports:c,require:o};i[n]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-475b3d61"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.min.js",revision:"b13495b45cc618ff99998f1aacddc632"},{url:"index.html",revision:"bd7d23899eb91ec1cd14e359f8c11be9"},{url:"index.js",revision:"7c0a1a809814cc81fe45971c4a2190e0"},{url:"style.css",revision:"7e4e65b85e33a030172d2254050bd3b5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
