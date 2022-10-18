var d = new Date();
var hora = d.getHours();
var minuto = d.getMinutes();

function reloj() {
    d = new Date();
    hora = d.getHours();
    minuto = d.getMinutes();
    var segundo = d.getSeconds();

    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    if (minuto < 10) {
        minuto = "0" + minuto;
    }

    document.getElementById("hora").innerHTML = hora + ":" + minuto + ":" + segundo;
    setTimeout("reloj()",1000);
}

function getHora() {
    return hora;
}

function getMinuto() {
    return minuto;
}

function saluda() {

    if(hora >= 6 && hora < 12) {
        document.getElementById("respuesta").textContent = "Buenos días, ¿en qué puedo ayudarte?";
    }else if(hora >= 12 && hora <= 21) {
        document.getElementById("respuesta").textContent = "Buenas tardes,  ¿en qué puedo ayudarte?";
    }else {
        document.getElementById("respuesta").textContent = "Buenas noches, ¿en qué puedo ayudarte?";
    }
}