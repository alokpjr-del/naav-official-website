import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Stats from './Stats'

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />)
    expect(
      screen.getByRole('heading', { name: 'NAAV in Numbers' })
    ).toBeInTheDocument()
  })

  it('renders each stat number with its label', () => {
    render(<Stats />)
    const stats = [
      ['100+', 'Restaurant Partners'],
      ['10K+', 'Happy Customers'],
      ['25+', 'Delivery Partners'],
      ['24/7', 'Customer Support'],
    ]
    stats.forEach(([number, title]) => {
      expect(screen.getByText(number)).toBeInTheDocument()
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
