import { initHeader } from "../modules/header.js";
import { initFooter } from "../modules/footer.js";

async function initPage() {
    await initHeader();
    await initFooter();
}

initPage();