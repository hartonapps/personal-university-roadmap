const CACHE_NAME = 'personal-univ-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
  'https://fonts.gstatic.com'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Cache add error (expected for external fonts):', err);
        // Continue even if some URLs fail
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Cache first for static assets
  if (request.destination === 'style' || 
      request.destination === 'script' ||
      request.destination === 'font') {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        }).catch(() => {
          // Return a basic offline response
          return new Response('Offline - resource not cached', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
    );
    return;
  }

  // Network first for HTML/navigation
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, response.clone());
            return response;
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then(response => {
          return response || new Response(
            'Offline - page not cached',
            { status: 503, statusText: 'Service Unavailable' }
          );
        });
      })
  );
});