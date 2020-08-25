//ajax
axios.get("https://api.punkapi.com/v2/beers")
.then (response => {
    let ul = document.querySelector(".beers")
    let beers = ""
    response.data.forEach(beer => {
        beers += `<li>${beer.name}</li>`
    })
    ul.innerHTML = beers
})

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service.js')
        .then(function(reg) {
            console.log('notify', 'Service Worker is starting '+ reg)
        })
        .catch( error => {
            console.log('alert', 'Erreur de serviceWorker with ' + error)
        })
    })
}
else {
    console.log('alert', 'Votre navigateur n\'est pas compatible avec nos services')
}

const installBtn = document.querySelector('.installer')

let defferedPrompt

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    defferedPrompt = e
    installBtn.style.display = "block"
})

installBtn.addEventListener("click", e => {
    installBtn.style.display = 'none'
    defferedPrompt.prompt()

    defferedPrompt.userChoice.then(choiceResult => {
        if(choiceResult.outcome === 'accepted') {
            console.log('installation réussie')
        }
        else {
            console.log('installation refusée')
        }
        defferedPrompt = null
    })
})