
function mostrar(cadena) {
    let cadenaPartida = cadena.split(":");
    alert("CP: " + cadenaPartida[4]);
    alert("Apellidos: " + cadenaPartida[1]);
    alert("Email: " + cadenaPartida[3]);
    alert("Servidor: " + cadenaPartida[3].split("@")[1]);

}


let c = prompt("Mete cadena", "nonombre:apellidos:telefono:email@servidor:codigopostal");

mostrar(c);