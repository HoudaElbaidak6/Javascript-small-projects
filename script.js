let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(input.value);
  let listItem = document.createElement("li");
  listItem.textContent = input.value;
  let ul = document.querySelector("ul");
  ul.appendChild(listItem);
  input.value = "";
});

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
  if (input.value.length>0) {
    console.log(input.value);
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    let ul = document.querySelector("ul");
    ul.appendChild(listItem);
    input.value = "";
  }
  else{
    alert("type something!")
  }
  }
});
