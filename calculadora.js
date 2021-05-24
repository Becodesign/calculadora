
function abrir() {
    window.open("https://github.com/BrusEspinal/calculadora");
}

let y = 0;
function color() {
    if (y == 0) {
        document.getElementById("fondo").style.background = "#c0c0c0";
        y = 1;
    } else if (y == 1) {
        document.getElementById("fondo").style.background = "#eeeeee";
        y = 0;
    }

}



