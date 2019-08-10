import React from 'react'
import { storiesOf } from '@storybook/react'
import TripleSelectBox from '../dist'

storiesOf('TripleSelectBox', module)
  .add('Basic example', () => {
    const initialValues = {
      left: ['Courgette', 'Date', 'Grape', 'Garlic', 'Fig', 'Endive', 'Fennel'],
      center: ['Mango', 'Lemon', 'Leek', 'Guava', 'Mushroom', 'Melon'],
      right: ['Apple', 'Orange', 'Apricot', 'Avocado', 'Beetroot', 'Broccoli', 'Carrot', 'Clementine']
    }

    return (
      <div className="App">
        <h3>React Triple Select Box Example</h3>
        <TripleSelectBox
          initialValues={initialValues}
          onChange={values => {
            console.log({ values })
          }}
        />
      </div>

    )
  })
