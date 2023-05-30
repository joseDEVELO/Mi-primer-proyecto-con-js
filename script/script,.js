const email = document.querySelector("#email");
const btn = document.querySelector("button");
const Rg =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


btn.addEventListener("click", function(e){
    e.preventDefault()
    if (Rg.test(email.value)) {
        alert("Correo valido")
        console.log("click");
    }
     else {
        alert("Correo invalido")
     }
})

