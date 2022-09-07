let output = document.getElementById("output");
let buttonlow = document.getElementById("lowercount");
let buttonhigh = document.getElementById("addcount");
let resetbtn = document.getElementById("reset");
let count = 0;

function addnumber() {
  output.textContent = ++count;
  changeColor();
}

function reset() {
  count = 0;
  output.textContent = 0;
  changeColor();
}

function lowernumber() {
  output.textContent = --count;
  changeColor();
}

function changeColor() {
  if (output.textContent > 0) {
    output.style.color = "red";
  } else if (output.textContent == 0) {
    output.style.color = "green";
  } else {
    output.style.color = "blue";
  }
}

buttonhigh.addEventListener("click", addnumber);
resetbtn.addEventListener("click", reset);
buttonlow.addEventListener("click", lowernumber);

/* let output = document.getElementById("output");
let buttons = document.querySelectorAll("button");
let count = Number(output.textContent);

buttons[0].addEventListener("click", function () {
  output.textContent = count--;
});

buttons[1].addEventListener("click", function () {
  output.textContent = count++;
}); */
