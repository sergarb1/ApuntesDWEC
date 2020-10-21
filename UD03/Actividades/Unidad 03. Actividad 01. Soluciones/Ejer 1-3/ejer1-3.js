// Usamos modo estricto
"use strict";

// Calcular letraDNI
function letraDNI(numeroDni) {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni % 23];
}


let l = prompt("Dime la letra", "A");
// Contaremos cuantos tienen  la letra buscada
let numero = 0;
let i;
let miArray = [];

for (i = 1; i <= 999; i++) {

    // Si coinciden las letras, ya tenemos el numero
    if (l === letraDNI(i)) {
        numero++;
        miArray.push(i);
    }
}
alert("Hay " + numero + " dnis hasta 999 con la letra " + l);
alert(miArray);
