import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initAboutFull() {
  await loadPartial("about-full", "/partials/about.html");
}