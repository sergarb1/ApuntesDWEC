"use strict";



function comprobar(){
    let t1=document.getElementById("miTexto1");
    let t2=document.getElementById("miTexto2");
    
    let texto1=t1.value.split('');
    let texto2=t2.value.split('');
    
    // first call
    let result1 = texto1.sort();
    let result2 = texto2.sort();    
    
    if(result1.toString()===result2.toString()){
        alert("Son anagramas");
        return true;
    }
    else{
        alert("No son anagramas");
        return false;
    }
    
}


// Cuando se haya cargado la pagina
window.onload=function (){
    
    let f=document.getElementById("miForm");
    f.onsubmit=comprobar;
}