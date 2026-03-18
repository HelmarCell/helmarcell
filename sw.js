// sw.js - Service Worker Simples
self.addEventListener('install', (event) => {
  console.log('SW instalado');
});

self.addEventListener('fetch', (event) => {
  // O Chrome exige que este evento exista para ser "instalável"
  event.respondWith(fetch(event.request));
});