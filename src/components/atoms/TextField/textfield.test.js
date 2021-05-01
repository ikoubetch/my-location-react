import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from '../../../styles/theme'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the default component', () => {
    render(<TextField placeholder="input" />)

    expect(
      screen.getByRole('textbox')
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toHaveStyle({
      margin: `${theme.spacings.small} 0`,
      background: `${theme.colors.white}`,
      padding: `${theme.spacings.small}`,
      border: `1px solid ${theme.colors.border}`,
      'box-sizing': 'border-box',
      'border-radius': `${theme.border.radius}`,
      color: `${theme.colors.main}`,
    })
  })

  it('should update state', async () => {
    render(<TextField placeholder="input" />)

    const text = 'Ola mundo'

    const input = screen.getByRole('textbox')

    userEvent.type(input, text)

    await waitFor(() => expect(input).toHaveValue(text))

  })
})
