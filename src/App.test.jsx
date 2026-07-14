import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Restaurants.jsx currently ships no component (empty module), which would
// throw when App renders it. Stub it so App can be unit-tested in isolation.
vi.mock('./components/Restaurants', () => ({
  default: () => <section data-testid="restaurants" />,
}))

import App from './App'

describe('App', () => {
  it('renders the top-level app container', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.App')).toBeInTheDocument()
  })

  it('renders the navbar, main content and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('composes the primary sections of the landing page', () => {
    render(<App />)
    expect(screen.getByText('ABOUT NAAV')).toBeInTheDocument()
    expect(screen.getByText('OUR SERVICES')).toBeInTheDocument()
    expect(screen.getByText('WHY CHOOSE NAAV')).toBeInTheDocument()
    expect(screen.getByText('FRANCHISE OPPORTUNITIES')).toBeInTheDocument()
    expect(screen.getByText('CUSTOMER REVIEWS')).toBeInTheDocument()
  })
})
