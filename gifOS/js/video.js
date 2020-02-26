let comenzar = document.getElementById("record");
let detener = document.getElementById("stop");
let video = document.querySelector("video");
let recorder;
const apiKey = "api_key=QdQJ4v523JXYS55K6OWuPzbw5U0Cqw1p";

comenzar.onclick = function() {
    record();
};
detener.onclick = function() {
    stop();
};

// RECORD
function record() {
    this.disabled = true;
    getStreamAndRecord(function(stream) {
        // set video tag data
        video.muted = true;
        video.volume = 0;
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

function stopRecordingCallback() {
    video.src = video.srcObject = null;
    video.muted = false;
    video.volume = 1;
    video.src = URL.createObjectURL(recorder.getBlob());

    recorder.stream.stop();

    // Create the FormData to send to giphy
    let form = new FormData();
    var blob = recorder.getBlob();
    form.append("file", blob, "myGif.gif");
    //console.log(form.get('file'));

    postToGiphy(form).then(response => {
        // This is the specific id of the gif updated to giphy (can verified the id here https://giphy.com/channel/solescobar10c6)
        console.log("Response de giphy " + response.data);
        const id = response.data.id;

        const endpoint = "https://api.giphy.com/v1/gifs/";
        // To find the url of this new gif hacemos como el fetch en 'index.js'
        fetch(endpoint + id + "?" + apiKey)
            .then(function(res) {
                return res.json();
            })
            .then(function(json) {
                console.log(json.data);
                const url = json.data.images.fixed_height.url;

                // registrar el nuevo gif en local storage con sur url
                // localStorage.length will help for the loop to get them back after, first one saved will be myGifos-1, second one myGifos-2...
                localStorage.setItem("myGifos-" + localStorage.length, url);
            });
    });

    recorder.destroy();
    recorder = null;
}

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

let comenzarVideo = document.getElementById("empezar");
let videoTag = document.getElementsByTagName("video")[0];
let cuadroComenzarVideo = document.getElementsByClassName(
    "create-gif-description"
)[0];

comenzarVideo.onclick = function() {
    cuadroComenzarVideo.innerHTML = "";
};
