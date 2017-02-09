# react-triple-select-box
A very simple triple-select-box react component.


## How To use


### Import
	import TripleSelectBox from 'TripleSelectBox';

### Create component

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
