let passwordErrorLabel;
let passwordField;
let confirmPasswordField;

window.addEventListener("DOMContentLoaded", () => {
    passwordErrorLabel = document.querySelector(".label-error");
    passwordField = document.querySelector("#password");
    confirmPasswordField = document.querySelector("#confirm-password");

    passwordField.addEventListener("change", evaluatePasswords);
    confirmPasswordField.addEventListener("change", evaluatePasswords);
});

function evaluatePasswords()
{
    const valuesEqual = passwordField.value === confirmPasswordField.value;
    const confirmPasswordEmpty = confirmPasswordField.value === "";

    if (valuesEqual && !confirmPasswordEmpty)
    {
        passwordField.classList.remove("error");
        confirmPasswordField.classList.remove("error");
        passwordErrorLabel.classList.add("hidden");
    }
    else if (!valuesEqual && !confirmPasswordEmpty)
    {
        passwordField.classList.add("error");
        confirmPasswordField.classList.add("error");
        passwordErrorLabel.classList.remove("hidden");
    }
    else if (confirmPasswordEmpty)
    {
        passwordErrorLabel.classList.add("hidden");
    }
}