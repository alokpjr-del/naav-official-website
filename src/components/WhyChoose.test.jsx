import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WhyChoose from './WhyChoose'

describe('WhyChoose', () => {
  it('renders the section tag and heading', () => {
    render(<WhyChoose />)
    expect(screen.getByText('WHY CHOOSE NAAV')).toBeInTheDocument()
    expect(screen.getByText(/Why Thousands Choose/)).toBeInTheDocument()
  })

  it('renders all six feature titles', () => {
    render(<WhyChoose />)
    const titles = [
      'Lightning Fast Delivery',
      'Affordable Delivery',
      'Support Local Business',
      'Professional Delivery',
      'Easy Ordering',
      'Customer First',
    ]
    titles.forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument()
    })
  })

  it('renders the whychoose section with its id', () => {
    const { container } = render(<WhyChoose />)
    expect(container.querySelector('section#whychoose')).toBeInTheDocument()
  })
})
