import { state } from "./state.js";
import { renderMenu } from "../ui/renderMenu.js";
import { NAV_TREE } from "../navigation/navigation.js";

function getMenu() {
const menu = document.getElementById("liquid-menu");
}

export function isLeaf(node) {
    return node.type === "leaf";
}

export function navigate(node) {
  state.isOpen = false;

  if (node.url.startsWith("#")) {
    const target = document.querySelector(node.url);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  window.location.href = node.url;
}

export function pushState(node) {
    state.stack.push(state.currentNode);
    state.currentNode = node;
}

export function goBack() {
    if (state.stack.length === 0) return;
    
    state.currentNode = state.stack.pop();
}

export function toggleMenu() {
  state.isOpen = !state.isOpen;

  if (state.isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}

export function renderRootMenu() {
  state.currentNode = NAV_TREE;
  renderMenu(NAV_TREE);
}

export function closeMenu() {
  state.isOpen = false;
  state.currentNode = null;
  state.stack = [];

  const menu = document.getElementById("liquid-menu");
  menu.innerHTML = "";

  renderRootMenu();
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("#liquid-menu")) {
    closeMenu();
    state.isOpen = false;
  }
});
