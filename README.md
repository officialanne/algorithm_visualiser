# Algorithm Visualizer

An interactive, accessible Vanilla JavaScript application for learning sorting, searching, stacks, and queues step by step.

## Features

- Bubble, selection, and insertion sort animations
- Linear and binary search with target input
- Stack and queue simulators
- Pause, resume, step, reset, speed, and array-size controls
- Pseudocode and complexity panels that update with the selection
- Dark mode persisted with `localStorage`
- Keyboard-friendly controls, visible focus styles, live status messages, and reduced-motion support

## Tech stack

HTML5, CSS3, JavaScript, Vite, Vitest, Playwright, ESLint, Prettier, and GitHub Actions.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run check` for linting, unit tests, and a production build. Use `npm run test:e2e` after installing Playwright browsers.

## Project structure

- `src/algorithms` contains DOM-independent implementations.
- `src/visualization` renders arrays and structures and manages animation flow.
- `src/controllers` coordinates UI events and state.
- `tests` contains unit and end-to-end tests.
- `.github/workflows` provides quality checks and GitHub Pages deployment.

## Deployment

Push to `main`, enable GitHub Pages with **GitHub Actions** as its source, and the deployment workflow will publish the Vite build. Set `base` in `vite.config.js` to `/<repository-name>/` if deploying to a project page rather than a custom domain.

## License

MIT
