let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByClassName("go-home")[0]
    .getElementsByTagName("img")[1];
// let gifBox = document.getElementById("captura-gif-title");
let counter = document.getElementById("counter");
let hidden = document.querySelector("select#themes");
let crearGuifos = document.getElementById("crear-guifos");

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    counter.id = "counter-o";
    crearGuifos.id = "crear-gifos-o";
    hidden.style.color = "#ffffff";
    hidden.style.backgroundColor = "#EE3EFE";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFF4FD";
    logo.src = "./assets/gifOF_logo.png";
    counter.id = "counter";
    crearGuifos.id = "crear-gifos";
    hidden.style.color = "#110038";
    hidden.style.backgroundColor = "#F7C9F3";
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

//FUNCION MOSTRAR GIFS GUARDADOS
miGif = [];
let resultsGifs = document.getElementById("resultadosmisgifs");

function misGuifos() {
    let img = "";
    for (let i = 0; i < localStorage.length; i++) {
        let key = "myGifos-" + i;
        miGif[i] = localStorage.getItem(key);
        img += '<img src="' + miGif[i] + '">';
    }
    resultsGifs.innerHTML = img;
}
misGuifos();
console.log(miGif);
