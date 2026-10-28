
let vector1 = [10, 20, 30, 40, 50];
var cadena = '';

vector1.forEach(function(numero) {
    cadena += '<div style="background-color:#086288;color:#FFEFC4;border:5px solid #97D7FF;width:20%;">' + numero + '</div>';
    console.log(numero);
});
document.getElementById("imprimir").innerHTML = cadena;
function fechas() {
    let dias = new Array(7);
    dias[0] = "Domingo";
    dias[1] = "Lunes";
    dias[2] = "Martes";
    dias[3] = "Miercoles";
    dias[4] = "Jueves";
    dias[5] = "Viernes";
    dias[6] = "Sabado";
    var d = document.getElementById("dia").value;
    document.getElementById("impdias").innerHTML = dias[d - 1];

    let mes = new Array(12);
    mes[0] = "Enero";
    mes[1] = "Febrero";
    mes[2] = "Marzo";
    mes[3] = "Abril";
    mes[4] = "Mayo";
    mes[5] = "Junio";
    mes[6] = "Julio";
    mes[7] = "Agosto";
    mes[8] = "Septiembre";
    mes[9] = "Octubre";
    mes[10] = "Noviembre";
    mes[11] = "Diciembre";
    var m = document.getElementById("m").value;
    document.getElementById("impmes").innerHTML = mes[m - 1];
}

function cargar() {
    sueldos = new Array(5);

    for (let i = 0; i < 5; i++) {
        let valor = prompt("Captura un sueldo");
        sueldos[i] = parseFloat(valor);
        console.log(sueldos[i]);
    }
}
function mostrar() {
    document.write("<h1>Listado de Sueldos</h1>");

    for (let j = 0; j < sueldos.length; j++) {
        document.write(sueldos[j] + "<br>");
    }
}
function mostrar(){
    document.getElementById("sueldos").innerHTML="<H2>Listado de Sueldos</H2>"
    document.getElementById("sueldos").innerHTML+=sueldos;
}

function recorridoForin() {
    let vector = [20, 40, 60, 80, 100];
    var mensaje = '';
    for (let indice in vector) {
        mensaje += '<div> indice: ' + indice + ' valor: ' + vector[indice] + '</div>';
    }
    document.getElementById("impForin").innerHTML = mensaje;
}

var cortar=function(){
    let numeros=[0,1,2,3,4,5,6,7,8,9];
    var mensaje2 = '';
    for (let indice in numeros) {
        mensaje2 += '<div> indice: ' + indice + ' valor: ' + numeros[indice] + '</div>';
    }
    mensaje2+='<hr>';
    document.getElementById("impCompleto").innerHTML = mensaje2;
    numeros.splice(1,3);
    var cortado='';
    for (let indice in numeros) {
        cortado += '<div> indice: ' + indice + ' valor: ' + numeros[indice] + '</div>';
    }
    document.getElementById("impCortado").innerHTML = cortado;
}

var poner=function(){
    const verduras=['brocoli','chayote','zanahoria'];
    verduras.push('calabaza');
    verduras.push('papa','espinaca','repollo');
    console.log(verduras);
    verduras.pop();
    var verd='';

    for (let indice in verduras) {
        verd += '<div> indice: ' + indice + ' valor: ' + verduras[indice] + '</div>';
    }
    document.getElementById("impVerduras").innerHTML = verd;

}

function bidimensional_definicion(){
    arregloB=new Array(4);
    for(let i=0; i<4; i++){
        arregloB[i]=new Array(4);
    }
    llenar_arregloBi();
}

function llenar_arregloBi(){
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            arregloB[i][j]=0;
        }
    }
    imprimir_arregloBi();
}

function imprimir_arregloBi(){
    var aBi='';
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
           aBi += arregloB[i][j];
        }
        aBi+='<br>';
    }
    document.getElementById("impBidimensional").innerHTML=aBi;

}