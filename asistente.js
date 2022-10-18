var chistes= [
    "Me sacaron del grupo de WhatsApp de paracaidismo. Se ve que no caía bien.",
    "¿Qué le dice un jardinero a otro? Seamos felices mientras podamos.",
    "Eliminar correos no deseados es muy fácil: spam comido.",
    "¿Cómo se les llama a 2 zombis que hablan distintas lenguas? Zombilingües.",
    "Una vez conté un chiste químico, pero no hubo reacción.",
    "Un león se comió un jabón. Y ahora es puma.",
    "¿Qué hace una vaca con los ojos cerrados? Leche concentrada.",
    "Si los ciempiés tienen 100 pies... ¿entonces los piojos tienen 3,14 ojos?",
    "¿Por qué la gallina cuida tanto a sus pollitos? Porque le costó un huevo tenerlos.",
    "En Hawái no te hospedan: te alohan."
];

window.onload = function() {
    reloj();
    saluda();
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
    else if(m.includes("chiste") || m.includes("chistecito") || m.includes("chistazo")){ //Chistes aleatorios
        var n= Math.floor(Math.random() * 10);
        console.log(n);
        document.getElementById("respuesta").textContent = chistes[n];
    }
    else if(m.includes("que hora es") || m.includes("qué hora es") || m.includes("dime la hora")) { 
        document.getElementById("respuesta").textContent = "Son las "+ getHora() + " con " + getMinuto() + " minutos.";
    }
    //El resto de preguntas las buscará en google.
    else if(m.includes("qué") || m.includes("que") || m.includes("cómo") || m.includes("como") || m.includes("quíen") || m.includes("quien") ||
        m.includes("cuándo") || m.includes("cuando") || m.includes("dónde") ||  m.includes("donde") || m.includes("significado de") || 
        m.includes("definición de") || m.includes("cual") || m.includes("cuál") || m.includes("cuales") || m.includes("cuáles") ||
        m.includes("cuanto") || m.includes("cuánto") || m.includes("cuantos") || m.includes("cuántos") || m.includes("cuanta") || 
        m.includes("cuánta") || m.includes("cuantas") || m.includes("cuántas") || m.includes("quiénes") || m.includes("quienes")) {

        window.open(`https://www.google.com/search?q=${m.replace(" ", "+")}`, "_blank");
        document.getElementById("respuesta").textContent = "Estoy buscando información sobre " + m + " en google.";
    }
    else {
        document.getElementById("respuesta").textContent = "No te he entendido, lo siento.";
    }
}