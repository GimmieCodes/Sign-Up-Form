const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const loginPanel2 = document.getElementsByClassName("loginpanel2")[0]
const errorMessage = document.createElement("div")
errorMessage.innerHTML = "Passwords do not match."
errorMessage.classList.add("errorMessage")
document.getElementById("signup").addEventListener("submit", function(event){
    if (passwordInput.value !== confirmPasswordInput.value){
        event.preventDefault();
        loginPanel2.appendChild(errorMessage)
    }
})