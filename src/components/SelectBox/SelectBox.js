import React from 'react';
import PropTypes from 'prop-types';

import { parseSelection } from './helpers'
import './SelectBox.css'

const DEFAULT_ROWS_NUMBER = 10

const SelectBox = ({ title, values, numberOfLines, onSelect, styles }) => {
	return (
		<section style={styles?.container} className="select-box-container" >
			<label className="select-box-label" style={styles?.label}>{title}</label>
			<select
				className="select-box"
				style={styles?.select}
				onChange={ev => onSelect(parseSelection(ev))}
				size={numberOfLines}
				multiple
			>
				{values.map((value) => (
					<option
						className="select-box-option"
						style={styles?.selectOption}
						key={value}
						value={value}
					>
						{value}
					</option>
				))}
			</select>
		</section>
	);
};

SelectBox.propTypes = {
	title: PropTypes.string,
	values: PropTypes.array.isRequired,
	numberOfLines: PropTypes.number,
	onSelect: PropTypes.func.isRequired,
	styles: PropTypes.object
}

SelectBox.defaultProps = {
	title: '',
	numberOfLines: DEFAULT_ROWS_NUMBER,
}

export default SelectBox