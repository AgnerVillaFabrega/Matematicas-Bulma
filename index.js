function loadIndex() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "./Inicio/inicio.html", true);
    xhttp.send();
}

function loadAprende() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "./Aprende/aprende.html", true);
    xhttp.send();
}
function loadOperaciones() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "./Operaciones/operacione.html", true);
    xhttp.send();
}

function operacion(){
    var op = document.getElementById("operacionSelccionada").value;
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado;

    if(op === "+"){
        resultado = suma(numero1, numero2);
    }
    else if(op === "-"){
        resultado = resta(numero1, numero2);
    }
    document.getElementById("resultado").value = resultado;
}
function resta(numero1, numero2){
    var resultado = parseInt(numero1) - parseInt(numero2);
    alert(resultado);
    return resultado;
}
function suma(numero1, numero2){
    var resultado = parseInt(numero1) + parseInt(numero2);
    alert(resultado);
    return resultado;
}

