import PropTypes from "prop-types";

import "./SelectBoxControl.css";

const TO_RIGHT_ARROWS = ">>";
const TO_LEFT_ARROWS = "<<";

const SelectBoxControl = ({
  classNames,
  sendToLeft,
  sendToLeftDisabled,
  sendToRight,
  sendToRightDisabled,
  sendToLeftLabel,
  sendToRightLabel,
  ButtonsProps,
}) => {
  return (
    <section
      className={classNames?.container ?? "select-box-control-container"}
      role="group"
      aria-label="Transfer controls"
    >
      <button
        type="button"
        className={classNames?.button ?? "select-box-control-button"}
        {...ButtonsProps}
        onClick={sendToLeft}
        disabled={sendToLeftDisabled}
        aria-label={sendToLeftLabel || "Move selected items left"}
      >
        {TO_LEFT_ARROWS}
      </button>
      <button
        type="button"
        className={classNames?.button ?? "select-box-control-button"}
        {...ButtonsProps}
        onClick={sendToRight}
        disabled={sendToRightDisabled}
        aria-label={sendToRightLabel || "Move selected items right"}
      >
        {TO_RIGHT_ARROWS}
      </button>
    </section>
  );
};

SelectBoxControl.propTypes = {
  classNames: PropTypes.exact({
    container: PropTypes.string,
    button: PropTypes.string,
  }),
  sendToLeft: PropTypes.func.isRequired,
  sendToLeftDisabled: PropTypes.bool,
  sendToRight: PropTypes.func.isRequired,
  sendToRightDisabled: PropTypes.bool,
  sendToLeftLabel: PropTypes.string,
  sendToRightLabel: PropTypes.string,
  ButtonsProps: PropTypes.object,
};

export default SelectBoxControl;
