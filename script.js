function playPause() {
    var video = document.getElementById("video1");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function makeBig() {
    document.getElementById("video1").style.width = "580px";
    document.getElementById("video1").style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.6)";
}

function makeSmall() {
    document.getElementById("video1").style.width = "320px";
    document.getElementById("video1").style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.4)";
}

function makeNormal() {
    document.getElementById("video1").style.width = "420px";
    document.getElementById("video1").style.boxShadow = "3px 3px 12px rgba(0, 0, 0, 0.5)";
}

function toggleSize(img) {
    img.style.transform = img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}