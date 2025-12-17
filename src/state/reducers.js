import { ACTIONS } from "./actions";
import { getSelected, getUnselected } from "../selectors/";

export function reducer(state, action) {
  const { options } = state;

  switch (action.type) {
    case ACTIONS.LEFT_TO_CENTER: {
      const newLeftValues = getUnselected(options.left);
      const newCenterValues = options.center.concat(getSelected(options.left));
      return {
        options: {
          ...options,
          left: newLeftValues,
          center: newCenterValues,
        },
      };
    }
    case ACTIONS.CENTER_TO_LEFT: {
      const newCenterValues = getUnselected(options.center);
      const newLeftValues = options.left.concat(getSelected(options.center));
      return {
        options: {
          ...options,
          left: newLeftValues,
          center: newCenterValues,
        },
      };
    }
    case ACTIONS.RIGHT_TO_CENTER: {
      const newRightValues = getUnselected(options.right);
      const newCenterValues = options.center.concat(getSelected(options.right));
      return {
        options: {
          ...options,
          right: newRightValues,
          center: newCenterValues,
        },
      };
    }
    case ACTIONS.CENTER_TO_RIGHT: {
      const newCenterValues = getUnselected(options.center);
      const newRightValues = options.right.concat(getSelected(options.center));
      return {
        options: {
          ...options,
          right: newRightValues,
          center: newCenterValues,
        },
      };
    }
    case ACTIONS.SELECT_LEFT_VALUES: {
      return {
        options: {
          ...options,
          left: options.left.map(({ value }) => ({
            value,
            selected: action.valuesToSelect.includes(value),
          })),
        },
      };
    }
    case ACTIONS.SELECT_CENTER_VALUES: {
      return {
        options: {
          ...options,
          center: options.center.map(({ value }) => ({
            value,
            selected: action.valuesToSelect.includes(value),
          })),
        },
      };
    }
    case ACTIONS.SELECT_RIGHT_VALUES: {
      return {
        options: {
          ...options,
          right: options.right.map(({ value }) => ({
            value,
            selected: action.valuesToSelect.includes(value),
          })),
        },
      };
    }
    default:
      return state;
  }
}
