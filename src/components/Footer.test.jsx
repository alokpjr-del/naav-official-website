import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the brand name and tagline', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { name: 'NAAV Delivery' })
    ).toBeInTheDocument()
    expect(
      screen.getByText("Kundapura's Own Delivery App")
    ).toBeInTheDocument()
  })

  it('renders inside a contentinfo (footer) landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
