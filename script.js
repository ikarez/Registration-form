const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const activationToken= document.getElementById("activation token")
const errorElement = document.getElementById("error");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = document.querySelector(".error");

    errorDisplay.innerText = message;
    formControl.classList.remove("success")
}

const setSuccess = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".success");

    errorDisplay.innerText = message;
    formControl.classList.add("success");
}

const validateInputs = () => {
    const yournameValue = name.value.trim();
    const emailValue = email.value.trim();
    const activationTokenValue = activationToken.value.trim()

    if(yournameValue === "") {
        setError(name, "Your name is required");
        return;
    } 
    if(emailValue ==="") {
        setError(email, "Email is required");
        return;
    }
    if(activationTokenValue ==="") {
        setError(activationToken, "Activation Token is required");
        return;
    }
}
