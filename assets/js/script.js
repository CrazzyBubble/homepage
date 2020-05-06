let skills = document.querySelector(".karate");
skills.addEventListener("click", function() {
    var video = document.querySelector("#ytplayer");
    if (!video.classList.contains("hidden")) {
        video.classList.add("hidden");
        player.stopVideo();
    } else {
        video.classList.remove("hidden");
        player.playVideo();
    }
});
let butAudio = document.querySelector("#you-must");
butAudio.addEventListener("click", function() {
    document.querySelector("#you-must audio").play();
});

function addEventClickChangeColor(button, color) {
    button.addEventListener("click", function() {
        page.style.borderColor = color;
    });
}
let page = document.querySelector(".page");
let butYellow = document.querySelector(".change-color.yellow");
let butGreen = document.querySelector(".change-color.green");
let butPurpure = document.querySelector(".change-color.purpure");
let butIndigo = document.querySelector(".change-color.indigo");
let butMidnightblue = document.querySelector(".change-color.midnightblue");
addEventClickChangeColor(butYellow, "#d4b60b");
addEventClickChangeColor(butGreen, "#0ad125");
addEventClickChangeColor(butPurpure, "#bb0743");
addEventClickChangeColor(butIndigo, "indigo");
addEventClickChangeColor(butMidnightblue, "midnightblue");