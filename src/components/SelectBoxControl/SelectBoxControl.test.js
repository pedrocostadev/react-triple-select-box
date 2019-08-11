import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import SelectBoxControl from './'

describe('<SelectBoxControl />', () => {
  afterEach(cleanup)

  it('should render the controls', () => {
    const props = {
      sendToRight: () => {},
      sendToLeft: () => {}
    }

    const { container, getAllByText } = render(<SelectBoxControl {...props} />)
    const buttons = container.querySelectorAll('button')
    expect(buttons).toHaveLength(2)
    expect(getAllByText('<<')).toHaveLength(1)
    expect(getAllByText('>>')).toHaveLength(1)
  })

  it('should disabled buttons according props', () => {
    const props = {
      sendToLeft: () => {},
      sendToLeftDisabled: false,
      sendToRight: () => {},
      sendToRightDisabled: true
    }

    const { container } = render(<SelectBoxControl {...props} />)
    const [sendToLeftButton, sendToRightButton] = container.querySelectorAll('button')

    expect(sendToLeftButton.disabled).toBeFalsy()
    expect(sendToRightButton.disabled).toBeTruthy()
  })

  it('should call sendToLeft and sendToRight methods on click', () => {
    const props = {
      sendToLeft: jest.fn(),
      sendToRight: jest.fn()
    }

    const { container } = render(<SelectBoxControl {...props} />)
    const [sendToLeftButton, sendToRightButton] = container.querySelectorAll('button')

    fireEvent.click(sendToLeftButton)
    expect(props.sendToLeft).toBeCalledTimes(1)

    fireEvent.click(sendToRightButton)
    expect(props.sendToRight).toBeCalledTimes(1)
  })
})
