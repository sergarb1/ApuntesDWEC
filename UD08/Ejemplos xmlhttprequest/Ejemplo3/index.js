function fajaxGET(num) {
    if (num <= 0 || num >= 100) {
        alert("Número de post incorrecto")
        return;
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = comportamiento;

    ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + num);
    ajax.send();

}
function fajaxPOST(msg) {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = comportamiento;

    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    ajax.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    ajax.send(JSON.stringify({
        title: 'Un título cualquiera', body: msg, userId: 1,
    }));

}
function comportamiento() {
    const ajax = this;
    if (ajax.readyState == 1)
        div.innerText = 'Consultando la base de datos...';

    if (ajax.readyState == 2)
        div.innerText += '...';

    if (ajax.readyState == 3)
        div.innerText += '...';

    if (ajax.readyState == 4) {
        //El GET contest con 200: solicitud exitosa
        //El POST, como es para crear un nuevo recurso, responde con un 201: recurso creado con éxito
        if (ajax.status == 200 || ajax.status == 201) {
            let response = JSON.parse(ajax.responseText);
            div.innerHTML = '';
            div.innerHTML += `<h2>UserID: ${response.userId} </h2>
            <h3>PostID:  ${response.id}</h3>
            <strong>Título:  ${response.title}</strong><br>
            <strong>Cuerpo:</strong> ${response.body}`
        }
    }
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