let body=document.querySelector("body");
let inputs=document.querySelectorAll("input");

function setGradient(color1,color2) {
    document.body.style.background =`linear-gradient( to right ,${color1},${color2} ) `;
}

inputs[0].addEventListener("input",function () {
    setGradient(inputs[0].value, inputs[1].value)
    console.log(document.body.style);
})

inputs[1].addEventListener("input",function () {
    setGradient(inputs[0].value, inputs[1].value)
})
