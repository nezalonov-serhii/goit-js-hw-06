const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

textEl.style.fontSize = "54px";

fontSizeControlEl.addEventListener("input", () => {
   textEl.style.fontSize = `${fontSizeControlEl.value}px`;
});
