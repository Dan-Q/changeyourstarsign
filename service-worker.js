const CACHE = 'v1';

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(CACHE);
  await cache.addAll(resources);
};

self.addEventListener('install', e=>{
  e.waitUntil(
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

self.adEventListener('fetch', e=>{
	e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      if(r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(CACHE);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});