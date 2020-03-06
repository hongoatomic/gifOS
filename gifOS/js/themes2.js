let temas = document.getElementById("themes");
let logo = document.getElementById("logoIndex");
let streamCamara = document.getElementById("create-gif-description");
let container = document.getElementsByClassName("container-menu")[0];
let counter = document.getElementById("counter");
let misgifs = document.getElementById("misgifs");
let titleVideo = document.getElementById("video-frame");
let esperaSubida = document.getElementById("captura-gif-title");
let subiendoGif = document.getElementById("captura-gif");
let capturaTitle = document.getElementById("captura-exito-title");
let exitoContainer = document.getElementById("captura-exito");
let myNodelist = document.getElementsByTagName("button");
let hidden = document.querySelector("select#themes");
let anchor = document.getElementsByTagName("a");
let camera = document.querySelector("img.camara-icon");
let crearGifs = document.getElementById("crear-guifos");
let videoFrame = document.getElementById("video-frame");
temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    counter.id = "counter-o";
    streamCamara.id = "create-gif-description-o";
    container.className = "container-menu-o";
    misgifs.style.color = "#FFFFFF";
    misgifs.id = "misgifs-o";
    titleVideo.id = "video-frame-o";
    titleVideo.className = "style-frame-o";
    esperaSubida.id = "captura-gif-title-o";
    subiendoGif.id = "captura-gif-o";
    capturaTitle.id = "captura-exito-title-o";
    exitoContainer.id = "captura-exito-o";
    hidden.style.color = "#ffffff";
    hidden.style.backgroundColor = "#EE3EFE";
    camera.src = "./assets/camera_light.svg";
    let a;
    anchor;
    for (a = 0; a < anchor.length; a++) {
        anchor[a].style.color = "white";
    }
    let i;
    myNodelist;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.backgroundColor = "#EE3EFE";
        myNodelist[i].style.color = "white";
    }
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFF4FD";
    logo.src = "./assets/gifOF_logo.png";
    counter.id = "counter";
    streamCamara.id = "create-gif-description";
    container.className = "container-menu";
    misgifs.style.color = "#110038";
    misgifs.id = "misgifs";
    titleVideo.id = "video-frame";
    titleVideo.className = "style-frame";
    esperaSubida.id = "captura-gif-title";
    subiendoGif.id = "captura-gif";
    capturaTitle.id = "captura-exito-title";
    exitoContainer.id = "captura-exito";
    hidden.style.color = "#110038";
    hidden.style.backgroundColor = "#F7C9F3";
    camera.src = "./assets/camera.svg";
    let a;
    anchor;
    for (a = 0; a < anchor.length; a++) {
        anchor[a].style.color = "#110038";
    }
    let i;
    myNodelist;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.backgroundColor = "#f7c9f3";
        myNodelist[i].style.color = "black";
    }
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
