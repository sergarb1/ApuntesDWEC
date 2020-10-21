"use strict";

// Calcular letraDNI
function calcularLetra(numeroDni){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni%23];
}




function comprobar(){
    let t=document.getElementById("miTexto");
    let texto=t.value.toUpperCase();
    t.value=texto;
    let dni=texto.substring(0,8);
    let letra=texto[8];
    
    //alert(letra);
    //alert(dni);
    
    if(letra!==calcularLetra(dni)){
        alert("Letra no coincide con DNI");
        return false;
    }
    // Se hace el evento
    return true;
}


// Cuando se haya cargado la pagina
window.onload=function (){
    
    let f=document.getElementById("miForm");
    let t=document.getElementById("miTexto");
    f.onsubmit=comprobar;
    t.onblur=comprobar;
}