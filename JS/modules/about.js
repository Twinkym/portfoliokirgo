import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initAbout() {
    await loadPartial("about", "/partials/about-preview.html");
}