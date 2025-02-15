self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("meu-pwa-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/style.css", // Se seu site tiver um CSS
          "/script.js", // Se tiver um JS
          "/icon-192x192.png",
          "/icon-512x512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  