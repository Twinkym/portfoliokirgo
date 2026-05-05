import { applyRepulsion } from './repulsion.js';

let running = true;

gsap.ticker.add(() => {
    if (!running) return;

    try {
        updatePhysics(particles);
    } catch {

    }
})

export const updatePhysics = (particles) => {
    applyRepulsion(particles);
}

export function startPhysics(elements) {
    if (running) return;

    running = false;
    
    gsap.ticker.add(() => {
        updatePhysics(particles);
    });
}

