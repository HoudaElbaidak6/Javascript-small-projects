let output=document.getElementById("output");
let btnadd=document.getElementById("buttonadd");
let btnreset=document.getElementById("btnreset");
let btnlow=document.getElementById("btnlow");

let count=0
function addCount() {
    output.textContent= ++count;
    changecolorNumber();
}

function resetCount() {
    count=0;
    output.textContent= 0;
    changecolorNumber();
}

function lowCount() {
    output.textContent= --count;
    changecolorNumber();
}

function changecolorNumber() {
    if (output.textContent>0) {
        output.style.color = "#81b29a";
    }
    else if (output.textContent==0){
        output.style.color ="#a98467";
    }

    else{
        output.style.color ="#9e2a2b" ;
    }
}

btnadd.addEventListener("click",addCount)
btnreset.addEventListener("click",resetCount)
btnlow.addEventListener("click",lowCount)





/* let output = document.getElementById("output");
let buttons = document.querySelectorAll("button");
let count = Number(output.textContent);

buttons[0].addEventListener("click", function () {
  output.textContent = count--;
});

buttons[1].addEventListener("click", function () {
  output.textContent = count++;
}); */
