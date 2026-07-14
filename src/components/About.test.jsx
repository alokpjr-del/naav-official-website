import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders the about section tag and heading', () => {
    render(<About />)
    expect(screen.getByText('ABOUT NAAV')).toBeInTheDocument()
    expect(screen.getByText(/Kundapura's Trusted/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About NAAV')).toBeInTheDocument()
  })

  it('renders the four highlight cards', () => {
    render(<About />)
    ;[
      'Fast Delivery',
      'Local Stores',
      'Affordable Pricing',
      'Customer First',
    ].forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument()
    })
  })

  it('renders the explore and contact links', () => {
    render(<About />)
    expect(
      screen.getByRole('link', { name: 'Explore Services' })
    ).toHaveAttribute('href', '#services')
    expect(
      screen.getByRole('link', { name: 'Contact Us' })
    ).toHaveAttribute('href', '#contact')
  })
})
