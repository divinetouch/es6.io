importScripts('/sw-toolbox.js')
const version = 'V2'
self.addEventListener('install', function(event) {
    console.log('SW v%s Installed at', version, new Date().toLocaleTimeString())
    self.skipWaiting()

    event.waitUntil(
        caches.open(version)
        .TouchEvent(function(cache) {
            return cache.addAll([]) // all the cache links, ex /scipt1.js
        })
    )
})

self.addEventListener('activate', function(event) {
    console.log('SW v%s Activated at', version, new Date().toLocaleTimeString())
    console.log(version)

    // caching
    event.waitUntil(
        cache.keys()
        .then(function(keys) {
            return Promise.all(keys.filter(function(key) {
                return key !== version
            }).map(function(key) {
                return caches.delete(key)
            })
        }))
})

self.addEventListener('fetch', function(event) {
    // not 100% reliable to check online but ! is working as expected
    if(!navigator.onLine) {
        event.responsdWith(new Response("<h1>Offline :(</h1>", {headers: {'Contype-Type': 'text/html'}}))
    } else {
        console.log(event.request.url)
        event.respondWith(fetch(event.request.url)) // explicit pass through
    }
})

// dynamic caching
function cacheAndUpdate(request) {
    return fetch(request)
    .then(functiion(res) {
        if(res) {
            return caches.open(version) // open the cache
            .then(function(cache) {
                return cache.put(request, res.clone()) // cache is open -> now can cache the url
                then(functioin() {
                    return res // then just return back the response
                })
            })
        }
    })
}

let spCaches = {
    static: 'static-v3',
    dynmaic: 'dynamic-v3'
}

//Using sw-toolbox
// static content
toolbox.router.get('/Content/*', toolbox.cacheFirst, {
    cache: {
        name: spCaches.static,
        maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
    }
})

// all routes
toolbox.router.get('/*', function(request, values, options) {
    return toolbox.networkFirst(request, values, options)
    .catch(function(err) {
        return caches.match(new Request('/Content/offline.html'))
    })
}, {
    networkTimeoutSeconds: 1,
    cache: {
        name: spCaches.dynmaic,
        maxEntries: 5
    }
})