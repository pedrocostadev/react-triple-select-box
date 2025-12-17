import { useReducer, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import "./TripleSelectBox.css";
import SelectBox from "../../components/SelectBox";
import SelectBoxControl from "../../components/SelectBoxControl";
import { ACTIONS, reducer, initializer } from "../../state";
import { getOptions } from "../../selectors";
import { useUpdate } from "./useUpdate";

const DEFAULT_ID = "react-triple-select-box";

const TripleSelectBox = (props) => {
  const id = props.id ?? DEFAULT_ID;
  const [state, dispatch] = useReducer(reducer, props, initializer);

  const setLeftOptionsSelection = useCallback(
    (valuesToSelect) =>
      dispatch({ type: ACTIONS.SELECT_LEFT_VALUES, valuesToSelect }),
    []
  );
  const setCenterOptionsSelection = useCallback(
    (valuesToSelect) =>
      dispatch({ type: ACTIONS.SELECT_CENTER_VALUES, valuesToSelect }),
    []
  );
  const setRightOptionsSelection = useCallback(
    (valuesToSelect) =>
      dispatch({ type: ACTIONS.SELECT_RIGHT_VALUES, valuesToSelect }),
    []
  );

  const leftToCenter = useCallback(
    () => dispatch({ type: ACTIONS.LEFT_TO_CENTER }),
    []
  );
  const centerToLeft = useCallback(
    () => dispatch({ type: ACTIONS.CENTER_TO_LEFT }),
    []
  );
  const rightToCenter = useCallback(
    () => dispatch({ type: ACTIONS.RIGHT_TO_CENTER }),
    []
  );
  const centerToRight = useCallback(
    () => dispatch({ type: ACTIONS.CENTER_TO_RIGHT }),
    []
  );

  const currentOptions = useMemo(
    () => getOptions(state.options),
    [state.options]
  );

  useUpdate({
    deps: [currentOptions],
    onUpdate: () => props.onChange(currentOptions),
  });

  const leftTitle = props.titles?.left || "Left";
  const centerTitle = props.titles?.center || "Center";
  const rightTitle = props.titles?.right || "Right";

  const leftControlDisabled = useMemo(
    () => state.options.center.every(({ selected }) => !selected),
    [state.options.center]
  );
  const leftControlRightDisabled = useMemo(
    () => state.options.left.every(({ selected }) => !selected),
    [state.options.left]
  );
  const rightControlLeftDisabled = useMemo(
    () => state.options.right.every(({ selected }) => !selected),
    [state.options.right]
  );
  const rightControlRightDisabled = useMemo(
    () => state.options.center.every(({ selected }) => !selected),
    [state.options.center]
  );

  return (
    <section
      className={props.classNames?.container ?? "container"}
      role="group"
      aria-label="Triple select box"
    >
      <SelectBox
        id={`${id}-left`}
        SelectsProps={props.SelectsProps}
        SelectOptionsProps={props.SelectOptionsProps}
        title={props.titles?.left}
        numberOfLines={props.numberOfLines?.left}
        classNames={props.classNames?.box}
        onSelect={setLeftOptionsSelection}
        options={state.options.left}
      />
      <SelectBoxControl
        ButtonsProps={props.ButtonsProps}
        classNames={props.classNames?.boxController}
        sendToLeft={centerToLeft}
        sendToLeftDisabled={leftControlDisabled}
        sendToLeftLabel={`Move selected from ${centerTitle} to ${leftTitle}`}
        sendToRight={leftToCenter}
        sendToRightDisabled={leftControlRightDisabled}
        sendToRightLabel={`Move selected from ${leftTitle} to ${centerTitle}`}
      />
      <SelectBox
        id={`${id}-center`}
        SelectsProps={props.SelectsProps}
        SelectOptionsProps={props.SelectOptionsProps}
        title={props.titles?.center}
        numberOfLines={props.numberOfLines?.center}
        classNames={props.classNames?.box}
        onSelect={setCenterOptionsSelection}
        options={state.options.center}
      />
      <SelectBoxControl
        ButtonsProps={props.ButtonsProps}
        classNames={props.classNames?.boxController}
        sendToLeft={rightToCenter}
        sendToLeftDisabled={rightControlLeftDisabled}
        sendToLeftLabel={`Move selected from ${rightTitle} to ${centerTitle}`}
        sendToRight={centerToRight}
        sendToRightDisabled={rightControlRightDisabled}
        sendToRightLabel={`Move selected from ${centerTitle} to ${rightTitle}`}
      />
      <SelectBox
        id={`${id}-right`}
        SelectsProps={props.SelectsProps}
        SelectOptionsProps={props.SelectOptionsProps}
        title={props.titles?.right}
        numberOfLines={props.numberOfLines?.right}
        classNames={props.classNames?.box}
        onSelect={setRightOptionsSelection}
        options={state.options.right}
      />
    </section>
  );
};

const Option = PropTypes.exact({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string,
  selected: PropTypes.bool,
});

TripleSelectBox.propTypes = {
  id: PropTypes.string,
  options: PropTypes.exact({
    left: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, Option])
    ).isRequired,
    center: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, Option])
    ).isRequired,
    right: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, Option])
    ).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  titles: PropTypes.exact({
    left: PropTypes.string,
    center: PropTypes.string,
    right: PropTypes.string,
  }),
  numberOfLines: PropTypes.exact({
    left: PropTypes.number,
    center: PropTypes.number,
    right: PropTypes.number,
  }),
  classNames: PropTypes.exact({
    container: PropTypes.string,
    box: PropTypes.exact({
      container: PropTypes.string,
      label: PropTypes.string,
      select: PropTypes.string,
      selectOption: PropTypes.string,
      selectOptionSelected: PropTypes.string,
    }),
    boxController: PropTypes.exact({
      container: PropTypes.string,
      button: PropTypes.string,
    }),
  }),
  ButtonsProps: PropTypes.object,
  SelectsProps: PropTypes.object,
  SelectOptionsProps: PropTypes.object,
};

export default TripleSelectBox;
