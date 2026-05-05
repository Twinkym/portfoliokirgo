export async function loadPartial(id, path) {
    const container = document.getElementById(id);

    if (!container) {
        console.warn(`[loadPartial] container #${id} not found`);
        return;
    }

    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error(`[loadPartial] failed to load ${path}`, error);

        container.innerHTML = `<div style=color:red; padding: 1rem;">Error loading component</div>`;
    }
}
