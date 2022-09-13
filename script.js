let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = form.elements;
  let invMess = document.querySelector(".invalid_message");
  if (inputs["nom"].value.length == 0) {
    inputs["nom"].className = "is_invalid";
    invMess.textContent = "Enter your name please";
  } else {
    inputs["nom"].className = "is_valid";
    invMess.textContent = "";
    // recuperation de la valeur saisi qui est valide
    const nom = inputs["nom"].value;
    console.log(nom);
  }
  let validemailmsg = document.getElementById("emailInvalid");
  let validEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (inputs["email"].value.match(validEmail)) {
    inputs["email"].className = "emailValid";
    validemailmsg.textContent = `${inputs["email"].value} 
  is valid`;
    let email = inputs["email"].value;
    console.log(email);
  } else {
    inputs["email"].className = "emailNotvalid";
    validemailmsg.textContent = `${inputs["email"].value} is not valid !!`;
  }
});
