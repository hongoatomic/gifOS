let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByTagName("img")[0];
let form = document.getElementById("search-form");
let counter = document.getElementById("counter");
let misgifs = document.getElementById("misgifs");
let myNodelist = document.getElementsByTagName("button");
let hidden = document.querySelector("select#themes");
let anchor = document.getElementsByTagName("a");
let lupa = document.querySelector("img.lupa");
// let searchSubmit = document.getElementsByClassName("submit-search")[0];
// let titleGif = document.querySelector("#random-gif").querySelector("#titlegif");
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
    hidden.style.color = "#ffffff";
    hidden.style.backgroundColor = "#EE3EFE";
    lupa.src = "./assets/lupa_light.svg";

    // titleGif.id = "titlegif-o";
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
    // searchSubmit.className = "submit-search-o";
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
    hidden.style.color = "#110038";
    hidden.style.backgroundColor = "#F7C9F3";
    lupa.src = "./assets/lupa_inactive.svg";
    // titleGif.id = "titlegif";
    let a;
    anchor;
    for (a = 0; a < anchor.length; a++) {
        anchor[a].style.color = "#110038";
    }
    let i;
    myNodelist;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.backgroundColor = "#4180F6";
        myNodelist[i].style.color = "black";
    }
    // searchSubmit.className = "submit-search";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}
