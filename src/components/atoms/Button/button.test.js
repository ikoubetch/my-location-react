import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from '../../../styles/theme'


import Button from '.'

describe('<Button />', () => {
  it('should render default button', () => {
    render(<Button />)

    expect(
      screen.getByRole('button')
    ).toBeInTheDocument()

    expect(screen.getByRole('button')).toHaveStyle({
      margin: `${theme.spacings.small} 0`,
      border: '0px',
      'background-color': `${theme.colors.primary}`,
      padding: `${theme.spacings.small} 0`,
      'border-radius': `${theme.border.radius}`,
      color: `${theme.colors.white}`,
      'font-weight': `${theme.font.weight.medium}`,
    })
  })

  it('Should be click', () => {
    const clickFn = jest.fn();
    render(<Button onClick={clickFn} />)

    const button = screen.getByRole('button');

    userEvent.click(button)

    expect(clickFn).toHaveBeenCalledTimes(1)
  })

})
