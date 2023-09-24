let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let mascotaJugador = document.getElementById("seleccionar-mascota")
    mascotaJugador.addEventListener("click", seleccionMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego())

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua())

    let botonTierra =document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra())
}

function seleccionMascotaJugador() {
    let spanMascota = document.getElementById("mascota-jugador")
    if (document.getElementById("Hipodoge").checked) {
        spanMascota.innerHTML = "Hipodoge"
    } else if (document.getElementById("Capipepo").checked) {
        spanMascota.innerHTML = "Capipepo"
    } else if (document.getElementById("Ratigueya").checked) {
        spanMascota.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let mascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        mascotaEnemigo.innerHTML = "Capipepo"
    } else {
        mascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "FUEGO"
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = "AGUA"
        } else {
            ataqueEnemigo = "TIERRA"
        }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)