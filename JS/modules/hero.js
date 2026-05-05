import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initHero() {
    await loadPartial("hero", "/partials/hero.html");
}