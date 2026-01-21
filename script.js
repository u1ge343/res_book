const marker = document.querySelector("#marker");
const video = document.querySelector("#arVideo");

marker.addEventListener("markerFound", () => {
  video.play();
});

marker.addEventListener("markerLost", () => {
  video.pause();
});
