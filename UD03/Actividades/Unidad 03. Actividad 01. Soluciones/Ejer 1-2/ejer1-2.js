// Usamos modo estricto
"use strict";


function fecha() {
    let d = new Date();
    alert(d.toUTCString());


}


setTimeout("fecha();", 20000);