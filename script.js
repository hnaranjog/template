function changeMode() {
    let checkbox = document.getElementById("btn-mode");
    let body = document.body;

    if(checkbox.checked){
        console.log(checkbox);
        console.log(body);
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

//document.getElementById("btn-mode").addEventListener("change", changeMode);

var datos = {
    "Nombre": "Juan",
    "Edad": 30,
    "Ciudad": "Barcelona",
    "País": "España"
};

function crearTabla(json) {
    var tabla = document.getElementById("miTabla");
    var encabezados = tabla.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
    var cuerpoTabla = tabla.getElementsByTagName('tbody')[0];


    encabezados.innerHTML = '';
    cuerpoTabla.innerHTML = '';


    for (var clave in json) {
        var th = document.createElement('th');
        th.textContent = clave;
        encabezados.appendChild(th);
    }


    var fila = cuerpoTabla.insertRow();
    for (var clave in json) {
        var celda = fila.insertCell();
        celda.textContent = json[clave];
    }
}

crearTabla(datos);

