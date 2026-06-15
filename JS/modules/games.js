import { loadPartial } from "../shared/utils/loadPartials.js";

export async function initGames() {
    await loadPartial(
        "games",
        "/partials/games.html"
    );
}