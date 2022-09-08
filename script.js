let inputkg=document.getElementById("kilo");
let inputcm=document.getElementById("heightcm");
let button=document.querySelector("button");
let output=document.querySelector("#output");

function BMI() {

    
    let res = (inputkg.value /(inputcm.value*inputcm)).toFixed(2);
   console.log(res);
    if (res<18.5) {
        output.textContent = `${res} which means you are underweigth `;
        console.log("underweigth");
    }
    else if (res>=18.5&&res<=25 ){
        output.textContent = `${res} which means you are normal `;
        console.log("normal");
    }
    else if (res>=25&&res<=30){
        output.textContent = `${res} which means you are overweigh `;
        console.log("overweigth");
    }
   
}

button.addEventListener("click",BMI)





