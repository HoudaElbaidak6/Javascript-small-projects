let poid = document.getElementById("poid-input");
let height = document.getElementById("longueur-input");
let button = document.querySelector("button");
let output = document.querySelector("h3");

function Calculate() {
  let res = (poid.value / (height.value * height.value)).toPrecision(2);
  console.log(res)
  if (res < 18.5) {
    output.textContent = ` Your BMI is ${res} which means you are underweight`;
  } else if (res >= 18.5 && res <= 24.9) {
    output.textContent = ` Your BMI is ${res} which means you are Normal`;
  } else if (res >= 25 && res <= 29.9) {
    output.textContent = ` Your BMI is ${res} which means you are Overweight`;
  } else if (res >= 30 && res <= 34.9) {
    output.textContent = ` Your BMI is ${res} which means you suffer from Obesity Class I`;
  } else if (res >= 35 && res <= 39.9) {
    output.textContent = ` Your BMI is ${res} which means you suffer from Obesity Class II`;
  } else {
    output.textContent = ` Your BMI is ${res} which means you are extremly Obese !!! `;
  }
}

button.addEventListener("click",Calculate);

/* output.addEventListener("keypress", function (event) {
    if (event.key == "Enter" ) {
       Calculate(event);
    };

  }); */
