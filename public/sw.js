// Vanilla JS Service Worker, see https://docs.pwabuilder.com/#/home/sw-intro for info on service worker basics.

const NETWORK_TIMEOUT_MS = 500
const RUNTIME = 'pwa-starter'

// See claiming clients during activate documentation here: https://docs.pwabuilder.com/#/home/sw-intro?id=claiming-clients-during-the-activate-event
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
    const cached = caches.match(event.request)
    const fetched = fetch(event.request, { cache: 'no-store' })
    const fetchedCopy = fetched.then(resp => resp.clone())

    const delayCacheResponse = new Promise((resolve) => {
        setTimeout(resolve, NETWORK_TIMEOUT_MS, cached);
    })

    event.respondWith(
    Promise.race([fetched.catch(_ => cached), delayCacheResponse])
        .then(resp => resp || fetched)
        .catch(_ => { /* eat any errors */ })
    )

    // Update the cache with the version we fetched (only for ok status)
    event.waitUntil(
    Promise.all([fetchedCopy, caches.open(RUNTIME)])
        .then(([response, cache]) => response.ok && cache.put(event.request, response))
        .catch(_ => { /* eat any errors */ })
    )
})