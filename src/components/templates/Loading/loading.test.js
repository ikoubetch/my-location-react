import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    render(<Loading />)

    expect(
      screen.getByRole('heading', { name: /Loading/i })
    ).toBeInTheDocument()
  })
})
