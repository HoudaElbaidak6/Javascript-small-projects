let icon=document.querySelector("i");
let p=document.querySelector("p");


icon.addEventListener("click",function () {
    p.classList.toggle("show");
    if (p.classList.contains("show")) {
        icon.classList.replace("fa-minus", "fa-plus");
    }
    
   else {
        icon.classList.replace("fa-plus", "fa-minus");
    }

});
