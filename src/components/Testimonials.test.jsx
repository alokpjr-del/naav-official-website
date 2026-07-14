import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders the reviews section header', () => {
    render(<Testimonials />)
    expect(screen.getByText('CUSTOMER REVIEWS')).toBeInTheDocument()
    expect(screen.getByText(/Loved by/)).toBeInTheDocument()
  })

  it('renders all reviewer names and their location', () => {
    const { container } = render(<Testimonials />)
    ;['Prakash', 'Sneha', 'Ramesh'].forEach((name) => {
      expect(
        screen.getByRole('heading', { name })
      ).toBeInTheDocument()
    })
    const places = container.querySelectorAll('.review-card span')
    expect(places).toHaveLength(3)
    places.forEach((place) => expect(place).toHaveTextContent('Kundapura'))
  })

  it('renders a five-star rating for each review card', () => {
    render(<Testimonials />)
    expect(screen.getAllByText('⭐⭐⭐⭐⭐')).toHaveLength(3)
  })
})
