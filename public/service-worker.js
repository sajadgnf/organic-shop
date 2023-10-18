self.__WB_DISABLE_DEV_LOGS = true;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("cached-data").then((cache) => {
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
            return new Response("An error occurred.", { status: 500, statusText: "Internal Server Error" })
          })
      })
    })
  )
})
