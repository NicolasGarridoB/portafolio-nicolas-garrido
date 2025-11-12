import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HeroButtons from '@molecules/HeroSection/HeroButtons'

// Mock de Ant Design
vi.mock('antd', () => ({
  Space: ({ children, direction, align, className }: any) => (
    <div
      className={className}
      data-testid="space"
      data-direction={direction}
      data-align={align}
    >
      {children}
    </div>
  ),
}))

// Mock de iconos
vi.mock('@ant-design/icons', () => ({
  EyeOutlined: () => <span data-testid="eye-icon" />,
  DownloadOutlined: () => <span data-testid="download-icon" />,
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

describe('HeroButtons', () => {
  it('should render both buttons by default', () => {
    render(<HeroButtons />)
    
    const buttons = screen.getAllByTestId('custom-button')
    expect(buttons).toHaveLength(2)
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
    expect(screen.getByTestId('download-icon')).toBeInTheDocument()
  })

  it('should render only projects button when showCvButton is false', () => {
    render(<HeroButtons showCvButton={false} />)
    
    const buttons = screen.getAllByTestId('custom-button')
    expect(buttons).toHaveLength(1)
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('download-icon')).not.toBeInTheDocument()
  })

  it('should render only CV button when showProjectsButton is false', () => {
    render(<HeroButtons showProjectsButton={false} />)
    
    const buttons = screen.getAllByTestId('custom-button')
    expect(buttons).toHaveLength(1)
    expect(screen.getByTestId('download-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('eye-icon')).not.toBeInTheDocument()
  })

  it('should render no buttons when both are disabled', () => {
    render(<HeroButtons showProjectsButton={false} showCvButton={false} />)
    
    const buttons = screen.queryAllByTestId('custom-button')
    expect(buttons).toHaveLength(0)
  })

  it('should use custom button texts', () => {
    render(
      <HeroButtons
        projectsButtonText="Ver Mis Trabajos"
        cvButtonText="Obtener Currículum"
      />
    )
    
    expect(screen.getByText('Ver Mis Trabajos')).toBeInTheDocument()
    expect(screen.getByText('Obtener Currículum')).toBeInTheDocument()
  })

  it('should handle projects button click', () => {
    const handleProjectsClick = vi.fn()
    render(<HeroButtons onProjectsClick={handleProjectsClick} />)
    
    const buttons = screen.getAllByTestId('custom-button')
    fireEvent.click(buttons[0])
    
    expect(handleProjectsClick).toHaveBeenCalledTimes(1)
  })

  it('should handle CV button click', () => {
    const handleCvClick = vi.fn()
    render(<HeroButtons onCvClick={handleCvClick} />)
    
    const buttons = screen.getAllByTestId('custom-button')
    fireEvent.click(buttons[1])
    
    expect(handleCvClick).toHaveBeenCalledTimes(1)
  })

  it('should apply different button sizes', () => {
    const { rerender } = render(<HeroButtons size="small" />)
    let buttons = screen.getAllByTestId('custom-button')
    buttons.forEach(button => {
      expect(button).toHaveAttribute('data-size', 'small')
    })

    rerender(<HeroButtons size="large" />)
    buttons = screen.getAllByTestId('custom-button')
    buttons.forEach(button => {
      expect(button).toHaveAttribute('data-size', 'large')
    })
  })

  it('should render in horizontal direction by default', () => {
    render(<HeroButtons />)
    
    const space = screen.getByTestId('space')
    expect(space).toHaveAttribute('data-direction', 'horizontal')
  })

  it('should render in vertical direction when specified', () => {
    render(<HeroButtons direction="vertical" />)
    
    const space = screen.getByTestId('space')
    expect(space).toHaveAttribute('data-direction', 'vertical')
  })

  it('should apply custom className', () => {
    const { container } = render(<HeroButtons className="custom-class" />)
    
    const wrapper = container.querySelector('.custom-class')
    expect(wrapper).toBeInTheDocument()
  })

  it('should use custom CV URL', () => {
    const handleCvClick = vi.fn()
    render(<HeroButtons cvUrl="/custom-cv.pdf" onCvClick={handleCvClick} />)
    
    const buttons = screen.getAllByTestId('custom-button')
    const cvButton = buttons[1]
    fireEvent.click(cvButton)
    expect(handleCvClick).toHaveBeenCalled()
  })

  it('should handle different alignments', () => {
    const { rerender, container } = render(<HeroButtons align="left" />)
    let wrapper = container.querySelector('.justify-start')
    expect(wrapper).toBeInTheDocument()

    rerender(<HeroButtons align="center" />)
    wrapper = container.querySelector('.justify-center')
    expect(wrapper).toBeInTheDocument()

    rerender(<HeroButtons align="right" />)
    wrapper = container.querySelector('.justify-end')
    expect(wrapper).toBeInTheDocument()
  })
})
