/* let outputext, input, btn;
outputext = document.getElementById("outputext");
input = document.getElementById("input");
btn = document.getElementById("btn");


function displayName (event) {
  let name = input.value;
  if (name.length > 0) {
    outputext.textContent += "  " + name;
  }
  input.value = "";
}


btn.addEventListener("click", displayName);

input.addEventListener("keypress",function (event) {
    console.log(event);
  if (event.key == "Enter" ) {
    displayName(event)
  }
  
}) 
 */

/* let colors=["coral","pink", "purple", "black","yellow","red","violet","lightblue","aqua"];
let body=document.querySelector("body");
let button=document.getElementById("btn");


 function changeColor(event) {
    
 let randomNumber = Math.floor(Math.random() * colors.length) ;
body.style.backgroundColor = colors[randomNumber];

 }

button.addEventListener("click",changeColor) */

/*  let input = document.getElementById("colorInput");
let body = document.querySelector("body");
function changebgColor(event) {
  body.style.backgroundColor = event.target.value;
}

input.addEventListener("input", changebgColor); */

/* 
 let body=document.querySelector("body");
let hexcolor=document.getElementById("hexcolor");
let hexbtn=document.getElementById("hexbtn");
let hextab=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function changehexColor(event) {
 let hex="#"
   for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hextab.length) ;
    hex+=hextab[randomNumber];
   }
hexcolor.textContent=hex
body.style.backgroundColor=hex
   
}

hexbtn.addEventListener("click",changehexColor)  */

/* 
let body = document.querySelector("body");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let gradiantinfo = document.getElementById("output");

function changebgGradiant(event) {
  body.style.background =
    "linear-gradient" + "(" + color1.value + ", " + color2.value + ") ";

  gradiantinfo.textContent = body.style.background;
}

color1.addEventListener("input", changebgGradiant);
color2.addEventListener("input", changebgGradiant); */



