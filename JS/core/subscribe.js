const form = document.getElementById("subscribe-form");
const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "../home.html";
    }
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value;

  console.log("Subscribed:", email);

  // feedback visual
  alert("Subscribed successfully 🚀");
});