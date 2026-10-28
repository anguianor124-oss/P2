var temperaturas = new Array(7);

function cargar() {
    for (let i = 0; i < 7; i++) {
        let valor = prompt("Captura la temperatura del dia " + (i+1));
        temperaturas[i] = parseFloat(valor);
    }
}

function mostrar() {
    var cadena = '';
    var suma = 0;
    var menor = temperaturas[0];
    var mayor = temperaturas[0];

    temperaturas.forEach(function(numero) {
        cadena = cadena + numero;
        suma = suma + numero;

        if (numero < menor) {
            menor = numero;
        }
        if (numero > mayor) {
            mayor = numero;
        }
    });

    var promedio = suma / 7;
    var sumaMenorMayor = menor + mayor;

    document.getElementById("lista-temp").innerHTML = cadena;
    document.getElementById("promedio").innerHTML = promedio + "";
    document.getElementById("menor").innerHTML = menor + "";
    document.getElementById("mayor").innerHTML = mayor + "";
    document.getElementById("sumaMM").innerHTML = sumaMenorMayor + "";
}

var temperaturas = new Array(7);

function cargar() {
    for (let i = 0; i < 7; i++) {
        let valor = prompt("Captura la temperatura del dia " + (i + 1));
        temperaturas[i] = parseFloat(valor);
    }
}

function mostrar() {
    var cadena = '';
    var suma = 0;
    var menor = temperaturas[0];
    var mayor = temperaturas[0];

    temperaturas.forEach(function(numero) {
        cadena = cadena + numero + ", ";
        suma = suma + numero;

        if (numero < menor) {
            menor = numero;
        }

        if (numero > mayor) {
            mayor = numero;
        }
    });

    var promedio = suma / 7;
    var sumaMenorMayor = menor + mayor;

    document.getElementById("lista-temp").innerHTML = cadena;
    document.getElementById("promedio").innerHTML = promedio + "";
    document.getElementById("menor").innerHTML = menor + "";
    document.getElementById("mayor").innerHTML = mayor + "";
    document.getElementById("sumaMM").innerHTML = sumaMenorMayor + "";
}

function ejercicio2Sueldo() {
    const matrizTarifas = [
        [120, 240, 210],
        [240, 280, 300],
        [400, 600, 3000]
    ];

    let puesto = parseInt(prompt("Elige el Puesto (Coordenada fila):\n0: Diseñador\n1: Programador\n2: Lider"));
    let nivel = parseInt(prompt("Elige el Nivel (Coordenada columna):\n0: Newbe\n1: Jr\n2: Sr"));
    let horas = parseFloat(prompt("Ingresa las horas trabajadas:"));

    if (isNaN(puesto) || isNaN(nivel) || isNaN(horas) ||
        puesto < 0 || puesto > 2 || nivel < 0 || nivel > 2 ||
        horas < 0) {
        alert("Coordenadas o datos invalidos.");
        return;
    }

    let tarifaPorHora = matrizTarifas[puesto][nivel];
    let totalSalario = tarifaPorHora * horas;

    let nombresPuestos = ["Diseñador", "Programador", "Lider"];
    let nombresNiveles = ["Newbe", "Jr", "Sr"];

    let salida = "<h3>Ejercicio 2: Calculo por Coordenadas</h3>";
    salida += "Puesto seleccionado: " + nombresPuestos[puesto] + " (Fila " + puesto + ")<br>";
    salida += "Nivel seleccionado: " + nombresNiveles[nivel] + " (Columna " + nivel + ")<br>";
    salida += "Tarifa encontrada en la matriz: $" + tarifaPorHora + "<br>";
    salida += "Horas trabajadas: " + horas + "<br>";
    salida += "<hr>";
    salida += "<b>Total a pagar: $" + totalSalario.toFixed(2) + "</b>";

    document.getElementById("impSueldos").innerHTML = salida;
}

function generarBloques() {
    let salida = "<h1>Ejercicio 3: Patrón del Número 8</h1>";
    salida += "<div style='font-family:monospace; font-size:20px; line-height:1.2; white-space:pre;'>";

    let patron8 = [
        " S S S ",
        " S   S ",
        " S   S ",
        " S S S ",
        " S   S ",
        " S   S ",
        " S S S "
    ];

    for (let i = 0; i < patron8.length; i++) {
        salida += patron8[i] + "<br>";
    }

    salida += "</div>";
    document.getElementById("impBloques").innerHTML = salida;
}


var alumnos = new Array(10);

function capturarAlumnos() {
    for (let i = 0; i < 10; i++) {
        alumnos[i] = prompt("Captura el nombre del alumno " + (i + 1));
    }

    mostrarAlumnos();
}

function mostrarAlumnos() {
    var cadena = '';

    for (let indice in alumnos) {
        cadena += '<div>Indice: ' + indice +
                  ' Nombre: ' + alumnos[indice] + '</div>';
    }

    document.getElementById("impAlumnos").innerHTML = cadena;
}

function cortarAlumnos() {
    let inicio = parseInt(prompt("Desde que posicion quieres eliminar (0 a 9):"));
    let cantidad = parseInt(prompt("Cuantos alumnos quieres eliminar:"));

    if (isNaN(inicio) || isNaN(cantidad) ||
        inicio < 0 || inicio > 9 ||
        cantidad < 0 || inicio + cantidad > alumnos.length) {
        alert("Posicion o cantidad invalida");
        return;
    }

    alumnos.splice(inicio, cantidad);
    mostrarAlumnos();
}

function vaciarAlumno() {
    let nombre = prompt("Captura el nombre del alumno que quieres vaciar:");
    let posicion = alumnos.indexOf(nombre);

    if (posicion != -1) {
        alumnos[posicion] = "";
    } else {
        alert("Alumno no encontrado");
    }

    mostrarAlumnos();
}

var diasAgenda = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];

var horasAgenda = new Array(7);
var eventosAgenda = new Array(7);
var descripcionesAgenda = new Array(7);

function capturarAgenda() {
    for (let i = 0; i < 7; i++) {
        horasAgenda[i] = prompt("Hora del " + diasAgenda[i] + ":");
        eventosAgenda[i] = prompt("Evento del " + diasAgenda[i] + ":");
        descripcionesAgenda[i] = prompt("Descripcion del evento:");
    }

    mostrarAgenda();
}

function mostrarAgenda() {
    var cadena = "";

    cadena += "<table class='table table-bordered table-striped'>";
    cadena += "<thead class='table-danger'>";
    cadena += "<tr><th>Dia</th><th>Hora</th><th>Evento</th><th>Descripcion</th></tr>";
    cadena += "</thead><tbody>";

    for (let i = 0; i < 7; i++) {
        cadena += "<tr>";
        cadena += "<td>" + diasAgenda[i] + "</td>";
        cadena += "<td>" + (horasAgenda[i] || "") + "</td>";
        cadena += "<td>" + (eventosAgenda[i] || "") + "</td>";
        cadena += "<td>" + (descripcionesAgenda[i] || "") + "</td>";
        cadena += "</tr>";
    }

    cadena += "</tbody></table>";

    document.getElementById("impAgenda").innerHTML = cadena;
}