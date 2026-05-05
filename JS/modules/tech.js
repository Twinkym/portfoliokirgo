import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initTech() {
    await loadPartial("tech", "/partials/tech.html");
}