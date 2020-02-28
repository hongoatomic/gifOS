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
let tags = [];
let resultadoSugerido = document.getElementById("resultadoSugerido");
let resultadosSugeridos1 = ["cat", "dog", "unicorn", "mouse"];
let resultadosSugeridos2 = ["orange", "banana", "apple", "grape"];
let resultadosSugeridos3 = ["html", "css", "javascript", "java"];
let aleatorio = Math.round(Math.random() * 4);
let resultSugeridos1 = document.createElement("input");
let resultSugeridos2 = document.createElement("input");
let resultSugeridos3 = document.createElement("input");
resultSugeridos1.value = resultadosSugeridos1[aleatorio];
resultSugeridos2.value = resultadosSugeridos2[aleatorio];
resultSugeridos3.value = resultadosSugeridos3[aleatorio];
resultSugeridos1.id = "search-sugerencia1";
resultSugeridos2.id = "search-sugerencia2";
resultSugeridos3.id = "search-sugerencia3";
resultSugeridos1.style.cursor = "pointer";
resultSugeridos2.style.cursor = "pointer";
resultSugeridos3.style.cursor = "pointer";

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
    crearTags();

    resultadoSugerido.appendChild(resultSugeridos1);
    resultadoSugerido.appendChild(resultSugeridos2);
    resultadoSugerido.appendChild(resultSugeridos3);
    //     resultadoSugerido.innerHTML =
    //         `        <input
    //             id="search-sugerencia1"
    //             style="cursor:pointer"
    //             type="text"
    //             value="${resultadosSugeridos1[aleatorio]}"
    //             autocomplete="off"
    //             disabled
    //         />` +
    //         ` <input
    //         id="search-sugerencia2"
    //         style="cursor:pointer"
    //         type="text"
    //         value="${resultadosSugeridos2[aleatorio]}"
    //         autocomplete="off"
    //         disabled
    //     />` +
    //         ` <input
    //     id="search-sugerencia3"
    //     style="cursor:pointer"
    //     type="text"
    //     value="${resultadosSugeridos3[aleatorio]}"
    //     autocomplete="off"
    //     disabled
    // />`;
});
aleatorio = Math.round(Math.random() * 4);
resultSugeridos1.onclick = function() {
    search(resultSugeridos1.value);
    searchInput.value = resultSugeridos1.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
};

resultSugeridos2.onclick = function() {
    search(resultSugeridos2.value);
    searchInput.value = resultSugeridos2.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
};

resultSugeridos3.onclick = function() {
    search(resultSugeridos3.value);
    searchInput.value = resultSugeridos3.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
};
let i = 0;

function crearTags() {
    let padre = resultsEl.parentNode;

    tags.push("#" + searchInput.value + " ");

    let tag = document.createElement("button");
    console.log(padre);
    padre.insertBefore(tag, resultsEl);
    tag.innerHTML = tags[i];
    tag.style.background = "blue";
    i++;
}

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
