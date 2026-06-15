import { initHeader } from "../modules/header.js";

import { initHero } from "../modules/hero.js";
import { initProjects } from "../modules/projects.js";
import { initAbout } from "../modules/about.js";
import { initTech } from "../modules/tech.js";
import { initCertifications } from "../modules/certifications.js";
import { initCybersecurity } from "../modules/cybersecurity.js";
import { initGames } from "../modules/games.js";
import { initFooter } from "../modules/footer.js";

export async function initLayout() {
    await initHeader();

    const path = window.location.pathname;

    if (path.includes("about.html")) {
        await initAboutFull();
        await initFooter();
        return;
    }

    // HOME
    await Promise.all([
        initHero(),
        initProjects(),
        initAbout(),
        initTech(),
        initCertifications(),
        initCybersecurity(),
        initGames(),
        initFooter()
    ]);
}