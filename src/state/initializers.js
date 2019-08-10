import { isObject } from './helpers'

export const initializer = ({ options }) => ({
  options: {
    left: options.left.map(value => ({
      selected: isObject(value) && value.selected,
      ...(isObject(value) ? value : { value })
    })),
    center: options.center.map(value => ({
      selected: isObject(value) && value.selected,
      ...(isObject(value) ? value : { value })
    })),
    right: options.right.map(value => ({
      selected: isObject(value) && value.selected,
      ...(isObject(value) ? value : { value })
    }))
  }
})
