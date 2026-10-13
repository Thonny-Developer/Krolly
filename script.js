const openBtn = document.getElementById("open-btn");
const bait = document.getElementById("bait");
const result = document.getElementById("result");
const video = document.getElementById("video");
const counter = document.getElementById("counter");

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

openBtn.addEventListener("click", function () {
  const count = loadCount() + 1;
  saveCount(count);

  counter.textContent = "Ты попался на этой странице " + count + " " + pluralTimes(count);
  bait.hidden = true;
  result.hidden = false;
  video.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1";
});
