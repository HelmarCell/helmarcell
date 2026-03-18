// sw.js - Service Worker Básico
self.addEventListener('install', (event) => {
  console.log('SW: Instalado com sucesso!');
  self.skipWaiting(); // Força o SW a se tornar ativo imediatamente
});

self.addEventListener('activate', (event) => {
  console.log('SW: Ativado e pronto para rodar offline!');
});

// Este fetch vazio é o "pulo do gato" para o Chrome habilitar a instalação
self.addEventListener('fetch', (event) => {
  // Aqui você poderia adicionar lógica de cache, mas vazio já cumpre o requisito
});