var i = 0;
var txt = "the winter season is warm";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("caption").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}