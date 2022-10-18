//Comprobar que el navegador es compatible con la API de reconocimiento de voz de Google Chrome
if (!"speechSynthesis" in window || !"SpeechSynthesisUtterance" in window || !"SpeechRecognition" in window || !"webkitSpeechRecognition" in window) {  
    showNotify({
      msn: "Tu navegador no soporta la API de reconocimiento de voz",
      show: true,
      type: "success"
    });
}

//RECONOCIMIENTO DE VOZ
function speechRecognition() {
    var recognition = new (webkitSpeechRecognition || SpeechRecognition)();
    recognition.lang = "es-ES";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();

    /* Para ver los eventos en la consola
    ["onaudiostart","onaudioend","onend","onerror","onnomatch","onresult","onsoundstart","onsoundend","onspeechend","onstart"]
    .forEach(function(eventName) {
        recognition[eventName] = function(e) {
            console.log(eventName, e);
        };
    });*/

    document.getElementById("btn").innerHTML = "Escuchando...";

    recognition.onend = function() {
        document.getElementById("btn").innerHTML = "Empezar a escuchar";
    };
    
    recognition.onresult = (event) => {
        document.getElementById("entrada").textContent = event.results[0][0].transcript;
        responde(event.results[0][0].transcript);
        narra();
    }
};

//NARRADOR
speechSynthesis.addEventListener("voiceschanged", function() {
    var voices = speechSynthesis.getVoices();
    for(var i = 0; i < voices.length ; i++) {
      document.getElementById("speech-select").innerHTML += '<option value="' + voices[i].name + '">' + voices[i].name + ' (' + voices[i].lang + ')</option>';
    }
});

function narra(){
    var text = document.getElementById("respuesta").textContent;
    var voice = document.getElementById("speech-select").value;
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == document.getElementById("speech-select").value; })[0];
    speechSynthesis.speak(utterance);
}

//ServiceWorker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}
