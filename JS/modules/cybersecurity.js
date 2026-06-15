import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initCybersecurity() {
    await loadPartial(
        "cybersecurity",
        "/partials/cybersecurity.html"
    );
}