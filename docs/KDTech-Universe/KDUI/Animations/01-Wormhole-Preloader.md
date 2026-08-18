# KDUI — 🌌Animation 01: Wormhole Preloader

**Status:** In Progress  
**Version:** 1.0  
**Created:** 2026-08-17  
**Modified:** 2026-08-18  
**Owner:** KDTech Engineering  
**Scope:** KDTech Portfolio — Matrix Experience

---
## 1. 🎯Objective

Create the first visual sequence of the KDTech Matrix Experience.

The visitor should perceive an accelerated transition through a digital wormhole before entering the Welcome interface.

The effect is inspired by science-fiction visual language and is intended as a cinematic representation of extreme-speed travel rather than a physically accurate wormhole simulation.
 
---
##  2. 🏞️Visual sequence

```
Particles
    ↓
Acceleration
    ↓
Light-speed tunnel
    ↓
Wormhole effect
    ↓
Maximum velocity
    ↓
White flash
    ↓
Welcome interface
```

---
## 3. 🔬 Technology

### Three.js

Three.js will be responsible for:

```
- Particle rendering.
- 3D scene.
- Camera.
- Particle movement.
- Wormhole visual effect.
- Final visual transition.
```

### GSAP

GSAP is not required for the initial Three.js implementation.
It will be introduced later as the orchestration layer for the complete experience.

---
## 4. Initial Scope

The first implementation must contain only the wormhole effect.

The following elements are explicitly outside the scope:

```
- Welcome typing animation.
- Cyberpunk character.
- Dialogue.
- Pills.
- User interaction.
- Navigation.
```


---

## 5. Acceptance Criteria

Animation 01 is considered complete when:

```
- The Three.js scene initializes correctly.
- Particles render correctly.
- Particles create a convincing acceleration effect.
- The wormhole visual effect is clearly perceptible.
- The animation reaches its maximum velocity.
- The final white flash occurs correctly.
- The browser remains responsive.
- No console errors are generated.
- The animation can be executed independently.
- The implementation does not interfere with the existing Welcome interface.
```

---

## 6. Development Rule

Animation 02 must not begin until Animation 01 has been tested and formally validated.

```

This gives us a **specification before implementation**, which is exactly what we want.

---

# 8. Git: first we close the current state

Here I want to make a small distinction.

## Commit en `main`

Before creating the new branch, let’s record the **current steady state**.

We do not want the creation of the branch to be the first record of this new phase without having a clearly identified starting point.

### Message

I would use:

```text
chore(kdui): prepare matrix experience animation sprint
```

And the body:

```
Establish the baseline for the KDUI Matrix Experience animation sprint.

- Adjust Welcome pill group positioning.
- Reserve visual space for the future cyberpunk guide.
- Establish the animation development structure.
- Prepare modular JavaScript files for the Welcome experience.
- Define the sequential animation development methodology.
- Document the initial animation architecture.
```

But be careful: this commit should only include what you actually have currently prepared.

Don’t include Three.js code yet if we haven’t written it yet.