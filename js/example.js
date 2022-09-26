const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const success = document.querySelector("#success")
const errorNodes = document.querySelector(".error")

function validateForm(){

    clearMessages();

    if(nameInput.ariaValueMax.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}


function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border")
}