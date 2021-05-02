import React from 'react'
import { render, screen } from '@testing-library/react'

import theme from '../../../styles/theme'

import Loader from '.'

describe('<Loader />', () => {
  it('should render default loader', () => {
    render(<Loader data-testid="loader-component" />)

    expect(
      screen.getByTestId('loader-component')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('loader-component')
    ).toHaveStyle({
      border: `16px solid ${theme.colors.white}`,
      'border-top': `16px solid ${theme.colors.primary}`,
      'border-radius': '50%',
      width: '120px',
      height: '120px',
      animation: 'spin 2s linear infinite',
      position: 'absolute',
      'z-index': 1,
      top: '30%',
      left: '45%',
    })
  })
})
