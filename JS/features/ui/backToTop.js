export function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  // mostrar / ocultar botón
  window.addEventListener("scroll", () => {
    const show =
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20;

    btn.style.display = show ? "block" : "none";
  });

  // acción click
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}