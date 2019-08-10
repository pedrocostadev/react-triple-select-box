import React from 'react';
import PropTypes from 'prop-types';

import './SelectBoxControl.css'

const TO_RIGHT_ARROWS = ">>"
const TO_LEFT_ARROWS = "<<"

const SelectBoxControl = ({ styles, sendToLeft, sendToLeftDisabled, sendToRight, sendToRightDisabled  }) => {
	return (
		<section style={styles?.container} className="select-box-control-container">
			<input
				className="select-box-control-button"
        		style={styles?.button}
				onClick={sendToLeft}
				type="button"
				value={TO_LEFT_ARROWS}
				disabled={sendToLeftDisabled}
			/>
			<input
        		style={styles?.button}
				className="select-box-control-button"
				onClick={sendToRight}
				type="button"
				value={TO_RIGHT_ARROWS}
				disabled={sendToRightDisabled}
			/>
		</section>
	);
}

SelectBoxControl.propTypes = {
  styles: PropTypes.object,
  sendToLeft: PropTypes.func.isRequired,
  sendToLeftDisabled: PropTypes.bool,
  sendToRight: PropTypes.func.isRequired,
  sendToRightDisabled: PropTypes.bool
}

export default SelectBoxControl