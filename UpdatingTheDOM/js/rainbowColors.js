function changeColorOne() {
    document.getElementById("colorOne").style.backgroundColor = "red";
    document.getElementById("emptyText1").innerHTML = "<h1>Red</h1>";
}

function changeColorTwo() {
    document.getElementById("colorTwo").style.backgroundColor = "orange";
    document.getElementById("emptyText2").innerHTML = "<h1>Orange</h1>";
}

function changeColorThree() {
    document.getElementById("colorThree").style.backgroundColor = "yellow";
    document.getElementById("emptyText3").innerHTML = "<h1>Yellow</h1>";
}

function changeColorFour() {
    document.getElementById("colorFour").style.backgroundColor = "green";
    document.getElementById("emptyText4").innerHTML = "<h1>Green</h1>";
}

function changeColorFive() {
    document.getElementById("colorFive").style.backgroundColor = "blue";
    document.getElementById("emptyText5").innerHTML = "<h1>Blue</h1>";
}

function changeColorSix() {
    document.getElementById("colorSix").style.backgroundColor = "indigo";
    document.getElementById("emptyText6").innerHTML = "<h1>Indigo</h1>";
}

function changeColorSeven() {
    document.getElementById("colorSeven").style.backgroundColor = "violet";
    document.getElementById("emptyText7").innerHTML = "<h1>Violet</h1>";
}

//Ok so this is us repeating ourself. you can do this and add a Parameter wchihc is ()

function changeColors(color) {
    document.getElementById(color).style.backgroundColor = color;
    
}

