import PropTypes from "prop-types";

import { parseSelection } from "./helpers";
import "./SelectBox.css";

const DEFAULT_ROWS_NUMBER = 10;

const SelectBox = ({
  title,
  options,
  numberOfLines,
  onSelect,
  styles,
  SelectsProps,
  SelectOptionsProps,
}) => (
  <section style={styles?.container} className="select-box-container">
    <label className="select-box-label" style={styles?.label}>
      {title}
    </label>
    <select
      className="select-box"
      style={styles?.select}
      {...SelectsProps}
      onChange={(ev) => onSelect(parseSelection(ev))}
      size={numberOfLines}
      multiple
    >
      {options.map(({ value, selected, label }) => (
        <option
          className={`select-box-option${
            selected ? " select-box-option-selected" : ""
          }`}
          style={styles?.selectOption}
          {...SelectOptionsProps}
          key={value}
          value={value}
        >
          {label ? label : value}
        </option>
      ))}
    </select>
  </section>
);

SelectBox.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      label: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  numberOfLines: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  styles: PropTypes.object,
  SelectsProps: PropTypes.object,
  SelectOptionsProps: PropTypes.object,
};

SelectBox.defaultProps = {
  title: "",
  numberOfLines: DEFAULT_ROWS_NUMBER,
};

export default SelectBox;
