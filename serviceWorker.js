const staticDevAsistente = "dev-asistente-v1"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/voz.js",
    "/reloj.js",
    "/asistente.js",
    "/serviceWorker.js",
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

//ServiceWorker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}