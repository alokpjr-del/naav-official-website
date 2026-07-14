import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AppShowcase from './AppShowcase'

describe('AppShowcase', () => {
  it('renders the showcase title and subtitle', () => {
    render(<AppShowcase />)
    expect(screen.getByText('NAAV MOBILE APP')).toBeInTheDocument()
    expect(screen.getByText(/Everything You Need/)).toBeInTheDocument()
  })

  it('renders six app screenshots with indexed alt text', () => {
    render(<AppShowcase />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByAltText(`NAAV App ${i}`)).toBeInTheDocument()
    }
  })
})
