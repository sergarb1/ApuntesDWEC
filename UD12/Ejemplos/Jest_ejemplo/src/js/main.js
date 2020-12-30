import {suma} from  "./suma.js";

window.onload = function(){

    let miDiv=document.getElementById("miDiv");
    miDiv.innerHTML=suma(4,5);
}