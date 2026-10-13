const openBtn = document.getElementById("open-btn");
const bait = document.getElementById("bait");
const result = document.getElementById("result");
const video = document.getElementById("video");

openBtn.addEventListener("click", function () {
  bait.hidden = true;
  result.hidden = false;
  video.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1";
});
