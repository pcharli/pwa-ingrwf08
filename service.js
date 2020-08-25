const version = '0.0.2'

self.addEventListener('install', event => {
    console.log('Install' + version)
    return self.skipWaiting();
})

self.addEventListener('activate', event => {
    console.log('activate')
    return self.clients.claim();
})

// Mise en cache

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if(workbox) {
    console.log('yay Workbox is loaded')

    workbox.precaching.precacheAndRoute([
        {
            url: "index.html"
        },
        {
            url: "style.css"
        },
        {
            url: "images/logo.png"
        },
        {
            url: "main.js"
        },
        {
            url: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css"
        }
    ])
}
else {
    console.log("alert", "error Workbox")
}


/*self.addEventListener("fetch", event=> {
   
    const requestUrl = new URL(
        event.request.url
      )
      console.log(requestUrl)
})*/