import React, { Component } from 'react';
import './App.css';

import TripleSelectBox from './Components/TripleSelectBox/TripleSelectBox.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightValues: [1, 2, 3, 4, 5, 23, 34, 67, 78, 79, 67],
      leftValues: [6, 7, 8, 9],
      centerValues: [10, 11, 12, 13, 14],
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(leftValues, centerValues, rightValues) {
    this.setState({ leftValues, centerValues, rightValues });
  }

  render() {
    return (
      <div className="App">
        <TripleSelectBox
  				id="triple-select-box-example"
          numberOfLines={7}
  				leftValues={this.state.leftValues.sort((a, b) => a - b)}
  				rightValues={this.state.rightValues.sort((a, b) => a - b)}
  				centerValues={this.state.centerValues.sort((a, b) => a - b)}
  				onChange={this._onChange}
  				titleRightBox="Right"
  				titleLeftBox="Left"
  				titleNonselectedBox="Unselected"
			/>
      </div>
    );
  }
}

export default App;
