self.addEventListener('install', function(event) {
    console.log('Service Worker: Instalado');
    // Adicione arquivos ao cache
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker: Ativado');
    // Limpe caches antigos
});

self.addEventListener('fetch', function(event) {
    console.log('Service Worker: Fetching', event.request.url);
    // Responda com arquivos do cache ou faça uma solicitação de rede
});