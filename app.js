
let nombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo"); 
    const lista = document.getElementById("listaAmigos"); 
    const nombre = input.value.trim(); 

    if (nombre) {
        nombres.push(nombre); 
        input.value = ""; 

        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li); 
    } else {
        alert("Por favor, ingresa un nombre válido."); 
    }
}


//   ----------------------------------------------------------------------------------

function sortearAmigo() {
    const resultado = document.getElementById("resultado"); 
    resultado.innerHTML = ""; 

    if (nombres.length < 2) {
        alert("Se necesitan al menos 2 nombres para realizar el sorteo.");
        return;
    }

    //  sorteo arbitrario
    const indiceP = Math.floor(Math.random() * nombres.length);
    const ganador = nombres[indiceP];

    const li = document.createElement("li");
    li.textContent = `${ganador} es el ganador. 🎁`;
    resultado.appendChild(li);
}
