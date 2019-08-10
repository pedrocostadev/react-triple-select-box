import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import SelectBox from './'

describe('<SelectBox />', () => {
  afterEach(cleanup)

  it('should render the options', () => {
    const props = {
      values: ['1', '2'],
      onSelect: () => {}
    }

    const { container } = render(<SelectBox {...props} />)
    const select = container.querySelector('select')

    expect(select.children).toHaveLength(props.values.length)
    expect(Array.from(select.children).every(child => props.values.includes(child.value))).toBeTruthy()
  })

  it('should render the number of lines according props', () => {
    const props = {
      numberOfLines: 60,
      values: ['1', '2'],
      onSelect: () => {}
    }

    const { container } = render(<SelectBox {...props} />)
    const select = container.querySelector('select')
    expect(select.size).toBe(props.numberOfLines)
  })

  it('should call onSelection on options click', () => {
    const props = {
      values: ['1', '2', '3'],
      onSelect: jest.fn()
    }

    const { container } = render(<SelectBox {...props} />)
    const select = container.querySelector('select')

    fireEvent.change(select, { target: { value: '1' } })
    expect(props.onSelect).toBeCalledTimes(1)
    expect(props.onSelect).toHaveBeenLastCalledWith(['1'])
  })

  it('should render the label', () => {
    const props = {
      title: 'The box',
      values: ['1', '2', '3'],
      onSelect: () => {}
    }

    const { getByText } = render(<SelectBox {...props} />)
    expect(getByText('The box')).toBeTruthy()
  })
})
