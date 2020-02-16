const min = 10000;
const max = 500000;
let counter = Math.floor(Math.random() * (+max - +min)) + +min;
document.getElementsByClassName("random")[0].innerHTML =
    "¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: " +
    counter;

let apiKey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`)
    .then(response => response.json())
    .then(json => {
        json.data
            .map(gif => gif.images.fixed_height.url)
            .forEach(url => {
                let img = document.createElement("img");
                img.src = url;
                document.body.appendChild(img);
            });
    })
    .catch(error => (document.body.appendChild = error));

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsEl = document.getElementById("results");
const trendingEl = document.getElementById("trending");
const randomGif = document.getElementById("random-gif");
const sugerenciasEl = document.getElementById("sugerencias");

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const q = searchInput.value;
    search(q);
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    sugerenciasEl.innerHTML = "";

    /*searchForm.innerHTML += `<input
            id="search-input"
            type="text"
            value="Resultado sugerido"
            autocomplete="off"
            disabled
        />`;*/
});

function search(q) {
    let apikey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=20`;

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

temas.onchange = function() {
    cambiarTema(this.value);
};

function cambiarTemaOscuro() {
    document.body.style.backgroundColor = "#110038";
    logo.src = "./assets/gifOF_logo_dark.png";
    form.id = "search-form-o";
    // rand.id = "rand-o";
}

function cambiarTemaClaro() {
    document.body.style.backgroundColor = "white";
    logo.src = "./assets/gifOF_logo.png";
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

/*fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=burrito&rating=PG-13`)
    .then(response => response.json())
    .then(json => {
        json.data
            //.map(gif => gif.images.fixed_height.url)
            .forEach(url => {
                let img = document.createElement("img");
                img.src = url;
                const height = obj.images.fixed_height.height;
                const title = obj.title;
                randomGif.innerHTML = `<img
        class="item"
    src="${url}"
    height="${height}"
    alt="${title}"
    >`;
            });
    })
    .catch(function(err) {
        console.log(err.message);
    });

