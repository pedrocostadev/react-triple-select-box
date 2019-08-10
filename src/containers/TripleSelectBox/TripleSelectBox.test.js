import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import TripleSelectBox from './'

describe('<TripleSelectBox />', () => {
  afterEach(cleanup)

  it('should render the options', () => {
    const props = {
      initialValues: {
        left: ['Courgette', 'Date', 'Grape', 'Garlic', 'Fig', 'Endive', 'Fennel'],
        center: ['Mango', 'Lemon', 'Leek', 'Guava', 'Mushroom', 'Melon'],
        right: ['Apple', 'Orange', 'Apricot', 'Avocado', 'Beetroot', 'Broccoli', 'Carrot', 'Clementine']
      },
      onChange: () => {}
    }

    const { container } = render(<TripleSelectBox {...props} />)
    const selects = container.querySelectorAll('select')
    expect(selects).toHaveLength(3)
    expect(
      Array.from(selects[0].children).every((child) => props.initialValues.left.includes(child.value))
    ).toBeTruthy()
    expect(
      Array.from(selects[1].children).every((child) => props.initialValues.center.includes(child.value))
    ).toBeTruthy()
    expect(
      Array.from(selects[2].children).every((child) => props.initialValues.right.includes(child.value))
    ).toBeTruthy()
  })

  it('should render the box titles', () => {
    const props = {
      initialValues: {
        left: ['Courgette', 'Date', 'Grape', 'Garlic', 'Fig', 'Endive', 'Fennel'],
        center: ['Mango', 'Lemon', 'Leek', 'Guava', 'Mushroom', 'Melon'],
        right: ['Apple', 'Orange', 'Apricot', 'Avocado', 'Beetroot', 'Broccoli', 'Carrot', 'Clementine']
      },
      titles: {
        left: 'left box',
        center: 'center box',
        right: 'right box'
      },
      onChange: () => {}
    }

    const { container } = render(<TripleSelectBox {...props} />)
    const labels = container.querySelectorAll('label')

    expect(labels).toHaveLength(3)
    expect(labels[0].textContent).toBe('left box')
    expect(labels[1].textContent).toBe('center box')
    expect(labels[2].textContent).toBe('right box')
  })

  it('should be capable of send values from left to center and vice-versa', () => {
    const props = {
      initialValues: {
        left: ['a left box value'],
        center: ['3'],
        right: ['5']
      },
      onChange: jest.fn()
    }

    const { container, getAllByText } = render(<TripleSelectBox {...props} />)
    const [leftToCenterButton] = getAllByText('>>')
    const [centerToLeftButton] = getAllByText('<<')
    const [leftSelect, centerSelect] = container.querySelectorAll('select')

    fireEvent.change(leftSelect, { target: { value: 'a left box value' } })
    fireEvent.click(leftToCenterButton)

    expect(Array.from(centerSelect.children).some((child) => child.value === 'a left box value')).toBeTruthy()
    expect(props.onChange).toBeCalledTimes(1)
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: ['3', 'a left box value'],
      left: [],
      right: ['5']
    })

    fireEvent.change(centerSelect, { target: { value: '3' } })
    fireEvent.click(centerToLeftButton)

    expect(Array.from(leftSelect.children).some((child) => child.value === '3')).toBeTruthy()
    expect(props.onChange).toBeCalledTimes(2)
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: ['a left box value'],
      left: ['3'],
      right: ['5']
    })
  })

  it('should be capable of send values from right to center and vice-versa', () => {
    const props = {
      initialValues: {
        left: ['a left box value'],
        center: ['3'],
        right: ['5']
      },
      onChange: jest.fn()
    }

    const { container, getAllByText } = render(<TripleSelectBox {...props} />)
    const [, centerToRightButton] = getAllByText('>>')
    const [, rightToCenterButton] = getAllByText('<<')
    const [, centerSelect, rightSelect] = container.querySelectorAll('select')

    fireEvent.change(rightSelect, { target: { value: '5' } })
    fireEvent.click(rightToCenterButton)

    expect(Array.from(centerSelect.children).some((child) => child.value === '5')).toBeTruthy()
    expect(props.onChange).toBeCalledTimes(1)
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: ['3', '5'],
      left: ['a left box value'],
      right: []
    })

    fireEvent.change(centerSelect, { target: { value: '3' } })
    fireEvent.click(centerToRightButton)

    expect(Array.from(rightSelect.children).some((child) => child.value === '3')).toBeTruthy()
    expect(props.onChange).toBeCalledTimes(2)
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: ['5'],
      left: ['a left box value'],
      right: ['3']
    })
  })
})
