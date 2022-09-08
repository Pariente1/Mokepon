function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje")
botonPersonajeJugador.addEventListener('click', seleccionarMascotaPersonaje)
}

function seleccionarMascotaPersonaje(){
    let inputLeonard = document.getElementById("Leonard")
    let inputPenny = document.getElementById("Penny")
    let inputSheldon = document.getElementById("Sheldon")
    
    if (inputLeonard.checked){
        alert("Seleccionaste a Leonard")
    } else if (inputPenny.checked){
        alert("Seleccionaste a Penny")
    } else if (inputSheldon.checked){
        alert("Seleccionaste a Sheldon")
    } else {
        alert("Debes de seleccionar un personaje")
    }
}

let botonPersonajeEnemigo 

window.addEventListener('load', iniciarJuego)