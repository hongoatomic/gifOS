function getStreamAndRecord() {
    navigator.mediaDevices
        .getUserMedia({
            audio: false,
            video: {
                height: { max: 480 }
            }
        })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
}

let stream = navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
});
let recorder = new RecordRTCPromisesHandler(stream, {
    type: "video"
});

const createGif = {
    userVideo: document.querySelector("video"),
    stream: null,
    recorder: null,
    gifStream: null,
    gifTime: null,
    blobFile: null,

    startRecord: async function() {
        createGif.userVideo.stream.play();
        recorder.startRecording();
    },
    stopRecord: async function(blobURL) {
        await recorder.stopRecording();
        let blob = await recorder.getBlob();
        invokeSaveAsDialog(blob);
        await createGif.recorder.reset();
        await createGif.gifStream.reset();
        await createGif.recorder.destroy();
        await createGif.gifStream.destroy();
        createGif.recorder = null;
        createGif.gifStream = null;
    },
    save: function(fileName) {}
};

let comenzar = document.getElementById("record");
let detener = document.getElementById("stop");

comenzar.onclick = function() {
    createGif.startRecord();
};
detener.onclick = function() {
    createGif.stopRecord();
};
