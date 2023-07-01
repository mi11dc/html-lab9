var sun = document.getElementById("sun");
var sky = document.getElementById("sky");
var playBtnEle = document.getElementById("play");
var pauseBtnEle = document.getElementById("pause");

sun.addEventListener("animationstart", function () {
  console.log("animation started");
});
sun.addEventListener("animationiteration", function (){
  console.log("looping");
});
sun.addEventListener("animationend", function (){
    console.log("animation done");
    sun.classList.remove("animation");
    sky.classList.remove("sky-animation");

    playBtnEle.style.display = "block";
    pauseBtnEle.style.display = "none";

    sun.style.animationPlayState = "running";
    sky.style.animationPlayState = "running";
});

function onPlayClick() {
    sun.classList.add("animation");
    sky.classList.add("sky-animation");

    playBtnEle.style.display = "none";
    pauseBtnEle.style.display = "block";

    sun.style.animationPlayState = "running";
    sky.style.animationPlayState = "running";
}

function onPauseClick() {
    playBtnEle.style.display = "block";
    pauseBtnEle.style.display = "none";

    sun.style.animationPlayState = "paused";
    sky.style.animationPlayState = "paused";
}