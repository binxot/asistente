function getHora() {
    var d = new Date();
    var hora = d.getHours();
    var minuto = d.getMinutes();
    var segundo = d.getSeconds();

    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    if (minuto < 10) {
        minuto = "0" + minuto;
    }

    document.getElementById("hora").innerHTML = hora + ":" + minuto + ":" + segundo;
    setTimeout("getHora()",1000);
}