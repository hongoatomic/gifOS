let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByTagName("img")[0];
let form = document.getElementById("search-form");
let counter = document.getElementById("counter");
let misgifs = document.getElementById("misgifs");

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    form.id = "search-form-o";
    counter.id = "counter-o";
    misgifs.style.color = "#FFFFFF";
    misgifs.id = "misgifs-o";
}

// function bigImg(x) {
//     x.style.border = "solid #fffff";
// }

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFF4FD";
    logo.src = "./assets/gifOF_logo.png";
    form.id = "search-form";
    counter.id = "counter";
    misgifs.style.color = "#110038";
    misgifs.id = "misgifs";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}
