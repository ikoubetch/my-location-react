import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from '.'

describe('<Header />', () => {
  it('should render default header', () => {
    render(<Header />)

    expect(
      screen.getByRole('button', { name: /SAIR/i })
    ).toBeInTheDocument()
  })

  it('should chick button', () => {
    const clickFn = jest.fn();
    render(<Header onClick={clickFn} />)

    const button = screen.getByRole('button', { name: /SAIR/i })

    userEvent.click(button)

    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
