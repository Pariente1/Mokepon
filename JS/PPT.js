function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje")
botonPersonajeJugador.addEventListener('click', seleccionarMascotaPersonaje)
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



window.addEventListener('load', iniciarJuego)