import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initFooter() {
    await loadPartial("footer", "/partials/footer.html");
}