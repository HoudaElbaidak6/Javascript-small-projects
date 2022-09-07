let outputext, input, btn;
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
