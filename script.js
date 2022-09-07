let body = document.querySelector("body");
let hexcolor = document.getElementById("hexcolor");
let hexbtn = document.getElementById("hexbtn");
let hextab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function changehexColor(event) {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hextab.length);
    hex += hextab[randomNumber];
  }
  hexcolor.textContent = hex;
  body.style.backgroundColor = hex;
}
hexbtn.addEventListener("click", changehexColor);
