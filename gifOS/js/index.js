//FUNCION COUNTER VISITAS

let n = localStorage.getItem("on_load_counter");
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.getElementById("counter").innerHTML =
    "¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: " +
    n;

//VARIABLES
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsEl = document.getElementById("results");
const trendingEl = document.getElementById("trending");
const randomGif = document.getElementById("random-gif");
const fakeInput = document.querySelector("h3.fakeInput");
const fakeInput2 = document.querySelector("h3.fakeInput:last-of-type");
let tags = [];
let resultadoSugerido = document.getElementById("resultadoSugerido");

let resultadosSugeridos1 = [
    "Cat",
    "Dog",
    "Unicorn",
    "Mouse",
    "Dragon",
    "Horse",
    "Hamster",
    "Cow",
    "Sheep",
    "Pig",
    "Monkey",
    "Lion"
];
let resultadosSugeridos2 = [
    "Orange",
    "Banana",
    "Apple",
    "Grape",
    "Blackberries",
    "Avocado",
    "Cherries",
    "Figs",
    "Mango",
    "Passion Fruit",
    "Raspberries",
    "Papaya"
];
let resultadosSugeridos3 = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "PHP",
    "Ruby",
    "C#",
    "Python",
    "C",
    "SQL",
    "Github",
    "Programming"
];

let aleatorio = Math.round(Math.random() * 12);
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
let fakeInput01 = document.querySelector(".fakeInput01");

//EVENTO PARA SUBMIT
searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let q = searchInput.value;
    search(q);
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    fakeInput.innerHTML = "";
    fakeInput2.innerHTML = "";
    fakeInput.style.border = "none";
    fakeInput2.style.border = "none";
    fakeInput01.innerHTML = `<input value= "${q}" readonly class="inputFake fakeInput01">  `;
    crearTags();
});

searchInput.addEventListener("input", function(evt) {
    let q = searchInput.value;
    resultadoSugerido.appendChild(resultSugeridos1);
    resultadoSugerido.appendChild(resultSugeridos2);
    resultadoSugerido.appendChild(resultSugeridos3);
    resultSugeridos1.className = "boton-resultados";
    resultSugeridos2.className = "boton-resultados";
    resultSugeridos3.className = "boton-resultados";
    document.getElementsByClassName("boton-resultados")[0].readOnly = true;
    document.getElementsByClassName("boton-resultados")[1].readOnly = true;
    document.getElementsByClassName("boton-resultados")[2].readOnly = true;
});

resultSugeridos1.onclick = function() {
    aleatorio = Math.round(Math.random() * 12);
    let q = resultSugeridos1.value;
    search(resultSugeridos1.value);
    searchInput.value = resultSugeridos1.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
    fakeInput01.innerHTML = `<input value= "${q}" readonly class="inputFake fakeInput01">  `;
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    fakeInput.innerHTML = "";
    fakeInput2.innerHTML = "";
    fakeInput.style.border = "none";
    fakeInput2.style.border = "none";
    crearTags();
};

resultSugeridos2.onclick = function() {
    aleatorio = Math.round(Math.random() * 12);
    let q = resultSugeridos2.value;
    search(resultSugeridos2.value);
    searchInput.value = resultSugeridos2.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
    fakeInput01.innerHTML = `<input value= "${q}" readonly class="inputFake fakeInput01">  `;
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    fakeInput.innerHTML = "";
    fakeInput2.innerHTML = "";
    fakeInput.style.border = "none";
    fakeInput2.style.border = "none";
    crearTags();
};

resultSugeridos3.onclick = function() {
    aleatorio = Math.round(Math.random() * 12);
    let q = resultSugeridos3.value;
    search(resultSugeridos3.value);
    searchInput.value = resultSugeridos3.value;
    resultSugeridos1.value = resultadosSugeridos1[aleatorio];
    resultSugeridos2.value = resultadosSugeridos2[aleatorio];
    resultSugeridos3.value = resultadosSugeridos3[aleatorio];
    fakeInput01.innerHTML = `<input value= "${q}" readonly class="inputFake fakeInput01">  `;
    trendingEl.innerHTML = "";
    randomGif.innerHTML = "";
    fakeInput.innerHTML = "";
    fakeInput2.innerHTML = "";
    fakeInput.style.border = "none";
    fakeInput2.style.border = "none";
    crearTags();
};

let i = 0;

function crearTags() {
    let padre = resultsEl.parentNode;
    tags.push(searchInput.value + " ");
    let tag = document.createElement("button");
    console.log(padre);
    padre.insertBefore(tag, fakeInput01);
    tag.innerHTML = tags[i];
    tag.className = "boton-tags";
    tagEtiqueta = document.querySelectorAll("button.boton-tags");
    tagEtiqueta.forEach(function(valor, index) {
        valor.onclick = function() {
            let q = valor.innerHTML;
            search(valor.innerHTML);
            searchInput.value = valor.innerHTML;
            fakeInput01.innerHTML = `<input value= "${q}" readonly class="inputFake fakeInput01">  `;
        };
    });
    i++;
}

// FUNCION SEARCH
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

// FUNCION "HOY TE SUGERIMOS"
const random = fetch(
    `https://api.giphy.com/v1/gifs/search?q=seinfeld&api_key=QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p&limit=4`
)
    .then(response => response.json())
    .then(json => {
        console.log(json.data);
        let resultsHTML = "";
        json.data.map(obj => {
            const url = obj.images.fixed_height.url;
            const height = obj.images.fixed_height.height;
            const title = obj.title;

            resultsHTML += ` <div > <span id="titlegif"> ${title} <img
            src="assets/button3.svg"
            alt="boton cierre ventana"
            class="boton-cierre"
        /></span>
            <img
                class="item"
            src="${url}"
            height="${height}"
            alt="${title}"
            ><div id="img-boton">  <button class="boton-gif"> <a href="${url}"  target="_blank" class="a-gif">Ver más... </a></button></div> </div>`;
        });
        randomGif.innerHTML = resultsHTML;
    });

// FUNCION "TENDENCIAS"
let apiKey = "QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
const trending = fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=24`
)
    .then(response => response.json())
    .then(json => {
        let resultsHTML = "";
        json.data.map(obj => {
            const url = obj.images.fixed_height.url;
            const height = obj.images.fixed_height.height;
            const title = obj.title;

            resultsHTML += ` <div class="intento"><img
            class="item item1"
        src="${url}"
        height="${height}"
        alt="${title}"
        ><div class="hover"><p id="hovergif"> ${title} </p></div> </div>`;
        });
        trendingEl.innerHTML = resultsHTML;
    });
