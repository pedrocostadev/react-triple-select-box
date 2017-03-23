import React from 'react';
import { render } from 'react-dom';
// import TripleSelectBox from '../../src/TripleSelectBox.jsx';
import TripleSelectBox from '../../es/TripleSelectBox';

let Demo = React.createClass({

  _onChangeEx1(ex1LeftValues, ex1CenterValues, ex1RightValues) {
    this.setState({ ex1LeftValues, ex1CenterValues, ex1RightValues });
  },

  _onChangeEx2(ex2LeftValues, ex2CenterValues, ex2RightValues) {
    this.setState({ ex2LeftValues, ex2CenterValues, ex2RightValues });
  },

  _compareFn(valueToExclude, value) {
    return valueToExclude == value;
  },

  getInitialState() {
    return {
      ex1RightValues: [1, 2, 3, 4, 5],
      ex1LeftValues: [6, 7, 8, 9],
      ex1CenterValues: [10, 11, 12, 13, 14, 99],

      ex2RightValues: ["Apple", "Orange", "Apricot", "Avocado", "Beetroot", "Broccoli", "Carrot", "Clementine"],
      ex2LeftValues: ["Courgette", "Date", "Grape", "Garlic", "Fig", "Endive", "Fennel"],
      ex2CenterValues: ["Mango", "Lemon", "Leek", "Guava", "Mushroom", "Melon"],
    }
  },

  _renderExample1() {
    return <div>
      <h1>React Triple Select Box Example 1</h1>
      <TripleSelectBox
        id="triple-select-box-example"
        numberOfLines={7}
        leftValues={this.state.ex1LeftValues.sort((a, b) => a - b)}
        rightValues={this.state.ex1RightValues.sort((a, b) => a - b)}
        centerValues={this.state.ex1CenterValues.sort((a, b) => a - b)}
        onChange={this._onChangeEx1}
        titleRightBox="Right"
        titleLeftBox="Left"
        titleNonselectedBox="Center"
      />
    </div>
  },

  _renderExample2() {
    return <div>
      <h1>React Triple Select Box Example 2</h1>
      <TripleSelectBox
        id="triple-select-box-example"
        numberOfLines={7}
        leftValues={this.state.ex2LeftValues.sort()}
        rightValues={this.state.ex2RightValues.sort()}
        centerValues={this.state.ex2CenterValues.sort()}
        onChange={this._onChangeEx2}
        compareFn={this._compareFn}
        titleRightBox="Right"
        titleLeftBox="Left"
        titleNonselectedBox="Center"
        boxStyle={{ width: "100px" }}
      />
    </div>
  },

  render() {
    return (
      <div>
        { this._renderExample1() }
        { this._renderExample2() }
      </div>
    );
  },

})

render(<Demo/>, document.querySelector('#demo'))
