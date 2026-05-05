export function applyRepulsion (particles) {
    const FORCE = 0.3;
    const MINI_DIST = 80;

    elements.forEach((el1, i) => {
        elements.forEach((el2, j) => {
            if (i === j) return; 
            
            const dx = getX(el1) - getX(el2);
            const dy = getY(el1) - getY(el2);

            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MIN_DIST && dist > 0) {
                const force = (MIN_DIST - dist) * FORCE;

                const fx = (dx / dist) * force;
                const fy = (dy / dist) * force;

                moveBy(el1, fx, fy);
            } 
        });
    });
}

function getX(el) {
    return gsap.getProperty(el, "y");
}

function move(el, x, y) {
    gsap.set(el, {
        x: '+=${x}',
        y: '+=${y}'
    });
}