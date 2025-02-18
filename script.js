// nav hide 

let nav=document.querySelectorAll(".nav-link");
let collapse=document.querySelector(".navbar-collapse.collapse");
nav.forEach(function(a){
    a.addEventListener("click", ()=>{
        collapse.classList.remove("show")
    })
})