import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Logo from '@atoms/Header/Logo'

// Mock de Ant Design
vi.mock('antd', () => ({
  Typography: {
    Text: ({ children, className, strong }: any) => (
      <span className={className} data-strong={strong}>
        {children}
      </span>
    ),
  },
}))

describe('Logo', () => {
  it('should render with default name', () => {
    render(<Logo />)
    
    const logo = screen.getByText('Nicolás Garrido')
    expect(logo).toBeInTheDocument()
  })

  it('should render with custom name', () => {
    render(<Logo name="Custom Name" />)
    
    const logo = screen.getByText('Custom Name')
    expect(logo).toBeInTheDocument()
  })

  it('should apply correct size classes', () => {
    const { rerender } = render(<Logo size="small" />)
    let logo = screen.getByText('Nicolás Garrido')
    expect(logo).toHaveClass('text-lg')

    rerender(<Logo size="large" />)
    logo = screen.getByText('Nicolás Garrido')
    expect(logo).toHaveClass('text-2xl')
  })

  it('should be clickable and handle keyboard events', () => {
    const handleClick = vi.fn()
    render(<Logo onClick={handleClick} />)
    
    const logoContainer = screen.getByRole('button')
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toHaveAttribute('tabIndex', '0')
  })

  it('should apply custom className', () => {
    render(<Logo className="custom-class" />)
    
    const logoContainer = screen.getByRole('button')
    expect(logoContainer).toHaveClass('custom-class')
  })
})