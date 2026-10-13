const video = document.getElementById("video");
const soundBtn = document.getElementById("sound-btn");
const origin = "https://www.youtube-nocookie.com";

function send(func, args) {
  video.contentWindow.postMessage(JSON.stringify({ event: "command", func: func, args: args }), origin);
}

soundBtn.addEventListener("click", function () {
  send("unMute", []);
  send("setVolume", [100]);
  send("playVideo", []);
  soundBtn.hidden = true;
});
