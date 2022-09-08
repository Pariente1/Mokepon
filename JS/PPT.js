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
}

let botonPersonajeEnemigo 

window.addEventListener('load', iniciarJuego)