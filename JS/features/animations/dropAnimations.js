export function explode(drops, onComplete) {
    gsap.to(drops, {
        scale: 1.6,
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        onComplete
    });
}

export function animateLiquid(el, onComplete) {
    gsap.timeline({ onComplete})
        .to(el, {
        scale: 0.8,
        duration: 0.2,
        ease: "power1.in",
        onComplete: () => {
            gsap.to(el, {
                scale: 1,
                duration: 0.2,
                ease: "power1.out",
                onComplete
            });
        }
    });
}

export function spawn(drops) {
    gsap.fromTo(drops, {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
        }
    );
}

export function float(el) {
    gsap.to(el, {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2
    });
} 