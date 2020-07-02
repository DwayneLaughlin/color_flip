const colors = ["red", "green", "blue"];
const click = document.getElementById("btn");
const body = document.getElementById("back");


const newColor = function(){
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    console.log(randomColor);
body.style.backgroundColor=randomColor
}
 click.addEventListener("click", newColor)

