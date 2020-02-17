async function getStreamAndRecord() {
    let stream = null;
    let recorder = null;
    let gifStream = null;
    let gifTime = null;
    let blobFile = null;
    const userVideo = document.querySelector("video");
    async function showUserVideo() {
        const video = userVideo;
        stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                height: { max: 480 },
                width: { ideal: 860 }
            }
        });
        video.srcObject = stream;
        video.play();
    }

    async function startRecord() {
        userVideo.load();
        userVideo.play();
        recorder = new RecordRTCPromisesHandler(stream, {
            type: "video"
        });
        gifStream = new RecordRTCPromisesHandler(stream, {
            type: "gif"
        });
        await recorder.startRecording();
        await gifStream.startRecording();
        recorder.stream = stream;
        gifStream.stream = stream;
    }

    async function stopRecord() {
        userVideo.srcObject = null;
        await recorder.stopRecording();
        await gifStream.stopRecording();
        const videoBlob = await recorder.getBlob();
        const gifBlob = await gifStream.getBlob();
        blobFile = gifBlob;
        userVideo.src = URL.createObjectURL(videoBlob);
        stream.getTracks().forEach(track => {
            track.stop();
        });
        await recorder.reset();
        await gifStream.reset();
        await recorder.destroy();
        await gifStream.destroy();
        recorder = null;
        gifStream = null;
    }
    function createFormData() {
        const form = new FormData();
        form.append("file", blobFile, "my-guifos.gif");
        blobFile = null;
        return form;
    }

    function saveGif(url) {
        const newId = localStorage.length;
        localStorage.setItem(`my-guifos-${newId}`, url);
    }
    const grabar = document.getElementById("record");
    grabar.addEventListener("click", () => {
        startRecord();
        showUserVideo();
    });

    const parar = document.getElementById("stop");
    parar.addEventListener("click", () => {
        stopRecord();
        createFormData();
        saveGif(url);
    });
}
getStreamAndRecord();

/*let recorder = RecordRTC(stream, {
        type: "video"
    });
    navigator.mediaDevices
        .getUserMedia({
            video: true,
            audio: false
        })
        .then(async function(stream) {
            recorder.startRecording();

            /*const sleep = m => new Promise(r => setTimeout(r, m));
            await sleep(3000);*/
/* });
    async function stop() {
        recorder.stopRecording(function() {
            let blob = recorder.getBlob();
            invokeSaveAsDialog(blob);
        });
    }
    
    });
}



});*/
