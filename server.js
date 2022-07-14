// const express = require('express');
// const app = express();

var x = Math.random();
x = ((x * 6) + 1);
x = Math.floor(x);

var y = Math.random();
y = ((y * 6) + 1);
y = Math.floor(y);

document.getElementsByTagName("img")[0].src ="dice" + x + ".png";
document.getElementsByTagName("img")[1].src ="dice" + y + ".png";


if ( x > y ) {
document.querySelector("h1").innerHTML = " 🚩 Player One Wins!";
}

if (y > x) {
  document.querySelector("h1").innerHTML = " 🚩 Player Two Wins!";
}

else if (x === y) {
  document.querySelector("h1").innerHTML = "Tie, Refresh";
}
