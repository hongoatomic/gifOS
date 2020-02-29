let copiarEnlance = document.getElementsByClassName("copiar-enlace")[0];

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

copiarEnlance.onclick = function() {
    var aux = document.createElement("input");
    aux.setAttribute("value", urlCopy);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
};
