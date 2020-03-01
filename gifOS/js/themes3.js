let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByClassName("go-home")[0]
    .getElementsByTagName("img")[1];
let gifBox = document.getElementById("captura-gif");
let streamCamara = document.getElementById("create-gif-description");
let counter = document.getElementById("counter");

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    counter.id = "counter-o";
    gifBox.id = "captura-gif-o";
    streamCamara.id = "create-gif-description";
    misgifs.style.color = "#FFFFFF";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFF4FD";
    logo.src = "./assets/gifOF_logo.png";
    counter.id = "counter";
    gifBox.id = "captura-gif";
    streamCamara.id = "create-gif-description-o";
    misgifs.style.color = "#110038";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}

//FUNCION COUNTER VISITORS

let n = localStorage.getItem("on_load_counter");
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.getElementById("counter").innerHTML =
    "¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: " +
    n;
