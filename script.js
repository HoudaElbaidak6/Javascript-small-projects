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

  let validPassword = /^[a-zA-Z0-9.*_-]{6,12}$/;
  if (inputs["pass"].value.match(validPassword)) {
    inputs["pass"].className = "is_valid";
    if (document.querySelector("#password+.invalid_message")) {
      document.querySelector("#password+.invalid_message").remove();
    }
  } else {
    inputs["pass"].className = "is_invalid";
    if (!document.querySelector("#password+.invalid_message")) {
      let divpass = document.createElement("div");
      divpass.className = "invalid_message";
      divpass.textContent = "The password is invalid";
      document.getElementById("password").after(divpass);
    }
  }
});
