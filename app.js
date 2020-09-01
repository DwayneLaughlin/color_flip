const colors = ["red", "green", "yellow", "blue", "indigo", "purple", "black","orange"];

const hexColors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const colorBtn = document.getElementById("btn");
const hexColorBtn = document.getElementById("btn2");
const body = document.getElementById("back");

const newColor = function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
};

const newHex = function () {
  const randomHex = hexColors[Math.floor(Math.random() * hexColors.length)];
  console.log(randomHex)
}


colorBtn.addEventListener("click", newColor);
hexColorBtn.addEventListener("click", newHex)
