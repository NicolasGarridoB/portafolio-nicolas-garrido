import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CustomButton from '@atoms/Buttons/CustomButton'

// Mock de Ant Design
vi.mock('antd', () => ({
  Button: ({ children, onClick, href, ...props }: any) => (
    <button {...props} onClick={onClick} data-href={href}>
      {children}
    </button>
  ),
}))

describe('CustomButton', () => {
  it('should render correctly with default props', () => {
    render(<CustomButton>Test Button</CustomButton>)
    
    const button = screen.getByRole('button', { name: /test button/i })
    expect(button).toBeInTheDocument()
  })

  it('should handle click events', () => {
    const handleClick = vi.fn()
    render(<CustomButton onClick={handleClick}>Click Me</CustomButton>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render as link when href is provided', () => {
    render(
      <CustomButton href="https://example.com" target="_blank">
        Link Button
      </CustomButton>
    )
    
    const button = screen.getByRole('button', { name: /link button/i })
    expect(button).toHaveAttribute('data-href', 'https://example.com')
  })

  it('should apply correct variant classes', () => {
    const { rerender } = render(<CustomButton variant="primary">Primary</CustomButton>)
    let button = screen.getByRole('button', { name: /primary/i })
    expect(button).toHaveClass('hover:scale-105')

    rerender(<CustomButton variant="secondary">Secondary</CustomButton>)
    button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('hover:scale-102')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<CustomButton disabled>Disabled Button</CustomButton>)
    
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })

  it('should show loading state', () => {
    render(<CustomButton loading>Loading Button</CustomButton>)
    
    const button = screen.getByRole('button', { name: /loading button/i })
    expect(button).toBeInTheDocument()
  })
})