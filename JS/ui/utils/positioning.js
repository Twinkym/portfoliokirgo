import { MENU_CONFIG } from "../../config/menuConfig.js";

const MINI_DISTANCE = 80;

export function getPosition(index, total, positions) {
    let attempts = 0;
    let pos;

    do {
        pos = generate(index, total);
        attempts++;
    } while (isColliding(pos, positions) && attempts < 20);

    positions.push(pos);
    return pos;
}

function generate(index, total) {
    const baseAngle = (index / total) * Math.PI * 2;

    const angleJitter = (Math.random() - 0.5) * 0.6;
    const radiusJitter = (Math.random() - 0.5) * 40;

    const angle = baseAngle + angleJitter;
    const radius = MENU_CONFIG.radius + radiusJitter;

    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    };
}

function isColliding(pos, positions) {
    return positions.some(p => {
        const dx = p.x - pos.x;
        const dy = p.y -pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < MINI_DISTANCE;
    });
}
