const inputEl = document.querySelector(".text-box");
const pastedTextEl = document.querySelector(".pasted-text");

inputEl.addEventListener("keyup", () => {
  pastedTextEl.textContent = inputEl.value;
});
