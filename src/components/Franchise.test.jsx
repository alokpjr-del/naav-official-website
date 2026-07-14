import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Franchise from './Franchise'

describe('Franchise', () => {
  it('renders the franchise section header', () => {
    render(<Franchise />)
    expect(screen.getByText('FRANCHISE OPPORTUNITIES')).toBeInTheDocument()
  })

  it('renders the three franchise plans with prices', () => {
    render(<Franchise />)
    expect(
      screen.getByRole('heading', { name: 'Starter Franchise' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Growth Franchise' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Enterprise Franchise' })
    ).toBeInTheDocument()
    expect(screen.getByText('₹5 Lakhs')).toBeInTheDocument()
    expect(screen.getByText('₹10 Lakhs')).toBeInTheDocument()
    expect(screen.getByText('₹25 Lakhs')).toBeInTheDocument()
  })

  it('renders the call-to-action button for each plan', () => {
    render(<Franchise />)
    expect(
      screen.getByRole('button', { name: 'Apply Now' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Join Now' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Partner With Us' })
    ).toBeInTheDocument()
  })

  it('marks the Growth plan as the featured card', () => {
    const { container } = render(<Franchise />)
    const featured = container.querySelector('.franchise-card.featured')
    expect(featured).toBeInTheDocument()
    expect(featured).toHaveTextContent('Growth Franchise')
  })
})
