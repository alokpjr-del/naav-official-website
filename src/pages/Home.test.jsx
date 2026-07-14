import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('renders the hero headline and tagline', () => {
    render(<Home />)
    expect(
      screen.getByText("Kundapura's Own Delivery App")
    ).toBeInTheDocument()
    expect(screen.getByText(/Fast Local Delivery/)).toBeInTheDocument()
  })

  it('renders the hero call-to-action buttons', () => {
    render(<Home />)
    expect(
      screen.getByRole('button', { name: 'Download App' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Become Partner/ })
    ).toBeInTheDocument()
  })

  it('renders all four services in the services section', () => {
    render(<Home />)
    ;[
      'Food Delivery',
      'Grocery Delivery',
      'Medicine Delivery',
      'Parcel Delivery',
    ].forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument()
    })
  })

  it('renders the four "Why Choose" highlights', () => {
    render(<Home />)
    ;[
      'Fast Delivery',
      'Trusted Local Partners',
      'Affordable Charges',
      'Customer Support',
    ].forEach((item) => {
      expect(
        screen.getByRole('heading', { name: item })
      ).toBeInTheDocument()
    })
  })
})
