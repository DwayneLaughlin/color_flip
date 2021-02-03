const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "indigo",
  "purple",
  "orange",
  "violet"
];

const hexColors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const colorBtn = document.getElementById("btn");
const hexColorBtn = document.getElementById("btn2");
const copyBtn = document.getElementById("btn3");
const body = document.getElementById("back");
// functionality for regular colors
const newColor = function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColor);
  body.style.backgroundColor = randomColor;

  var col = document.createElement("p");
  var colName = document.createTextNode(randomColor);
  col.appendChild(colName);
  document.body.appendChild(col)
};


// functionality for random hex color
const newHex = function () {
  const hexString = [];
  for (i = 0; i < 6; i++) {
    const randomHex = hexColors[Math.floor(Math.random() * hexColors.length)];
    hexString.push(randomHex);
  }
  const hexJoin = hexString.join("");
  console.log(hexString);
  body.style.backgroundColor = "#" + hexJoin;

  var p = document.createElement("p");
  var name = document.createTextNode(hexJoin);
  p.appendChild(name);
  document.body.appendChild(p)
};

colorBtn.addEventListener("click", newColor);
hexColorBtn.addEventListener("click", newHex);
