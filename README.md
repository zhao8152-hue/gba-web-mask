# Game Boy Advance Web Mask

A highly realistic, responsive GBA shell mask for web-based retro games. Built with React + Tailwind CSS + SVG.

## Features

- **Transparent Glacier Shell** — SVG-based GBA silhouette with semi-transparent fill
- **L/R Bumper Triggers** — Rotating bumpers with press animation
- **D-Pad with 3D Tilt** — Perspective tilt effect on press
- **A/B Buttons** — Realistic press feedback
- **Screen Bezel** — Gradient border, CRT scanlines, screen glare
- **Responsive** — Scales fluidly with `@container` queries
- **Drop-in Ready** — Place your game canvas/iframe inside the screen container

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
  App.tsx       # GBA shell mask component
  index.css     # Tailwind + global styles
  main.tsx      # Entry point
public/
  GBA shell.svg # User-designed shell silhouette
```

## Customization

The GBA shell shape is defined in `public/GBA shell.svg`. To change it:

1. Edit the SVG in your design tool (CorelDRAW, Figma, etc.)
2. Export the path data
3. Update the `<path>` element in `App.tsx`

## Tech Stack

- React 19
- Tailwind CSS 4
- Vite 6
- TypeScript

## License

Apache-2.0
