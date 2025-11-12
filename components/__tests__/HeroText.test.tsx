import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HeroText from '@molecules/HeroSection/HeroText'

// Mock de Ant Design Typography
vi.mock('antd', () => ({
  Typography: {
    Title: ({ children, level, className }: any) => (
      <h1 className={className} data-level={level}>
        {children}
      </h1>
    ),
    Paragraph: ({ children, className }: any) => (
      <p className={className}>{children}</p>
    ),
    Text: ({ children, className, strong }: any) => (
      <span className={className} data-strong={strong}>
        {children}
      </span>
    ),
  },
}))

describe('HeroText', () => {
  it('should render with default props', () => {
    render(<HeroText />)
    
    expect(screen.getByText('Nicolás Garrido')).toBeInTheDocument()
    expect(screen.getByText('Estudiante de Ingeniería en Informática')).toBeInTheDocument()
    expect(
      screen.getByText(/Especializado en Desarrollo Web Full Stack/)
    ).toBeInTheDocument()
  })

  it('should render with custom name', () => {
    render(<HeroText name="Juan Pérez" />)
    
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument()
  })

  it('should render with custom title', () => {
    render(<HeroText title="Desarrollador Full Stack" />)
    
    expect(screen.getByText('Desarrollador Full Stack')).toBeInTheDocument()
  })

  it('should render with custom subtitle', () => {
    render(<HeroText subtitle="Especialista en React y Node.js" />)
    
    expect(screen.getByText('Especialista en React y Node.js')).toBeInTheDocument()
  })

  it('should render with custom description', () => {
    render(<HeroText description="Esta es una descripción personalizada" />)
    
    expect(screen.getByText('Esta es una descripción personalizada')).toBeInTheDocument()
  })

  it('should apply center alignment by default', () => {
    const { container } = render(<HeroText />)
    
    const wrapper = container.querySelector('.text-center')
    expect(wrapper).toBeInTheDocument()
  })

  it('should apply left alignment when specified', () => {
    const { container } = render(<HeroText align="left" />)
    
    const wrapper = container.querySelector('.text-left')
    expect(wrapper).toBeInTheDocument()
  })

  it('should apply right alignment when specified', () => {
    const { container } = render(<HeroText align="right" />)
    
    const wrapper = container.querySelector('.text-right')
    expect(wrapper).toBeInTheDocument()
  })

  it('should apply animation class by default', () => {
    const { container } = render(<HeroText />)
    
    const wrapper = container.querySelector('.animate-fade-in-up')
    expect(wrapper).toBeInTheDocument()
  })

  it('should not apply animation when animated is false', () => {
    const { container } = render(<HeroText animated={false} />)
    
    const wrapper = container.querySelector('.animate-fade-in-up')
    expect(wrapper).not.toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<HeroText className="custom-hero-text" />)
    
    const wrapper = container.querySelector('.custom-hero-text')
    expect(wrapper).toBeInTheDocument()
  })

  it('should render all text elements', () => {
    render(<HeroText />)
    
    // Verificar que todos los elementos de texto estén presentes
    expect(screen.getByText('Nicolás Garrido')).toBeInTheDocument()
    expect(screen.getByText('Estudiante de Ingeniería en Informática')).toBeInTheDocument()
    expect(screen.getByText(/Especializado en Desarrollo Web Full Stack/)).toBeInTheDocument()
    expect(screen.getByText(/Apasionado por la tecnología/)).toBeInTheDocument()
  })

  it('should handle empty strings for optional props', () => {
    render(
      <HeroText
        name=""
        title=""
        subtitle=""
        description=""
      />
    )
    
    // El componente debe renderizarse sin errores incluso con strings vacíos
    const { container } = render(<HeroText />)
    expect(container).toBeInTheDocument()
  })
})
