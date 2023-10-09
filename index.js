var rNum1 = Math.floor(Math.random()*6) + 1;
var rNum2 = Math.floor(Math.random()*6) + 1;

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.setAttribute("src", "images/dice" + rNum1.toString() + ".png");
img2.setAttribute("src", "images/dice" + rNum2.toString() + ".png");
const head = document.querySelector(".container h1");
if(rNum1 > rNum2) {
    head.innerHTML = "Player 1 Wins! UwU";
}

else if (rNum1 < rNum2) {
    head.innerHTML = "Player 2 Wins! ara ara";
}

else{
    head.innerHTML = "Draw! sugoii";
}