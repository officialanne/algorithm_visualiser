# Architecture

The application separates algorithm logic from the browser interface.

`algorithms` return a result and an ordered list of descriptive steps. The controller sends those steps through the animation controller, and the visualization layer translates each step into DOM classes. This keeps algorithms independently testable and makes the UI replaceable.

`appController` owns event wiring and current UI state. `appState` holds user preferences and runtime values. Static explanation and complexity data lives in `data/algorithmInfo.js`.
