// Service Worker atualizado para lidar com notificações push

self.addEventListener('install', (event) => {
  console.log('Service Worker a ser instalado.');
  // Força o novo Service Worker a ativar-se imediatamente
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
  // Garante que o Service Worker assume o controlo da página imediatamente
  event.waitUntil(self.clients.claim());
});

// "Ouvinte" para o evento de push
self.addEventListener('push', (event) => {
  console.log('Notificação push recebida.');
  
  // Lê os dados da notificação (se existirem), caso contrário, usa um texto padrão
  const data = event.data ? event.data.json() : { title: 'Nova Notícia!', body: 'Temos uma nova fofoca para si.' };
  
  const title = data.title;
  const options = {
    body: data.body,
    icon: 'https://placehold.co/192x192/DB2777/FFFFFF?text=CN', // Ícone da notificação
    badge: 'https://placehold.co/96x96/DB2777/FFFFFF?text=CN' // Ícone para a barra de notificações (Android)
  };

  // Exibe a notificação
  event.waitUntil(self.registration.showNotification(title, options));
});
