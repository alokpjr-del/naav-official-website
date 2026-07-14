import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo image and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByAltText('NAAV Logo')).toBeInTheDocument()
    ;['Home', 'About', 'Services', 'Franchise', 'Contact'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('renders the download app button', () => {
    render(<Navbar />)
    expect(
      screen.getByRole('button', { name: 'Download App' })
    ).toBeInTheDocument()
  })

  it('starts with the mobile menu collapsed', () => {
    const { container } = render(<Navbar />)
    expect(container.querySelector('nav')).toHaveClass('nav-links')
    expect(container.querySelector('nav')).not.toHaveClass('active')
  })

  it('toggles the mobile menu open and closed on hamburger click', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    const hamburger = container.querySelector('.menu')

    await user.click(hamburger)
    expect(nav).toHaveClass('active')

    await user.click(hamburger)
    expect(nav).not.toHaveClass('active')
  })
})
