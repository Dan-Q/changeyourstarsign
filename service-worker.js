const CACHE = 'v1';

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(CACHE);
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/',
      '/index.html',
      '/simple.css',
			'/zodiac-260.png',
			'/certificate/certificate-aquarius-670.webp',
			'/certificate/certificate-aries-670.webp',
			'/certificate/certificate-cancer-670.webp',
			'/certificate/certificate-capricorn-670.webp',
			'/certificate/certificate-gemini-670.webp',
			'/certificate/certificate-leo-670.webp',
			'/certificate/certificate-libra-670.webp',
			'/certificate/certificate-pisces-670.webp',
			'/certificate/certificate-sagittarius-670.webp',
			'/certificate/certificate-scorpio-670.webp',
			'/certificate/certificate-taurus-670.webp',
			'/certificate/certificate-virgo-670.webp',
			'/certificate/certificate-aquarius.png',
			'/certificate/certificate-aries.png',
			'/certificate/certificate-cancer.png',
			'/certificate/certificate-capricorn.png',
			'/certificate/certificate-gemini.png',
			'/certificate/certificate-leo.png',
			'/certificate/certificate-libra.png',
			'/certificate/certificate-pisces.png',
			'/certificate/certificate-sagittarius.png',
			'/certificate/certificate-scorpio.png',
			'/certificate/certificate-taurus.png',
			'/certificate/certificate-virgo.png',
			'/certificate/certificate-aquarius.pdf',
			'/certificate/certificate-aries.pdf',
			'/certificate/certificate-cancer.pdf',
			'/certificate/certificate-capricorn.pdf',
			'/certificate/certificate-gemini.pdf',
			'/certificate/certificate-leo.pdf',
			'/certificate/certificate-libra.pdf',
			'/certificate/certificate-pisces.pdf',
			'/certificate/certificate-sagittarius.pdf',
			'/certificate/certificate-scorpio.pdf',
			'/certificate/certificate-taurus.pdf',
			'/certificate/certificate-virgo.pdf',
    ]),
  );
});


self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
