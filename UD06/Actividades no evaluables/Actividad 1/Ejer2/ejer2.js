"use strict";


function comprobar(){
    // Lista de servidores
    let servidores=["miservidor.com","tuservidor.com"];
    
    let t=document.getElementById("miTexto");
    
    let texto=t.value;
    let soloServidor=texto.substring(texto.indexOf("@")+1);
    
    // Generamos expresion regular de cualquier cosa, @, cualquier cosa, . , cualquier cosa
    let expresionRegular=new RegExp(".+[@].+[.].+");
    
    if(!expresionRegular.test(texto)){
        alert("Formato email incorrecto");
        return false;
    }
    
    
    // Buscamos en la lista de servidores
    for(let i=0;i<servidores.length;i++){
        if(soloServidor===servidores[i]){
            // Encontrado un servidor bueno
            return true;
        }
    }
    
    alert("Formato correcto, pero servidor no en la lista");
    // no esta en la lista
    return false;
}


// Cuando se haya cargado la pagina
window.onload=function (){
    
    let f=document.getElementById("miForm");
    f.onsubmit=comprobar;
}