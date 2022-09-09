let ataqueJugador   

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje")
    botonPersonajeJugador.addEventListener('click', seleccionarMascotaPersonaje)

    let botonPiedra = document.getElementById("piedra")
    botonPiedra.addEventListener("click", ataquePiedra)
    let botonPapel = document.getElementById("papel")
    botonPapel.addEventListener("click", ataquePapel)
    let botonTijera = document.getElementById("tijera")
    botonTijera.addEventListener("click", ataqueTijera)
    let botonLagarto = document.getElementById("lagarto")
    botonLagarto.addEventListener("click", ataqueLagarto)
    let botonSpock = document.getElementById("spock")
    botonSpock.addEventListener("click", ataqueSpock)
}

function seleccionarMascotaPersonaje(){
    let inputLeonard = document.getElementById("Leonard")
    let inputPenny = document.getElementById("Penny")
    let inputSheldon = document.getElementById("Sheldon")
    let spanPersonajeJugador = document.getElementById("personaje-jugador")

    if (inputLeonard.checked){
        spanPersonajeJugador.innerHTML = "Leonard"
    } else if (inputPenny.checked){
        spanPersonajeJugador.innerHTML = "Penny"
    } else if (inputSheldon.checked){
        spanPersonajeJugador.innerHTML = "Sheldon"
    } else {
        alert("Debes de seleccionar un personaje")
    }

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let enemigoAleatorio = random(1,3)
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if (enemigoAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = 'Leonard'
    } else if (enemigoAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = 'Penny'
    } else {
        spanPersonajeEnemigo.innerHTML = 'Sheldon'
    }
}

function ataquePiedra(){
    ataqueJugador = 'Piedra'
    alert('Seleccionaste ataque 1')
}

function ataquePapel(){
    ataqueJugador = 'Papel'
    alert('Seleccionaste ataque 2')
}

function ataqueTijera(){
    ataqueJugador = 'Tijera'
    alert('Seleccionaste ataque 3')
}

function ataqueLagarto(){
    ataqueJugador = 'Lagarto'
    alert('Seleccionaste ataque 4')
}

function ataqueSpock(){
    ataqueJugador = 'Spock'
    alert('Seleccionaste ataque 5')
}



window.addEventListener('load', iniciarJuego)