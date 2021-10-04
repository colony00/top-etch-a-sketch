function createPixels(gridSize,pixels) {
  for(let i = 0; i<gridSize;i++) {
    pixels.push(document.createElement("div"));
    pixels[i].classList.add(`pixel`);
    pixels[i].addEventListener('mouseenter', () => {
      pixels[i].classList.add("hover");
    })
    container.appendChild(pixels[i]);
  }
}
function removeChilds(grid) {
  while(grid.lastChild) {
    grid.removeChild(grid.lastChild)
  }
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

let gridSize = 16;
let pixels = [];
createPixels(gridSize*gridSize,pixels)
button.addEventListener("click", () => {
  for(let i = 0;i<pixels.length;i++) {
    pixels[i].classList.remove("hover")
  }
  let notNumber = true;
  do {
    gridSize = Number(prompt("How big a size grid do you want? Max 100"))
  }
  while(isNaN(gridSize));
  removeChilds(container)
  pixels = []
  createPixels(gridSize*gridSize,pixels)
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, auto);`;
})
