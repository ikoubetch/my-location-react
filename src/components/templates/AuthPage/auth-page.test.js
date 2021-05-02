import React from 'react'
import { render, screen } from '@testing-library/react'

import theme from '../../../styles/theme'

import AuthPage from '.'

describe('<AuthPage />', () => {
  it('should render default', () => {
    render(<AuthPage data-testid="page" />)

    expect(
      screen.getByTestId('page')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('page')
    ).toHaveStyle({
      background: `${theme.colors.main}`,
      width: '100%',
      height: '100%',
      position: 'fixed',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    })
  })
})
