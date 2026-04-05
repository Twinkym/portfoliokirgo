import { validateField } from "./validation.js";

const form = document.querySelector ("#contact-form");
const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "../home.html";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) return;

    console.log("Form ready 🚀");
    form.reset();
});