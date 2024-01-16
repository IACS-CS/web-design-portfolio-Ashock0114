// Write JavaScript here.


let Feesh = document.querySelector("#fish");
Feesh.style.position = "absolute";
let body = document.querySelector("body");
body.addEventListener("mousemove", function (event) {
  Feesh.style.left = event.pageX + "px";
  Feesh.style.top = event.pageY + "px";
Feesh.style.pointerEvents = "none"
});