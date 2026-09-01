# TaskFlow

> The real-world project for the **Git Basics Course**.

A browser-based task manager built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

## Features

- Add tasks with priority (High / Medium / Low) and optional due dates
- Mark tasks complete / incomplete
- Delete individual tasks or bulk-clear completed ones
- Filter by status (All / Active / Completed) and by priority
- Overdue detection with visual indicator
- Data persisted in `localStorage` — survives page reloads

## Run Locally

```bash
# Option A: just open in browser
open index.html

# Option B: with live-reload (recommended while developing)
npm install
npm start
# → opens http://localhost:3000
```

## File Overview

| File | Purpose |
| ------ | --------- |
| `index.html` | App shell — structure and layout |
| `style.css` | All styles using CSS custom properties |
| `app.js` | All application logic (tasks, filtering, rendering) |
| `package.json` | Dev tooling (live-server) |

## How This App Evolves in the Course

Each course module adds a feature to this app:

| Module | Feature Added |
| -------- | -------------- |
| 03 | Initial HTML structure committed |
| 04 | CSS variables and base styles |
| 05 | Task creation (feature branch) |
| 06 | Filtering (merge & conflict practice) |
| 07 | Push to GitHub |
| 08 | Delete tasks via Pull Request |
| 09 | Undo/stash practice |
