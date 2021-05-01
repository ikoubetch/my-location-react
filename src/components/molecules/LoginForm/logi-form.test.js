import React from 'react'
import { render, screen } from '@testing-library/react'

import LoginForm from '.'

describe('<LoginForm />', () => {
  it('should render the heading', () => {
    render(<LoginForm />)

    expect(
      screen.getByRole('heading', { name: /LoginForm/i })
    ).toBeInTheDocument()
  })
})
