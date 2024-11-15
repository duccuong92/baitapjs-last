const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let changeColorBtn = document.querySelector(".simple-colors");
let showColors = document.getElementById("show-colors");

function changeColor() {
  const randomColorsFunction = randomColors();
  document.body.style.backgroundColor = colors[randomColorsFunction];
  showColors.textContent = colors[randomColorsFunction];
}

function randomColors() {
  return Math.floor(Math.random() * colors.length);
}

changeColorBtn.onclick = changeColor;
