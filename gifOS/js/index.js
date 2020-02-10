const min = 10000;
const max = 500000;
let counter = Math.floor(Math.random() * (+max - +min)) + +min;
document.getElementById("random").innerHTML =
    "¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: " +
    counter;

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsEl = document.getElementById("results");

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const q = searchInput.value;
    search(q);
});

function search(q) {
    const apikey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

    fetch(path)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            console.log(json.data[0].images.fixed_height.url);
            let resultsHTML = "";

            json.data.forEach(function(obj) {
                console.log(obj);

                const url = obj.images.fixed_height.url;
                const height = obj.images.fixed_height.height;
                const title = obj.title;

                resultsHTML += `<img
                class="item"
            src="${url}"
            height="${height}"
            alt="${title}"
            >`;
            });
            resultsEl.innerHTML = resultsHTML;
        })
        .catch(function(err) {
            console.log(err.message);
        });
}

let temas = document.getElementById("themes");
let logo = document
    .getElementsByClassName("logo")[0]
    .getElementsByTagName("img")[0];
let form = document.getElementById("search-form");
//let rand = document.getElementsById("random");

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./images/gifOF_logo_dark.png";
    form.id = "search-form-o";
    // rand.id = "rand-o";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "white";
    logo.src = "./images/gifOF_logo.png";
    form.id = "search-form";
    // rand.id = "rand-o";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}
