import { loadPartial } from "../shared/utils/loadPartials.js";
import { initMenu } from "../features/ui/renderMenu.js";

export async function initHeader() {
  await loadPartial("header", "/partials/header.html");

  initMenu();
}