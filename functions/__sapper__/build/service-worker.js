!function(){"use strict";const e=["client/chunk.97a4b9a4.js","client/client.e9cc004e.js","client/chunk.d0bf4898.js","client/chunk.a51fcd84.js","client/about.a6c90df9.js","client/index.e75955ec.js","client/index.cc1cf6bb.js","client/index.c8b55ea2.js","client/index.7622fd74.js","client/chunk.391c5d2a.js"].concat(["service-worker-index.html","favicon.png","firebase.mjs","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","theme.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1559034037421").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1559034037421"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1559034037421").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
