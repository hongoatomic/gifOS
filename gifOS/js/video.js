let comenzar = document.getElementById("record");
let detener = document.getElementById("stop");
let video = document.getElementById("antonio");
let videoCapturado = document.getElementById("video-capturado");
let recorder;
apiKey = "api_key=QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";
let stopBoton = document.querySelector("button#stop");
let btnEmpezar = document.getElementById("empezar");
let containerComenzar = document.getElementsByClassName("container-menu")[0];
let videoEncuadro = document.getElementsByClassName("video-frame")[0];
let repetirBtn = document.getElementById("repetir-guifo");
let capturaGif = document.getElementById("captura-gif");
let capturaExito = document.getElementById("captura-exito");
let misGifs = document.getElementsByClassName("capturaExito")[0];
let form = new FormData();
let blobStop;

comenzar.onclick = recording;

function recording() {
    record();
    stopBoton.style.display = "inline";
    comenzar.style.display = "none";
}
detener.onclick = function() {
    stop();
    detener.style.display = "none";
    comenzar.style.display = "none";
    document.getElementById("subir-guifo").style.display = "block";
    repetirBtn.style.display = "block";
};

stopBoton.style.display = "none";

// RECORD
function record() {
    this.disabled = true;
    getStreamAndRecord(function(stream) {
        // set video tag data
        video.muted = true;
        video.volume = 0;
        video.srcObject = stream;
        video.srcObject = stream;

        recorder = RecordRTC(stream, {
            type: "gif",
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                console.log("started");
            }
        });

        recorder.startRecording();

        // release stream on stopRecording
        recorder.stream = stream;
        detener.disabled = false;
    });
}

let urlCopy;

function getStreamAndRecord(callback) {
    navigator.mediaDevices //para permitir que el navegador acceda a los devices
        .getUserMedia({
            audio: false,
            video: true
        })
        .then(function(stream) {
            callback(stream);
        })
        .catch(function(error) {
            alert("Unable to capture your camera. Please check console logs.");
            console.error(error);
        });
}

// STOP RECORDING
function stop() {
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
}

let id;
let botonDescarga = document.querySelector("#descargaGif");
let botonEnlace = document.querySelector("#copiar-enlace");

let blob;
let copyUrl;

botonDescarga.onclick = function() {
    invokeSaveAsDialog(blob, localStorage.length + "-migif.gif");
};

botonEnlace.onclick = function() {
    let copiarLink = document.createElement("input");
    copiarLink.value = copyUrl;
    document.body.appendChild(copiarLink);
    copiarLink.select();
    document.execCommand("copy");
    alert("¡Copiado!");
    document.body.removeChild(copiarLink);
};

function stopRecordingCallback() {
    blobStop = URL.createObjectURL(recorder.getBlob());
    recorder.stream.stop();

    // Create the FormData to send to giphy
    form = new FormData();
    blob = recorder.getBlob();
    form.append("file", blob, "myGif.gif");
    //console.log(form.get('file'));
}

document.querySelector("#subir-guifo").onclick = function() {
    videoEncuadro.style.display = "none";
    capturaGif.style.display = "block";

    postToGiphy(form).then(response => {
        // This is the specific id of the gif updated to giphy (can verified the id here https://giphy.com/channel/solescobar10c6)
        console.log("Response de giphy " + response.data);
        id = response.data.id;
        const endpoint = "https://api.giphy.com/v1/gifs/";
        // To find the url of this new gif hacemos como el fetch en 'index.js'
        fetch(endpoint + id + "?" + apiKey)
            .then(function(res) {
                return res.json();
            })
            .then(function(json) {
                console.log(json.data);
                const url = json.data.images.fixed_height.url;
                urlCopy = json.data.images.fixed_height.url;
                copyUrl = json.data.url;

                // registrar el nuevo gif en local storage con sur url
                // localStorage.length will help for the loop to get them back after, first one saved will be myGifos-1, second one myGifos-2...
                localStorage.setItem("myGifos-" + localStorage.length, url);
                capturaGif.style.display = "none";
                capturaExito.style.display = "block";
                videoCapturado.src = video.srcObject = null;
                videoCapturado.muted = false;
                videoCapturado.volume = 1;
                videoCapturado.src = blobStop;
            });
    });

    recorder.destroy();
    recorder = null;
};

// Doc here https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function postToGiphy(formData) {
    const pathToUpload = "https://upload.giphy.com/v1/gifs?";
    const parameterToUpload = {
        headers: new Headers(), // Create empty header
        body: formData, // The gif we send (in function parameter)
        method: "POST",
        mode: "cors"
    };

    /** Upload with fetch :
     *   - First parameter will be the endpoint URL : https://upload.giphy.com/v1/gifs?api_key=QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p
     *   - Second parameter will be the gif (formData)
     */
    const response = await fetch(pathToUpload + apiKey, parameterToUpload);

    return await response.json();
}

btnEmpezar.onclick = function() {
    containerComenzar.style.display = "none";
    videoEncuadro.style.display = "block";
};

document.getElementById("repetir-guifo").onclick = recording;
