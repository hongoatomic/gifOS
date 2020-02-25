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
