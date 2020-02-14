async function getStreamAndRecord() {
    navigator.mediaDevices
        .getUserMedia({
            video: true,
            audio: true
        })
        .then(async function(stream) {
            let recorder = RecordRTC(stream, {
                type: "video"
            });
            recorder.startRecording();

            /*const sleep = m => new Promise(r => setTimeout(r, m));
            await sleep(3000);*/

            function stop() {
                recorder.stopRecording(function() {
                    let blob = recorder.getBlob();
                    invokeSaveAsDialog(blob);
                });
            }
        });
}
const grabar = document.getElementById("record");
grabar.addEventListener("click", () => {
    getStreamAndRecord();
});

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
    stop();
});
