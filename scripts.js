const btn = document.getElementById("btnShare");
const shareIcon = document.getElementById("shareIcon");
const bubble = document.getElementById("bubble");
const author = document.getElementById("author");
const social = document.getElementById("social");

let timeoutId = undefined;

document.addEventListener("click", (evt) => {
  if (!IsInteractiveElement(evt)) {
    HideInteractiveElements();
  }
});

document.addEventListener("focus", (evt) => {
  if (!IsInteractiveElement(evt)) {
    HideInteractiveElements();
  }
});

document.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  if (evt.key === "Escape") {
    HideInteractiveElements();
  }
});

function IsInteractiveElement(evt) {
  let evtTarget = evt.target;

  do {
    if (evtTarget == btn || evtTarget == bubble) {
      return true;
    }
    evtTarget = evtTarget.parentNode;
  } while (evtTarget);
  // clicked outside the btn and the bubble -> we hide the bubble
  return false;
}

function TimeoutReset() {
  if (typeof timeoutId === "number") {
    clearTimeout(timeoutId);
  }
}

function ShowInteractiveElements() {
  TimeoutReset();
  btn.classList.add("share-active");
  shareIcon.classList.add("share-active");
  bubble.classList.add("share-active");
  author.classList.add("share-active");
  social.classList.add("share-active");
}

function HideInteractiveElements() {
  btn.classList.remove("share-active");
  shareIcon.classList.remove("share-active");
  bubble.classList.remove("share-active");
  author.classList.remove("share-active");
  social.classList.remove("share-active");
}

function HideInteractiveElementsWithDelay() {
  TimeoutReset();
  timeoutId = setTimeout(() => {
    HideInteractiveElements();
  }, 1000);
}
