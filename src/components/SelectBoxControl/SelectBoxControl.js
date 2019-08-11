import React from 'react';
import PropTypes from 'prop-types';

import './SelectBoxControl.css'

const TO_RIGHT_ARROWS = ">>"
const TO_LEFT_ARROWS = "<<"

const SelectBoxControl = ({ styles, sendToLeft, sendToLeftDisabled, sendToRight, sendToRightDisabled, ButtonsProps  }) => {
	return (
		<section style={styles?.container} className="select-box-control-container">
			<button
				className="select-box-control-button"
        style={styles?.button}
				{...ButtonsProps}
				onClick={sendToLeft}
				disabled={sendToLeftDisabled}
			>
				{TO_LEFT_ARROWS}
			</button>
			<button
        style={styles?.button}
				className="select-box-control-button"
        {...ButtonsProps}
				onClick={sendToRight}
				disabled={sendToRightDisabled}
			>
				{TO_RIGHT_ARROWS}
			</button>
		</section>
	);
}

SelectBoxControl.propTypes = {
  styles: PropTypes.object,
  sendToLeft: PropTypes.func.isRequired,
  sendToLeftDisabled: PropTypes.bool,
  sendToRight: PropTypes.func.isRequired,
  sendToRightDisabled: PropTypes.bool,
  ButtonsProps: PropTypes.object
}

export default SelectBoxControl