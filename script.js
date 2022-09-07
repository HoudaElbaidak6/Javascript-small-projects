let inputs=document.querySelectorAll("input")
let body=document.querySelector("body")

function changeColor(color1,color2) {
    body.style.background=` linear-gradient( to right ,${color1},${color2})`;
    
}

inputs[0].addEventListener("input",function () {
   changeColor(inputs[0].value, inputs[1].value);
})

inputs[1].addEventListener("input",function () {
    changeColor(inputs[0].value, inputs[1].value);
 })
 
