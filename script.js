let input = document.querySelector("input");
let button = document.querySelector("button");
let body = document.querySelector("body");

let ul = document.createElement("ul");
body.appendChild(ul);

function Add() {
  if (input.value.length > 0) {
    console.log(input.value);
    let listItem = document.createElement("li");
    listItem.textContent = input.value;

    ul.appendChild(listItem);
    input.value = "";
  } else {
    alert("type something!");
  }
}

button.addEventListener("click", Add);

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    Add();
  }
});
