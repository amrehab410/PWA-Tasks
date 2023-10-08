const cacheName = 'myCache';
const assets = [
  '/static/js/src_Components_Users_jsx.chunk.js',
  '/static/js/src_Components_Navbar_jsx.chunk.js',
  '/static/js/src_Components_Home_jsx.chunk.js',
  'https://jsonplaceholder.typicode.com/users',
  '/static/js/bundle.js',
  '/index.html',
  '/bootstrap/min/css',
  '/bootstrap/min/js',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/about',
  '/',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(assets).then().catch();
      })
      .catch((err) => console.log(err)),
  );
});

self.addEventListener('fetch', (fetchedEvent) => {
  fetchedEvent.respondWith(
    caches.match(fetchedEvent.request).then((response) => {
      return (
        response ||
        fetch(fetchedEvent.request).then((fetchers) => {
          caches.open(cacheName).then((cache) => {
            cache.put(fetchedEvent.request.fetchers.clone());
            return fetchers;
          });
        })
      );
    }),
  );
});
