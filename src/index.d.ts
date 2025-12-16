import {
  ComponentType,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

/**
 * Represents an option item in the select box
 */
export interface Option {
  /** The value of the option (used as key and for identification) */
  value: string | number;
  /** The display label for the option. If not provided, value is used as label */
  label?: string;
  /** Whether the option is currently selected */
  selected?: boolean;
}

/**
 * Simplified option type - can be just a string or number
 */
export type OptionInput = string | number | Option;

/**
 * Output option type returned by onChange (without selected property)
 */
export interface OptionOutput {
  value: string | number;
  label?: string;
}

/**
 * The three lists configuration for options
 */
export interface TripleOptions<T> {
  /** Options in the left list */
  left: T[];
  /** Options in the center list */
  center: T[];
  /** Options in the right list */
  right: T[];
}

/**
 * Custom titles for each select box
 */
export interface Titles {
  /** Title for the left select box */
  left?: string;
  /** Title for the center select box */
  center?: string;
  /** Title for the right select box */
  right?: string;
}

/**
 * Number of visible lines for each select box
 */
export interface NumberOfLines {
  /** Number of visible lines in the left select box */
  left?: number;
  /** Number of visible lines in the center select box */
  center?: number;
  /** Number of visible lines in the right select box */
  right?: number;
}

/**
 * Custom class names for the SelectBox component
 */
export interface BoxClassNames {
  /** Class name for the box container */
  container?: string;
  /** Class name for the label element */
  label?: string;
  /** Class name for the select element */
  select?: string;
  /** Class name for option elements */
  selectOption?: string;
  /** Class name for selected option elements */
  selectOptionSelected?: string;
}

/**
 * Custom class names for the SelectBoxControl component
 */
export interface BoxControllerClassNames {
  /** Class name for the controller container */
  container?: string;
  /** Class name for the buttons */
  button?: string;
}

/**
 * Custom class names for all parts of the TripleSelectBox
 */
export interface ClassNames {
  /** Class name for the main container */
  container?: string;
  /** Class names for the SelectBox components */
  box?: BoxClassNames;
  /** Class names for the SelectBoxControl components */
  boxController?: BoxControllerClassNames;
}

/**
 * Props for the TripleSelectBox component
 */
export interface TripleSelectBoxProps {
  /**
   * Optional custom ID prefix for the component.
   * Used to generate unique IDs for accessibility (label-select associations).
   * If not provided, a unique ID will be auto-generated using React's useId hook.
   */
  id?: string;

  /**
   * The options for the three select boxes.
   * Each option can be a string, number, or an object with value, label, and selected properties.
   */
  options: TripleOptions<OptionInput>;

  /**
   * Callback fired when options are moved between lists.
   * Receives the current state of all three lists (without the selected property).
   */
  onChange: (options: TripleOptions<OptionOutput>) => void;

  /**
   * Custom titles for each select box.
   * Defaults to "Left", "Center", "Right".
   */
  titles?: Titles;

  /**
   * Number of visible lines (rows) for each select box.
   */
  numberOfLines?: NumberOfLines;

  /**
   * Custom class names for styling different parts of the component.
   */
  classNames?: ClassNames;

  /**
   * Additional props to pass to the button elements in SelectBoxControl.
   */
  ButtonsProps?: ButtonHTMLAttributes<HTMLButtonElement>;

  /**
   * Additional props to pass to the select elements.
   */
  SelectsProps?: SelectHTMLAttributes<HTMLSelectElement>;

  /**
   * Additional props to pass to the option elements.
   */
  SelectOptionsProps?: OptionHTMLAttributes<HTMLOptionElement>;
}

/**
 * A lightweight, dependency-free React component for rendering triple select boxes.
 * Users can move items between three lists (left, center, right) using control buttons.
 *
 * @example
 * ```tsx
 * import TripleSelectBox from 'react-triple-select-box';
 * import 'react-triple-select-box/dist/styles.css';
 *
 * function App() {
 *   const [options, setOptions] = useState({
 *     left: ['Option 1', 'Option 2'],
 *     center: ['Option 3'],
 *     right: ['Option 4', 'Option 5'],
 *   });
 *
 *   return (
 *     <TripleSelectBox
 *       options={options}
 *       onChange={(newOptions) => setOptions(newOptions)}
 *       titles={{ left: 'Available', center: 'Selected', right: 'Excluded' }}
 *     />
 *   );
 * }
 * ```
 */
declare const TripleSelectBox: ComponentType<TripleSelectBoxProps>;

export default TripleSelectBox;
