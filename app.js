const colors = ["red", "green", "blue"];
const click = document.getElementById("btn");
const body = document.getElementById("body");
const randomColor = colors[Math.floor(Math.random()*colors.length)]

click.addEventListener("click", function(){
    console.log(randomColor)
    body.style.backgroundColor=randomColor
})