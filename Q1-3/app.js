const mainEl = document.querySelector(".main");
const childBtn = document.querySelector(".copy-child");
const parentBtn = document.querySelector(".copy-parent");
let text = ``;

parentBtn.addEventListener("click", () => {
  text = `Parent node's text. The target node The main node's child node `;
  mainEl.innerHTML = `${text} 
  The target node
  <div class="child">The main node's child node</div>`;
});

childBtn.addEventListener("click", () => {
  text = `The main node's child node `;
  mainEl.innerHTML = `${text} 
    The target node
    <div class="child">The main node's child node</div>`;
});
