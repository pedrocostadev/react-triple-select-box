import React from 'react';
import { render } from 'react-dom';
import TripleSelectBox from '../../src/TripleSelectBox.jsx';

let Demo = React.createClass({

  _onChange(leftValues, centerValues, rightValues) {
    this.setState({ leftValues, centerValues, rightValues });
  },

  getInitialState() {
    return {
      rightValues: [1, 2, 3, 4, 5],
      leftValues: [6, 7, 8, 9],
      centerValues: [10, 11, 12, 13, 14, 99],
    }
  },

  render() {
    return <div>
      <h1>react-triple-select-box Demo</h1>
      <TripleSelectBox
        id="triple-select-box-example"
        numberOfLines={7}
        leftValues={this.state.leftValues.sort((a, b) => a - b)}
        rightValues={this.state.rightValues.sort((a, b) => a - b)}
        centerValues={this.state.centerValues.sort((a, b) => a - b)}
        onChange={this._onChange}
        titleRightBox="Right"
        titleLeftBox="Left"
        titleNonselectedBox="Center"
      />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
