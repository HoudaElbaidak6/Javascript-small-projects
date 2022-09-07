
let output=document.getElementById("output")
let buttonlow=document.getElementById("lowercount")
let buttonhigh=document.getElementById("addcount")
 let count =0

function addnumber() {
   output.textContent=count++;
}

function lowernumber() {
    output.textContent=count--;
}

buttonhigh.addEventListener("click",addnumber )
buttonlow.addEventListener("click",lowernumber )