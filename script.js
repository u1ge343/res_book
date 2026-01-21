const video = document.querySelector("#video");
const marker = document.querySelector("#marker");
const btn = document.querySelector("#startBtn");

btn.addEventListener("click", async () => {
  try {
    video.muted = true;
    await video.play();
    btn.style.display = "none";
  } catch (e) {
    console.error("Video play failed:", e);
  }
});

marker.addEventListener("markerFound", () => {
  if (video.paused) video.play();
});

marker.addEventListener("markerLost", () => {
  video.pause();
});
