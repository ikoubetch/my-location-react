import React from 'react'
import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the heading', () => {
    render(<Loader />)

    expect(
      screen.getByRole('heading', { name: /Loader/i })
    ).toBeInTheDocument()
  })
})
