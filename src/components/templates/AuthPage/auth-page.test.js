import React from 'react'
import { render, screen } from '@testing-library/react'

import AuthPage from '.'

describe('<AuthPage />', () => {
  it('should render the heading', () => {
    render(<AuthPage />)

    expect(
      screen.getByRole('heading', { name: /AuthPage/i })
    ).toBeInTheDocument()
  })
})
