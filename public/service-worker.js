self.__WB_DISABLE_DEV_LOGS = true;
const CACHE_NAME = "cached-data-v1"

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        // Add the URLs of resources you want to cache here
      ])
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          return response
        }
        // If the response is not in the cache, fetch it from the network
        return fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
          .catch((error) => {
            console.error("Fetch error:", error)
            return new Response("An error occurred.", {
              status: 500,
              statusText: "Internal Server Error",
            })
          })
      })
    })
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Update the service worker when changes are made to this file
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting()
  }
})
