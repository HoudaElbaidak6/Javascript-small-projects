 let colors=["coral","pink", "purple","yellow","red","violet","lightblue","aqua"];
let body=document.querySelector("body");
let button=document.getElementById("btn");


 function changeColor(event) {
    
 let randomNumber = Math.floor(Math.random() * colors.length) ;
body.style.backgroundColor = colors[randomNumber];

 }

button.addEventListener("click",changeColor) 