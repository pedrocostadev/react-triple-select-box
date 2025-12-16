import { memo } from "react";
import PropTypes from "prop-types";

import { parseSelection } from "./helpers";
import "./SelectBox.css";

const DEFAULT_ROWS_NUMBER = 10;

const SelectBox = ({
  id,
  title,
  options,
  numberOfLines,
  onSelect,
  classNames,
  SelectsProps,
  SelectOptionsProps,
}) => (
  <section className={classNames?.container ?? "select-box-container"}>
    <label htmlFor={id} className={classNames?.label ?? "select-box-label"}>
      {title}
    </label>
    <select
      id={id}
      aria-label={title || "Select options"}
      className={classNames?.select ?? "select-box"}
      {...SelectsProps}
      onChange={(ev) => onSelect(parseSelection(ev))}
      size={numberOfLines}
      multiple
    >
      {options.map(({ value, selected, label }) => (
        <option
          className={`${classNames?.selectOption ?? "select-box-option"}${
            selected
              ? ` ${
                  classNames?.selectOptionSelected ??
                  "select-box-option-selected"
                }`
              : ""
          }`}
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
  id: PropTypes.string,
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
  classNames: PropTypes.exact({
    container: PropTypes.string,
    label: PropTypes.string,
    select: PropTypes.string,
    selectOption: PropTypes.string,
    selectOptionSelected: PropTypes.string,
  }),
  SelectsProps: PropTypes.object,
  SelectOptionsProps: PropTypes.object,
};

SelectBox.defaultProps = {
  title: "",
  numberOfLines: DEFAULT_ROWS_NUMBER,
};

export default memo(SelectBox);
