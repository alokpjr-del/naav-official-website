import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Services from './Services'

describe('Services', () => {
  it('renders the services section with heading tag', () => {
    render(<Services />)
    expect(screen.getByText('OUR SERVICES')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Food Delivery',
      'Grocery Delivery',
      'Medicine Delivery',
      'Parcel Delivery',
      'Dry Fruits',
      'Spices',
    ]
    titles.forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument()
    })
  })

  it('renders a "Learn More" button per service card', () => {
    render(<Services />)
    expect(screen.getAllByRole('button', { name: /learn more/i })).toHaveLength(
      6
    )
  })
})
