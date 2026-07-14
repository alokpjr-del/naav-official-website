import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the hero tag and image', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Kundapura's Own Delivery Platform/)
    ).toBeInTheDocument()
    expect(screen.getByAltText('NAAV Delivery')).toBeInTheDocument()
  })

  it('renders the primary and secondary call-to-action links', () => {
    render(<Hero />)
    const explore = screen.getByRole('link', { name: 'Explore Services' })
    const learn = screen.getByRole('link', { name: 'Learn More' })
    expect(explore).toHaveAttribute('href', '#services')
    expect(learn).toHaveAttribute('href', '#about')
  })

  it('renders the three hero stat cards', () => {
    render(<Hero />)
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('15 Min')).toBeInTheDocument()
    expect(screen.getByText('1000+')).toBeInTheDocument()
  })
})
