import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initProjects() {
    await loadPartial("projects", "/partials/projects.html");
}