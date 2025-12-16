# Copilot Instructions for react-triple-select-box

## Project Overview

A lightweight, dependency-free React component library for rendering triple select boxes. Users can move items between three lists (left, center, right) using control buttons. Published to npm as `react-triple-select-box`.

## Tech Stack

- **Runtime**: Node.js 22 (see `.nvmrc`)
- **Framework**: React 19+ (peer dependency)
- **Build**: Vite 6.x (library mode, outputs ES modules + CommonJS)
- **Testing**: Vitest 2.x + React Testing Library + jsdom
- **Linting**: ESLint 8.x with eslint-plugin-react
- **Documentation**: Storybook 8.x

## Quick Start

```bash
# Install dependencies
npm install

# Run tests (includes coverage)
npm test

# Run tests in watch mode
npm run test:watch

# Run Storybook for visual development
npm run storybook

# Build the library
npm run build

# Lint code (only .js files, not .jsx)
npm run lint
```

## Project Structure

```
src/
├── index.js                    # Main entry point (exports TripleSelectBox)
├── components/                 # Presentational components
│   ├── SelectBox/              # Single select box with multi-select
│   │   ├── SelectBox.jsx       # Component implementation
│   │   ├── SelectBox.test.jsx  # Co-located tests
│   │   ├── SelectBox.css       # Co-located styles
│   │   ├── helpers.js          # parseSelection utility
│   │   └── index.js            # Re-export
│   └── SelectBoxControl/       # Navigation buttons (<<, >>)
├── containers/                 # Stateful components
│   └── TripleSelectBox/        # Main component with useReducer state
│       ├── TripleSelectBox.jsx
│       └── useUpdate.js        # Custom hook for onChange callback
├── state/                      # State management (reducer pattern)
│   ├── actions.js              # Action type constants
│   ├── reducers.js             # Reducer function
│   ├── initializers.js         # Initial state factory
│   └── helpers.js              # isObject utility
└── selectors/                  # Data selectors
    └── selectors.js            # getSelected, getUnselected, getOptions
stories/                        # Storybook stories (*.stories.jsx)
dist/                           # Build output (index.js, index.cjs, styles.css)
```

## Coding Guidelines

### Component Patterns

1. **Container/Presentational Pattern**: Containers in `containers/` hold state; components in `components/` are presentational
2. **State Management**: Uses `useReducer` with action constants from `src/state/actions.js` - NOT Redux or external libraries
3. **PropTypes**: All components MUST have PropTypes defined using `prop-types` package
4. **Exports**: Each module uses `index.js` that re-exports the default export

### File Naming

- Components: `PascalCase.jsx` (e.g., `SelectBox.jsx`)
- Tests: `ComponentName.test.jsx` (co-located with component)
- CSS: `ComponentName.css` (co-located, imported in component)
- Utilities: `camelCase.js` (e.g., `helpers.js`)

### Import Conventions

```javascript
// External dependencies first
import { useReducer } from "react";
import PropTypes from "prop-types";

// Internal imports use relative paths
import SelectBox from "../../components/SelectBox";
import { ACTIONS, reducer, initializer } from "../../state";
```

### Testing Patterns

- Use `@testing-library/react` for component testing
- Use `vi.fn()` from Vitest for mocking (NOT `jest.fn()`)
- Call `cleanup` in `afterEach`
- Use `fireEvent` for user interactions
- Test files are excluded from coverage

```javascript
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { vi } from "vitest";

import ComponentName from "./";

describe("<ComponentName />", () => {
  afterEach(cleanup);
  // tests...
});
```

### CSS Guidelines

- Use plain CSS files (no CSS modules, preprocessors, or CSS-in-JS)
- Class names use `kebab-case` (e.g., `select-box-container`)
- Import CSS directly in component files: `import "./ComponentName.css";`

## Known Issues

- **Typo in Action**: `RIGTH_TO_CENTER` is misspelled in `actions.js` (should be `RIGHT_TO_CENTER`) - maintain for backwards compatibility
- **CSS Bug**: In `SelectBox.css`, `margin: '8px'` has quotes that may cause issues
- **Lint Config**: The lint script only targets `.js` files (`eslint src/**/*.js`), not `.jsx` files
- **Pre-existing Lint Errors**: `selectors.js` has unused variable warnings for destructured `selected` in arrow functions

## Build Configuration

The Vite config (`vite.config.js`) is set up for library mode:

- **Entry**: `src/index.js`
- **Formats**: ES modules (`dist/index.js`) and CommonJS (`dist/index.cjs`)
- **External**: `react`, `react-dom`, `prop-types` (not bundled)
- **CSS**: Extracted to `dist/styles.css`

## Storybook

- Stories location: `stories/*.stories.jsx`
- Run: `npm run storybook` (port 6006)
- Config: `.storybook/main.js`

## Publishing

- `npm run build` runs automatically before `npm publish` (via `prepublishOnly`)
- Only `dist/*` is included in npm package (see `files` in `package.json`)
