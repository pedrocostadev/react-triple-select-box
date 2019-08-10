# react-triple-select-box
A simple, dependencies-free and dumb react component to render triple select boxes. Since version 2.0.0 requires React v16.8 or greater.

![Screenshot](./img/demo.gif)

## How To use

#### CommonJS Import
	const TripleSelectBox = require('react-triple-select-box')
#### ES6 Import
	import TripleSelectBox from 'react-triple-select-box'
#### Props
```js
    initialValues: {
        left, // Array of initial values to be rendered on left select box
        center, // Array of initial values to be rendered on center select box
        right // Array of initial values to be rendered on right select box
    },
    initialSelections: {
        left, // Array of initial selected values on left select box
        center, // Array of initial selected values on center select box
        right // Array of initial selected values on right select box
    },
    titles: {
        left, //  Left Select Box Tile
        center, // Center Select Box Tile
        right // Right Select Box Tile
    },
    numberOfLines: {
        left, //  Left Select Box size
        center, // Center Select Box size
        right // Right Select Box size
    },
    styles: {
        container, // Root container style
        box: {
            label, // Select box labels style,
            container, // Select box containers style
            select, // Select Boxes styles
            selectOption // Select Options style
        },
        boxController: {
            container, // Select box controller container style
            button // Button controller style
        }
    },
    onChange: ({ left, center, right }) => {} // Callback invoked on values changes
```
#### Example
```js
	<TripleSelectBox
    	initialValues={{
            left: ['Courgette', 'Date', 'Grape', 'Garlic', 'Fig', 'Endive', 'Fennel'],
            center: ['Mango', 'Lemon', 'Leek', 'Guava', 'Mushroom', 'Melon'],
            right: ['Apple', 'Orange', 'Apricot', 'Avocado', 'Beetroot', 'Broccoli', 'Carrot', 'Clementine']
        }}
        onChange={values => {
        	console.log({ values })
        }}
    />
```

#### Contributions
Contributions are welcome, just open a PR and contact me :-).

