import React from 'react'
import { storiesOf } from '@storybook/react'
import TripleSelectBox from '../dist'

storiesOf('TripleSelectBox', module)
  .add('Basic example', () => {
    const options = {
      left: ['Courgette', 'Date', 'Grape', 'Garlic', 'Fig', 'Endive', 'Fennel'],
      center: ['Mango', 'Lemon', 'Leek', 'Guava', 'Mushroom', 'Melon'],
      right: ['Apple', 'Orange', 'Apricot', 'Avocado', 'Beetroot', 'Broccoli', 'Carrot', 'Clementine']
    }

    return (
      <div className="App">
        <h3>React Triple Select Box Example</h3>
        <TripleSelectBox
          options={options}
          onChange={options => {
            console.log('onChange', options)
          }}
        />
      </div>

    )
  })
  .add('With initial selection', () => {
    const options = {
      left: [ { value: 'left value', selected: true }, { value: 'left value 2', selected: false } ],
      center: [ { value: 'center value', selected: true }, { value: 'center value 2', selected: false } ],
      right: [ { value: 'right value', selected: false }, { value: 'right value 2', selected: false } ],
    }

    return (
      <div className="App">
        <h3>React Triple Select Box Example</h3>
        <TripleSelectBox
          options={options}
          titles={{
            left: 'Left',
            center: 'Center',
            right: 'Right' 
          }}
          onChange={options => {
            console.log('onChange', options)
          }}
        />
      </div>

    )
  })

