# react-triple-select-box

A simple, dependencies-free and dumb react component to render triple select boxes. Since version 2.0.0 requires React v16.8 or greater.

[![npm version](https://badge.fury.io/js/react-triple-select-box.svg)](https://badge.fury.io/js/react-triple-select-box)

| Statements                                    | Branches                                  | Functions                                   | Lines                               |
| --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |
| ![Statements](#statements# "Make me better!") | ![Branches](#branches# "Make me better!") | ![Functions](#functions# "Make me better!") | ![Lines](#lines# "Make me better!") |

![Screenshot](./img/demo.gif)

## How To use

#### CommonJS Import

```tsx
const TripleSelectBox = require("react-triple-select-box");
require("react-triple-select-box/dist/styles.css");
```

#### ES6 Import

```tsx
import TripleSelectBox from "react-triple-select-box";
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

#### TypeScript Example

```tsx
import { useState, useCallback } from "react";
import TripleSelectBox, {
  TripleOptions,
  OptionOutput,
} from "react-triple-select-box";
import "react-triple-select-box/dist/styles.css";

const initialOptions = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Cherry" },
  { value: "4", label: "Date" },
  { value: "5", label: "Elderberry" },
  { value: "6", label: "Fig" },
];

function App() {
  const [options, setOptions] = useState<TripleOptions<OptionOutput>>({
    left: initialOptions.slice(0, 2),
    center: initialOptions.slice(2, 4),
    right: initialOptions.slice(4),
  });

  const handleChange = useCallback(
    (newOptions: TripleOptions<OptionOutput>) => {
      setOptions(newOptions);
    },
    []
  );

  return (
    <TripleSelectBox
      options={options}
      onChange={handleChange}
      titles={{ left: "Available", center: "Selected", right: "Excluded" }}
    />
  );
}
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
