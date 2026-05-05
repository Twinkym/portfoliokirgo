export const clearError = (input) => {
    const errorEl = document.querySelector(`[data-error="${input.name}]`);
    if (errorEl) errorEl.textContent = "";
};

export const validateField = (input) => {
    if (!input.value.trim()) {
        showError(input, "This field is required");
        return false
    }

    if (input.type === "email" && !input.value.includes("@")) {
        showError(input, "Invalid email");
        return false;
    }

    if (input.minLength && input.value.length < input.minLength) {
        showError(input, `Minimum ${input.minLength} characters`);
        return false;
    }

    clearError(input);
    return true;
};