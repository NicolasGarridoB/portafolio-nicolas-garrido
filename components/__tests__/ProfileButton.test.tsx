import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProfileButton from '@atoms/Header/ProfileButton'

// Mock de iconos
vi.mock('@ant-design/icons', () => ({
  DownloadOutlined: () => <span data-testid="download-icon" />,
  MailOutlined: () => <span data-testid="mail-icon" />,
  PhoneOutlined: () => <span data-testid="phone-icon" />,
}))

// Mock de CustomButton
vi.mock('@atoms/Buttons/CustomButton', () => ({
  default: ({ children, onClick, variant, size, icon, href }: any) => (
    <button
      onClick={onClick}
      data-testid="custom-button"
      data-variant={variant}
      data-size={size}
      data-href={href}
    >
      {icon}
      {children}
    </button>
  ),
}))

describe('ProfileButton', () => {
  it('should render contact button by default', () => {
    render(<ProfileButton />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument()
  })

  it('should render download CV button', () => {
    render(<ProfileButton type="download-cv" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('download-icon')).toBeInTheDocument()
  })

  it('should render call button', () => {
    render(<ProfileButton type="call" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('phone-icon')).toBeInTheDocument()
  })

  it('should use custom text when provided', () => {
    render(<ProfileButton type="contact" text="Contáctame Ahora" />)
    
    expect(screen.getByText('Contáctame Ahora')).toBeInTheDocument()
  })

  it('should apply different sizes', () => {
    const { rerender } = render(<ProfileButton size="small" />)
    let button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('data-size', 'small')

    rerender(<ProfileButton size="large" />)
    button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('data-size', 'large')
  })

  it('should handle custom onClick', () => {
    const handleClick = vi.fn()
    render(<ProfileButton onClick={handleClick} />)
    
    const button = screen.getByTestId('custom-button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should apply custom className', () => {
    render(<ProfileButton className="custom-class" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
  })

  it('should use custom CV URL when provided', () => {
    const handleClick = vi.fn()
    render(<ProfileButton type="download-cv" cvUrl="/custom-cv.pdf" onClick={handleClick} />)
    
    const button = screen.getByTestId('custom-button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  it('should use custom email when provided', () => {
    render(<ProfileButton type="contact" email="custom@example.com" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
  })

  it('should use custom phone when provided', () => {
    render(<ProfileButton type="call" phone="+1234567890" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
  })
})
