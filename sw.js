/* JS STUDIO - 앱 설치를 위한 최소 서비스워커.
   실제 데이터는 항상 실시간으로 불러오므로 캐시는 사용하지 않습니다. */

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
  // 네트워크를 그대로 통과시킴 (캐시 없음)
  return;
});
