const version = '0.0.2'

self.addEventListener('install', event => {
    console.log('Install' + version)
    return self.skipWaiting();
})

self.addEventListener('activate', event => {
    console.log('activate')
    return self.clients.claim();
})

self.addEventListener("fetch", event=> {
   
    const requestUrl = new URL(
        event.request.url
      )
      console.log(requestUrl)
})