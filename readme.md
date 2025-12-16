# react-triple-select-box

A simple, dependencies-free and dumb react component to render triple select boxes. Since version 2.0.0 requires React v16.8 or greater.

[![npm version](https://badge.fury.io/js/react-triple-select-box.svg)](https://badge.fury.io/js/react-triple-select-box)
[![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue.svg)](https://www.typescriptlang.org/)

| Statements                                                                                      | Branches                                                                                      | Functions                                                                                    | Lines                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-98.88%25-brightgreen.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-92.86%25-brightgreen.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-98.7%25-brightgreen.svg "Make me better!") |

![Screenshot](./img/demo.gif)

## How To use

#### CommonJS Import

```js
const TripleSelectBox = require("react-triple-select-box");
require("react-triple-select-box/dist/styles.css");
```

#### ES6 Import

```js
import TripleSelectBox from "react-triple-select-box";
import "react-triple-select-box/dist/styles.css";
```

#### TypeScript

This package includes TypeScript type definitions out of the box. You get full autocomplete and type checking when using this component in TypeScript projects.

```tsx
import TripleSelectBox, {
  TripleSelectBoxProps,
  Option,
} from "react-triple-select-box";
import "react-triple-select-box/dist/styles.css";
```

> **Note:** The styles import is required to apply the default styling. If you prefer to use your own styles, you can skip the CSS import and use the `classNames` prop to apply custom classes.

#### Props

##### Valid option formats

- Object:

```js
    {
        /* MANDATORY */
        value, // oneOfType: [ number, string ]
        /* OPTIONAL */
        label, // string
        /* OPTIONAL */
        selected, // boolean
    }
```

- String or Number:

```js
"A valid option";
12;
```

##### All props

```js
    {
        /* OPTIONAL */
        id, // Custom ID prefix for accessibility (string). Auto-generated if not provided.
        /* MANDATORY */
        options: {
            left, // Array of options to be rendered on left select box
            center, // Array of options to be rendered on center select box
            right // Array of options to be rendered on right select box
        },
        /* MANDATORY */
        onChange: ({ left, center, right }) => {} // Callback invoked on values changes
        /* OPTIONAL */
        titles: {
            left, //  Left Select Box Tile (string)
            center, // Center Select Box Tile (string)
            right // Right Select Box Tile (string)
        },
        /* OPTIONAL */
        numberOfLines: {
            left, //  Left Select Box size (number)
            center, // Center Select Box size (number)
            right // Right Select Box size (number)
        },
        /* OPTIONAL */
        classNames: {
            container, // Root container CSS class (string)
            box: {
                container, // Select box containers CSS class (string)
                label, // Select box labels CSS class (string)
                select, // Select Boxes CSS class (string)
                selectOption, // Select Options CSS class (string)
                selectOptionSelected // Selected Options CSS class (string)
            },
            boxController: {
                container, // Select box controller container CSS class (string)
                button // Button controller CSS class (string)
            }
        },
        /* OPTIONAL */
        ButtonsProps, // Props injected in the four button elements. You can overwrite style and className with that. (Object)
        /* OPTIONAL */
        SelectsProps, // Props injected in the three select elements. You can overwrite style and className with that. (Object)
        /* OPTIONAL */
        SelectOptionsProps // Props injected in the select options elements. You can overwrite style and className with that. (Object)
    }
```

#### Examples

```js
<TripleSelectBox
  options={{
    left: ["Courgette", "Date", "Grape"],
    center: ["Mango", "Lemon", "Leek"],
    right: ["Apple", "Orange"],
  }}
  onChange={({ left, center, right }) => {
    console.log({ left, center, right });
  }}
/>
```

```js
<TripleSelectBox
  options={{
    left: [
      { value: "Courgette", selected: true, label: "cgt" },
      { value: "Date" },
    ],
    center: [{ value: "Mango" }],
    right: [{ value: "Apple" }, { value: "Orange" }],
  }}
  onChange={(values) => {
    console.log({ values });
  }}
/>
```

#### Accessibility

This component is built with accessibility in mind:

- **Labels are associated with selects** - Each `<label>` is properly connected to its `<select>` via `htmlFor`/`id` attributes
- **Descriptive button labels** - Transfer buttons have `aria-label` attributes describing their action (e.g., "Move selected from Left to Center")
- **Semantic structure** - Uses `role="group"` and `aria-label` on container sections for better screen reader context
- **Keyboard navigation** - Fully navigable via keyboard using native HTML elements
- **Button types** - All buttons have `type="button"` to prevent unintended form submissions

Screen reader users will hear meaningful descriptions instead of just ">>" or "<<" when navigating the transfer buttons.

#### Contributions

Contributions are welcome, just open a PR and contact me :-).
