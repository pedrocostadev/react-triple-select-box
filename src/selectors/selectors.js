export const getSelected = (options) =>
  options.filter(({ selected }) => selected);
export const getUnselected = (options) =>
  options.filter(({ selected }) => !selected);

const omitSelected = ({ selected: _, ...option }) => option; // eslint-disable-line no-unused-vars

export const getOptions = (options) => ({
  left: options.left.map(omitSelected),
  center: options.center.map(omitSelected),
  right: options.right.map(omitSelected),
});
