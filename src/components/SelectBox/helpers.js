export const parseSelection = (ev) => {
  const selection = Array.from(ev.target.options).filter(option => option.selected).map(option => option.value)
  return selection
}
