import { ACTIONS } from './actions'

export function reducer (state, action) {
  const { values, selections } = state

  switch (action.type) {
    case ACTIONS.LEFT_TO_CENTER: {
      const newLeftValues = values.left.filter((value) => !selections.left.includes(value))
      const newCenterValues = values.center.concat(selections.left)
      return {
        values: {
          ...values,
          left: newLeftValues,
          center: newCenterValues
        },
        selections: {
          ...selections,
          left: []
        }
      }
    }
    case ACTIONS.CENTER_TO_LEFT: {
      const newCenterValues = values.center.filter((value) => !selections.center.includes(value))
      const newLeftValues = values.left.concat(selections.center)
      return {
        values: {
          ...values,
          left: newLeftValues,
          center: newCenterValues
        },
        selections: {
          ...selections,
          center: []
        }
      }
    }
    case ACTIONS.RIGTH_TO_CENTER: {
      const newRightValues = values.right.filter((value) => !selections.right.includes(value))
      const newCenterValues = values.center.concat(selections.right)
      return {
        values: {
          ...values,
          right: newRightValues,
          center: newCenterValues
        },
        selections: {
          ...selections,
          right: []
        }
      }
    }
    case ACTIONS.CENTER_TO_RIGHT: {
      const newCenterValues = values.center.filter((value) => !selections.center.includes(value))
      const newRightValues = values.right.concat(selections.center)
      return {
        values: {
          ...values,
          right: newRightValues,
          center: newCenterValues
        },
        selections: {
          ...selections,
          center: []
        }
      }
    }
    case ACTIONS.SELECT_LEFT_VALUES: {
      return {
        values,
        selections: {
          ...selections,
          left: action.valuesToSelect
        }
      }
    }
    case ACTIONS.SELECT_CENTER_VALUES: {
      return {
        values,
        selections: {
          ...selections,
          center: action.valuesToSelect
        }
      }
    }
    case ACTIONS.SELECT_RIGHT_VALUES: {
      return {
        values,
        selections: {
          ...selections,
          right: action.valuesToSelect
        }
      }
    }
    default:
      return state
  }
}
