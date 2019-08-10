export const getSelected = options => options.filter(({ selected }) => selected)
export const getUnselected =  options => options.filter(({ selected }) => !selected)

export const getOptions = options => ({
    left: options.left.map(({ selected, ...option }) => option),
    center: options.center.map(({ selected, ...option }) => option),
    right: options.right.map(({ selected, ...option }) => option)
})