import { NAV_TREE } from "../navigation/navigation.js";
import { state } from "../navigation/state.js";
import { isLeaf, navigate, pushState, goBack } from "../navigation/navigationLogic.js";
import { explode, spawn, float, animateLiquid } from "../animations/dropAnimations.js";
import { MENU_CONFIG } from "../../shared/config/menuConfig.js";
import { getPosition } from "../../shared/utils/positioning.js";
import { startPhysics } from "../animations/physics.js";


function getContainer() {
    return document.getElementById("liquid-menu");
}

export function initMenu() {
    state.currentNode = NAV_TREE;
    render(state.currentNode);
}

function addBackDrop(drops) {
    if (state.stack.length === 0) return;

    const el = createBackDrop();
    append(el, drops);
}

function addCenterDrop(node, drops) {
    const el = createCenterDrop(node);
    append(el, drops);
}

function render(node) {
    const container = getContainer();
    if (!container) return; // 🛡 protección

    container.innerHTML = "";

    const drops = [];

    addBackDrop(drops);
    addCenterDrop(node, drops);

    const isRoot = node === NAV_TREE;

    if ((state.isOpen && node.children) || (!isRoot && node.children)) {
        addChildren(node, drops);
    }

    spawn(drops);
    startPhysics(drops);
}

function createBackDrop() {
    const el = document.createElement("div");
    el.className = "drop back-drop";
    el.innerText = "←";

    el.style.left = "20%";
    el.style.top = "20%";
    el.style.transform = "translate(-50%, -50%) scale(1)";

    el.addEventListener("click", handleBack);

    return el;
}

function createCenterDrop(node) {
    const el = document.createElement("div");
    el.className = "drop center-drop";
    el.textContent = node.name;

    el.addEventListener("click", (e) => handleClick(node, e.currentTarget));

    el.style.left = "50%";
    el.style.top = "50%";
    el.style.transform = "translate(-50%, -50%) scale(1)";

    return el;
}

function createDrop(node, index, total, positions) {
    const el = document.createElement("div");
    el.className = "drop";
    el.textContent = node.name;

    const angle = (index / total) * Math.PI * 2;
    const { radius } = MENU_CONFIG;

    const { x, y } = getPosition(index, total, positions);

    console.log("POS: ", x, y);

    el.style.left = "50%";
    el.style.top = "50%";
    el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

    el.addEventListener("click", (e) => handleClick(node, e.currentTarget));

    gsap.killTweensOf(el);
    float(el);

    return el;
}

function addChildren(node, drops) {
    const positions = [];

    node.children.forEach((child, index) => {
        const el = createDrop(child, index, node.children.length, positions);
        append(el, drops);
    });
}

function handleClick(node, el) {
    if (isLeaf(node)) return navigate(node);

    const isRoot = node === NAV_TREE;

    animateLiquid(el, () => {
        const drops = getDrops();

        explode(drops, () => {
            if (isRoot) {
                state.isOpen = true;
                render(node);
                return
            }

            pushState(node);
            render(node);
        });
    });
}

function handleBack() {
    explode(getDrops(), () => {
        goBack();

        if (state.stack.length === 0) {
            state.isOpen = false;
        }
        render(state.currentNode);
    });
}

function append(el, drops) {
    const container = getContainer();
    if (!container) return;

    container.appendChild(el);
    drops.push(el);
}

function getDrops() {
    const container = getContainer();
    if (!container) return;

    return container.querySelectorAll(".drop");
}

export function renderMenu(node) {
    render(node);
}
