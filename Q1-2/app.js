const boxEl = document.querySelector(".box");

boxEl.addEventListener("mouseover", () => {
  boxEl.style.backgroundColor = `#fd0000`;
});

boxEl.addEventListener("mouseout", () => {
  boxEl.style.backgroundColor = `#0001fc`;
});
