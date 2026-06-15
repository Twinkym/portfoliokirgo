import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initCertifications() {
    await loadPartial(
        "certifications",
        "../../partials/certifications.html"
    );
}