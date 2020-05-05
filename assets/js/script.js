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