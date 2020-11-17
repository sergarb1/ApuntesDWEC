// En este ejemplo usamos la API de https://jsonplaceholder.typicode.com/


function fajaxGET(num) {
    if (num <= 0 || num >= 100) {
        alert("Número de post incorrecto")
        return;
    }

   
    // Establecemos a que direccion realizar fetch
    fetch("https://jsonplaceholder.typicode.com/posts/"+num, {
        // Establecemos método GET
        method:"GET",
        //No enviamos body al ser GET
        // Indicamos en las cabeceras como es el contenido que enviamos
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    // Código a ejecutar al recibir la respuesta
    }).then(function(response){
            // Si la respuesta es correcta
            if (response.ok) {
            // Codigo para llamar funcion / hacer funcion anonima,
            // que gestione codigo de la respuesta
            // en este ejemplo, "respuesta" contiene JSON 
            //devuelto por el servidor
                response.json().then( function (respuesta) {
                    let miDiv=document.getElementById('div');
                    miDiv.innerHTML = '';
                    miDiv.innerHTML += `<h2>UserID: ${respuesta.userId} </h2>
                    <h3>PostID:  ${respuesta.id}</h3>
                    <strong>Título:  ${respuesta.title}</strong><br>
                    <strong>Cuerpo:</strong> ${respuesta.body}`
                });
            }
    });


}
function fajaxPOST(msg) {



    // Establecemos a que direccion realizar fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
        // Establecemos método POST
        method:"POST",
        // Enviamos body con formato JSON
        body: JSON.stringify({
            title: 'Un título cualquiera', body: msg, userId: 1,
        }),
        // Indicamos en las cabeceras como es el contenido que enviamos
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    // Código a ejecutar al recibir la respuesta
    }).then(function(response){
            // Si la respuesta es correcta
            if (response.ok) {
            // Codigo para llamar funcion / hacer funcion anonima,
            // que gestione codigo de la respuesta
            // en este ejemplo, "respuesta" contiene JSON 
            //devuelto por el servidor
                response.json().then( function (respuesta) {
                    let miDiv=document.getElementById('div');
                    miDiv.innerHTML = '';
                    miDiv.innerHTML += `<h2>UserID: ${respuesta.userId} </h2>
                    <h3>PostID:  ${respuesta.id}</h3>
                    <strong>Título:  ${respuesta.title}</strong><br>
                    <strong>Cuerpo:</strong> ${respuesta.body}`
                });
            }
    });
}

window.onload = () => {
    const btnGet = document.getElementById('btnGET');
    const btnPost = document.getElementById('btnPOST');
    const div = document.getElementById('div');
    const txtGET = document.getElementById('txtGET');
    const txtPOST = document.getElementById('txtPOST');
    const select = document.getElementById('select');
    const divGet = document.getElementById('divGET');
    const divPost = document.getElementById('divPOST');

    select.onchange = () => {
        switch (select.value) {
            case 'get':
                divGet.hidden = false;
                divPost.hidden = true;
                div.innerHTML = '';
                break;
            case 'post':
                divGet.hidden = true;
                divPost.hidden = false;
                div.innerHTML = '';
                break;
            default:
                divGet.hidden = true;
                divPost.hidden = true;
                div.innerHTML = '';
        }
    }
    btnGet.onclick = () => {
        fajaxGET(txtGET.value);
    }
    btnPost.onclick = () => {
        fajaxPOST(txtPOST.value);
    }
}