var emailLable = document.querySelector(".email-label");
var passwordLable = document.querySelector(".password-label");
var email = document.getElementById("email");
var password = document.getElementById("password");


email.addEventListener("focusin",()=>{
    emailLable.classList.add("active");
})

email.addEventListener("focusout",()=>{
    if(email.value == "") {
        emailLable.classList.remove("active");
    }
})

password.addEventListener("focusin",()=>{
    passwordLable.classList.add("active");
})

password.addEventListener("focusout",()=>{
    if(password.value == "") {
        passwordLable.classList.remove("active");
    }
})