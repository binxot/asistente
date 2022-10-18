const staticDevAsistente = "dev-asistente-v1"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/voz.js",
    "/reloj.js",
    "/asistente.js",
    "/fondos/bg1.jpg",
    "/fondos/bg2.jpg",
    "/iconos/config.png",
    "/iconos/gif.gif",
    "/iconos/icon.png",
]
  
self.addEventListener("install", installEvent => {
installEvent.waitUntil(
    caches.open(staticDevAsistente).then(cache => {
    cache.addAll(assets)
    })
)
})

self.addEventListener("fetch", fetchEvent => {
fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
    return res || fetch(fetchEvent.request)
    })
)
})