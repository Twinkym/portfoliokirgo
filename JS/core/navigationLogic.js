import { state } from "./state.js";

export function isLeaf(node) {
    return node.type === "leaf";
}

export function navigate(node) {
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