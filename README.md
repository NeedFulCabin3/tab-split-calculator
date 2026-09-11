# Tab Split Calculator

An in-browser bill and tip split calculator tailored for local Indian Rupee currency transactions, delivering real-time per-person breakdowns without setup friction.

---

## Overview

Dividing restaurant tabs or shared expenses manually usually leads to awkward math at the dinner table. This application calculates individual tip contributions and grand totals per head instantly as you type into any input field.

## How It Works

The engine listens for live DOM events across all user inputs (`billTotal`, `serviceTip`, `personCount`). When an input changes, state updates synchronously:

1. Evaluates user input values or falls back to base safe defaults (`0` for amounts, `1` for people count).
2. Calculates total tip: `Bill Amount * (Tip Percentage / 100)`.
3. Sums grand total: `Bill Amount + Total Tip`.
4. Splits both total tip and grand total evenly by the number of heads.
5. Injects rounded strings formatted with the `₹` symbol directly back into the rendered HTML nodes.

## Key Features

* **Real-time DOM Calculation**: Immediate input updates without submit buttons or page reloads.
* **Edge-case Guardrails**: Prevents division-by-zero errors when people count drops below 1.
* **Localized Context**: Pre-configured with Indian Rupee formatting across input and result outputs.

## Tech Stack Breakdown

* **HTML5**: Form structure, numeric input constraints (`step`, `min`), and static content nodes.
* **CSS3**: Layout centering, card boundaries, input focus states, and custom color palettes.
* **JavaScript (ES6+)**: Event-driven architecture utilizing document selection, `parseFloat`, and live DOM manipulation.

## Prerequisites & Web-Based Quick Start

You don't need Node.js, NPM, or local tools to run or contribute to this codebase.

### Option A: Using GitHub Codespaces (Browser Only)
1. Press `.` (the period key) on this repository page, or click **Code** -> **Codespaces** -> **Create codespace on main**.
2. Once the web IDE loads, install the "Live Preview" extension in VS Code Web.
3. Right-click `index.html` and click **Live Preview: Show Preview**.

### Option B: Local Browser Execution
1. Download or clone this repository.
2. Double-click `index.html` to open it in any modern browser.

## Project Structure

```text
tab-split-calculator/
├── .github/
│   └── workflows/
│       └── code-quality.yml   # Workflow for static code checking
├── .gitignore                  # Git exclusions for OS and editor noise
├── index.html                  # Core markup structure and input elements
├── script.js                   # State logic and real-time DOM update functions
├── style.css                   # Custom theme styling and card layout
└── LICENSE                     # MIT License details
```

## Roadmap

- [ ] Add preset tip percentage buttons (10%, 15%, 20%).
- [ ] Support dynamic custom currency selection via dropdown.
- [ ] Implement dark theme palette toggling.
