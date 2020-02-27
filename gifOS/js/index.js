const min = 10000;
const max = 500000;
let counter = Math.floor(Math.random() * (+max - +min)) + +min;
document.getElementsByClassName("random")[0].innerHTML =
    "¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: " +
    counter;
// funcion seccion trending
let apiKey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
const trending = fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`
)
    .then(response => response.json())
    .then(json => {
        json.data.map(gif => {
            let img = document.createElement("img");
            img.src = gif.images.fixed_height.url;
            document.getElementById("trending").appendChild(img);
        });
    })
    .catch(error => (document.body.appendChild = error));

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsEl = document.getElementById("results");
const trendingEl = document.getElementById("trending");
const randomGif = document.getElementById("random-gif");
const fakeInput = document.querySelector("h3.fakeInput");
const fakeInput2 = document.querySelector("h3.fakeInput:last-of-type");

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const q = searchInput.value;
    search(q);
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    fakeInput.innerHTML = "";
    fakeInput2.innerHTML = "";
    fakeInput.style.border = "none";
    fakeInput2.style.border = "none";

    let resultadoSugerido = document.getElementById("resultadoSugerido");
    let resultadosSugeridos = ["cat", "dog", "unicorn", "mouse"];
    let aleatorio = Math.round(Math.random() * 4);

    resultadoSugerido.innerHTML =
        ` <input
            id="search-input"
            type="text"
            value="${resultadosSugeridos[aleatorio]}"
            autocomplete="off"
            disabled
        />` +
        ` <input
        id="search-input"
        type="text"
        value="Resultado sugerido"
        autocomplete="off"
        disabled
    />` +
        ` <input
    id="search-input"
    type="text"
    value="Resultado sugerido"
    autocomplete="off"
    disabled
/>`;
});
// funcion search
function search(q) {
    let apikey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=20`;

    fetch(path)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            console.log(json.data[0]);
            let resultsHTML = "";

            json.data.forEach(function(obj) {
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
let rand = document.getElementById("random");
let misgifs = document.getElementsByClassName("misgifs")[0];

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    form.id = "search-form-o";
    rand.id = "random-o";
    misgifs.style.color = "#FFFFFF";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "#FFFFFF";
    logo.src = "./assets/gifOF_logo.png";
    form.id = "search-form";
    rand.id = "random";
    misgifs.style.color = "#110038";
}

function cambiarTema(v) {
    if (v == "sailorD") {
        cambiarTemaClaro();
    } else if (v == "sailorN") {
        cambiarTemaOscuro();
    }
}

const random = fetch(
    `https://api.giphy.com/v1/gifs/search?q=random&api_key=QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p&limit=4`
)
    .then(response => response.json())
    .then(json => {
        console.log(json.data);
        json.data.map(gif => {
            let img = document.createElement("img");
            let titulo = document.createElement("p");
            titulo = gif.title;
            img.src = gif.images.fixed_height.url;
            document.getElementById("random-gif").appendChild(img);
        });
    })
    .catch(error => (document.body.appendChild = error));
