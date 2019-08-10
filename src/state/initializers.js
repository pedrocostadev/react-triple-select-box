export function initializer ({ initialValues, initialSelections }) {
  return {
    values: {
      ...initialValues
    },
    selections: {
      left: [],
      center: [],
      right: [],
      ...initialSelections
    }
  }
}
