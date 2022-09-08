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
