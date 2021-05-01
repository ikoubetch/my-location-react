import React from 'react'
import { render, screen } from '@testing-library/react'

import theme from '../../../styles/theme'

import Form from '.'

describe('<Form />', () => {
  it('should render default form', () => {
    render(<Form data-testid="form" />)

    expect(
      screen.getByTestId('form')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('form')
    ).toHaveStyle({
      background: `${theme.colors.white}`,
      'min-width': '250px',
      'max-width': '500px',
      display: 'flex',
      'flex-direction': 'column',
      padding: `${theme.spacings.large}`,
      'border-radius': `${theme.border.radius}`,
    })
  })
})
