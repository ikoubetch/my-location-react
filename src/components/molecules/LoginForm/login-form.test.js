import React from 'react'
import { render, screen } from '@testing-library/react'

import LoginForm from '.'

describe('<LoginForm />', () => {
  it('should render the heading', () => {
    render(<LoginForm />)

    expect(
      screen.getByRole('textbox', { name: /email/i })
    ).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText("Senha")
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /ACESSAR/i })
    ).toBeInTheDocument()
  })
})
