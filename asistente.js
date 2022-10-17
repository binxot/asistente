var dia = new Date(), 
 hora = dia.getHours();

window.onload = function() {
    getHora();
    saluda();
}

function saluda() {
    if(hora >= 6 && hora < 12) {
        document.getElementById("respuesta").textContent = "Buenos dias, ¿en que puedo ayudarte?";
    }else if(hora >= 12 && hora <= 21) {
        document.getElementById("respuesta").textContent = "Buenas tardes,  ¿en que puedo ayudarte?";
    }else {
        document.getElementById("respuesta").textContent = "Buenas noches, ¿en que puedo ayudarte?";
    }
}

function responde(m){

    if(m.includes("cómo estás") || m.includes("qué tal") ) {
        document.getElementById("respuesta").textContent = "Bien, gracias por preguntar";
    }else if(m.includes("hola") || m.includes("buenos días") || m.includes("buenas tardes") || m.includes("buenas noches")) {
        saluda();
    }
    else if(m.includes("gracias") || m.includes("muchas gracias") || m.includes("gracias por todo")) {
        document.getElementById("respuesta").textContent = "De nada, es un placer ayudarte.";
    }
    else if(m.includes("adiós") || m.includes("hasta luego") || m.includes("hasta mañana") || m.includes("hasta pronto")) {
        document.getElementById("respuesta").textContent = "Hasta luego, un placer ayudarte.";
    }else if(m.includes("quién es tu creador") || m.includes("quién te ha creado") || m.includes("quién te ha programado") || m.includes("quién es tu padre") || m.includes("quién es tu madre")) {
        document.getElementById("respuesta").textContent = "Mi creador es Francis, un desarrollador de software que vive en Paradas.";
    }//Abre ...
    else if(m.includes("abre") || m.includes("abrir")) {
        var abre = m.includes("abre")? m.split("abre")[1].trim() : m.split("abrir")[1].trim(); 
        console.log(abre);

        switch(abre) {
            case "Google": 
                window.open("https://www.google.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Google"; 
                break;
            case "YouTube":
                window.open("https://www.youtube.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo YouTube";
                break;
            case "Facebook":
                window.open("https://www.facebook.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Facebook";
                break;
            case "Twitter":
                window.open("https://www.twitter.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Twitter";
                break;
            case "Instagram":
                window.open("https://www.instagram.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Instagram";
                break;
            case "WhatsApp":
                window.open("https://web.whatsapp.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo WhatsApp";
                break;
            case "Gmail":
                window.open("https://mail.google.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Gmail";
                break;
            case "Tik Tok":
                window.open("https://www.tiktok.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Tik Tok";
                break;
            case "Netflix":
                window.open("https://www.netflix.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Netflix";
                break;
            case "Spotify":
                window.open("https://open.spotify.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Spotify";
                break;
            case "Amazon":
                window.open("https://www.amazon.com", "_blank");
                document.getElementById("respuesta").textContent = "Abriendo Amazon";
                break;
            default:
                window.open("https://www.google.com/search?q="+abre, "_blank");
                document.getElementById("respuesta").textContent = "Abriendo "+abre;
                break;
                
        }
    }
    //El resto de preguntas las buscará en google.
    else if(m.includes("qué") || m.includes("cómo") || m.includes("quíen") ||  m.includes("cuándo") ||
            m.includes("dónde") || m.includes("por qué") || m.includes("significado de") || m.includes("definición de")) {
        window.open(`https://www.google.com/search?q=${m.replace(" ", "+")}`, "_blank");
        document.getElementById("respuesta").textContent = "Estoy buscando información sobre " + m + " en google.";
    }
    else {
        document.getElementById("respuesta").textContent = "No te he entendido, lo siento.";
    }
}