const counter = document.getElementById("counter");
const video = document.getElementById("video");
const soundBtn = document.getElementById("sound-btn");

const STORAGE_KEY = "krolly_count";

function loadCount() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch (e) {
    return 0;
  }
}

function saveCount(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch (e) {}
}

function pluralTimes(n) {
  const last = n % 10;
  const lastTwo = n % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return "раз";
  if (last >= 2 && last <= 4) return "раза";
  return "раз";
}

const count = loadCount() + 1;
saveCount(count);
counter.textContent = "Ты попался на этой странице " + count + " " + pluralTimes(count);

soundBtn.addEventListener("click", function () {
  const message = JSON.stringify({ event: "command", func: "unMute", args: [] });
  video.contentWindow.postMessage(message, "https://www.youtube-nocookie.com");
  const volume = JSON.stringify({ event: "command", func: "setVolume", args: [100] });
  video.contentWindow.postMessage(volume, "https://www.youtube-nocookie.com");
  soundBtn.hidden = true;
});
