const textEl = document.querySelector(".green-box");

textEl.addEventListener("click", () => {
  textEl.textContent += ` Click added some text!`;
});
