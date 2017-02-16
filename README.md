# react-triple-select-box
A very simple and dumb react component to render triple select boxes.

## How To use

### Import

#### CommonJS
	var Alert = require('react-triple-select-box/lib/TripleSelectBox');
	// or
	var Alert = require('react-triple-select-box').TripleSelectBox;
#### ES6
	Es6 modules aren't supported natively yet, but you can use the syntax now with the help of a transpiler like Babel.

	import Button from 'react-triple-select-box/lib/TripleSelectBox';
	// or
	import { TripleSelectBox } from 'react-triple-select-box';

### Simple example

	class App extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      rightValues: [1, 2, 3, 4, 5],
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
