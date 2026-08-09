# Page Grid

> Status: 🚧 Draft
> Version: 0.1.0
> Category: Pattern
> Owner: KDTech Engineering
>
> Created: 2026-08-08
> Last Updated: 2026-08-08

---

## Overview

Page Grid is the official KDUI layout pattern used to distribute repeated content
in a responsive and reusable way.

It provides a consistent grid system for cards and  repeated UI elements while
remaining completely independent from page-specific styles.

## Purpose

The purpose of Page Grid is to provide a reusable responsive layout for collections
of repeated elements.

Examples include:

    - Project Cards
    - Technology Cards
    - Certification Cards
    - Cybersecurity Cards
    - Game Cards
    - Future KDUI Components

## Responsibilities

Page Grid is responsible for:

    - Responsive distribution of repeated elements.
    - Grid alignment.
    - Spacing between items.
    - Automatic column adjustment.
    - Layout consistency.

## Out of Scope

Page Grid MUST NOT define:

    - Colors
    - Typography
    - Borders
    - Shadows
    - Icons 
    - Animations
    - Component Styling
    - Business logic

Those responsibilities belong to Components or Pages.

## HTML Contract

Basic usage:

```html
<div class="page-grid">

    <article class="preview-card">

    </article>
    
    <article class="preview-card">

    </article>

</div>

## CSS Contract

Public class:

'''css.page-grid
'''

Reserved Modifiers:
'''css
.page-grid--compact
.page-grid--wide
.page-grid--auto-fit
'''
The reserved modifiers are part of the public API but are not implemented in version 0.1.0.

## Behavior

Page Grid must:

- Automatically distribute child elements using CSS Grid.
- Preserve consistent spacing between items.
- Adapt the number of columns according to the available width.
- Allow child components to define their own internal layout.
- Avoid page-specific behaviour.
- Support dynamic content without requiring structural changes.
- Keep the layout predictable across all supported screen sizes.

## Responsive Strategy

The Page Grid follows a Mobile First approach.

The layout must:

- Start with a single-column layout on small screens.
- Increase the number of columns progressively as horizontal space becomes available.
- Avoid hardcoded layouts tied to specific pages.
- Work consistently across mobile, tablet, laptop and desktop devices.
- Remain flexible for future screen sizes without requiring redesign.

## Accesibility

Page Grid does not introduce semantic meaning.

Therefore it must never:

- Modify ARIA attributes.
- Assign roles.
- Change keyboard navigation.
- Interfere with screen readers.

Accessibility responsibilities belong to the child components.

## Dependencies

Page Grid may depend on:

- Design Tokens
- Spacing Tokens
- Breakpoint Tokens

Page Grid must never depend on:

- Pages
- Components
- Business Logic

## Consumers

### Current Consumers

- Home -> Tech Experience
  
### Future Consumers

- Certifications
- Cybersecurity
- Games

## Future Variants

### Planned

- Compact Grid
- Wide Grid

### Experimental

- Masonry Grid

## Design Principles

The Page Grid pattern follows the following principles:

- Mobile First
- Reusable by default
- Composition over duplication
- Predictable behaviour
- Independent from Pages
- Progressive enhancement

## Changelog

### v0.1.0 - 2026-08-09

- Initial specification created.
- Public API defined.
- Responsibilities established.
- Responsive strategy documented.
- Design principles introduced.
