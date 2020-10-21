// Usamos modo estricto
"use strict";

function esPrimo(numero) {


    // Ponemos el var para que sea local, ya que hay una variable fuera que se llama igual
    let i;
    let primo = true;
    // Dividimos por 2, para ver si no es primo...
    if (numero === 2) {
        // Es primo, no hacemos nada y devolvemos true;
        return true;
    }
    else if (numero < 2) {
        return false;
    }
    else if (numero % 2 === 0) {

        return false;
    }
    else {
        for (i = 3; i <= Math.sqrt(numero); i += 2) {
            // Detectamos si el numero es divisible por alguno
            // Si lo es, no es primo
            if (numero % i === 0) {
                // Si ya sabemos que no es primo, paramos
                primo = false;
                break;
            }

        }
    }

    return primo;
}



function esPalindromo(cadena) {


    // Para que no distinga mayusculas y minusculas, pasamos todo a mayusculas
    cadena = cadena.toUpperCase();

    // Obtenemos posicion final de vector de cadenas
    // La inicial sabemos siempre que es 0
    var fin = cadena.length - 1;
    var i, j;

    for (i = 0, j = fin; j >= i; i++, j--) {
        // Comprobamos si no es palindromo. Si detectamos no lo es,
        // devolvemos false
        if (cadena[i] !== cadena[j]) {
            return false;
        }
    }

    // Si no hemos detectado que no es palindromo, es que lo es
    return true;

}

let miArray = new Array();
let x;
let numeroProbar = 0;

for (x = 2; x <= 100000; x++) {
    // Recordamos el palindromo trabaja con cadenas
    if (esPalindromo(x.toString()) && esPrimo(x)) {
        numeroProbar++;
        miArray.push(x);
    }
}
alert("El numero es : " + numeroProbar);
alert(miArray.join(" ; "));
