var cssText = document.querySelector("h3");
var clr1 = document.getElementById("color1");
var clr2 = document.getElementById("color2");
var body = document.getElementById("body-bg");

function printBgCSS(){
    cssText.textContent = body.style.background;
}

function changeBg()
{
    body.style.background = "linear-gradient(to right, " + clr1.value + ", " + clr2.value + ")";
    printBgCSS();
}




clr1.addEventListener("input",changeBg);
clr2.addEventListener("input",changeBg);
