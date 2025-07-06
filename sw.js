self.addEventListener('install',e=>{
  e.waitUntil(caches.open('v1').then(c=>c.addAll([ './','index.html','productos.json','https://cdn.jsdelivr.net/npm/@ericblade/quagga2@1.2.6/dist/quagga.min.js' ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});