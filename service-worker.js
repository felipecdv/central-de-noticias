// Este é o Service Worker.
// Por enquanto, ele está simples, mas é a base para futuras funcionalidades
// como cache offline e notificações push.

self.addEventListener('install', (event) => {
  console.log('Service Worker a ser instalado.');
});

self.addEventListener('fetch', (event) => {
  // Para já, não vamos intercetar os pedidos, apenas deixá-los passar.
  // No futuro, podemos adicionar lógica de cache aqui.
  event.respondWith(fetch(event.request));
});
