/* JS STUDIO - 앱 설치를 위한 최소 서비스워커.
   캐시를 사용하지 않고, 설치 시 이전 캐시를 모두 비웁니다. */

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) { return caches.delete(n); }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* fetch 이벤트를 가로채지 않음 → 항상 최신 내용을 네트워크에서 가져옴 */
