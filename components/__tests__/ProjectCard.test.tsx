import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProjectCard from '@atoms/Cards/ProjectCard'

// Mock de Ant Design
vi.mock('antd', () => {
  const CardComponent = ({ children, className, cover, hoverable, onClick, style, actions }: any) => (
    <div className={className} style={style} data-hoverable={hoverable} onClick={onClick} data-testid="card">
      {cover && <div data-testid="card-cover">{cover}</div>}
      {children}
      {actions && actions.length > 0 && (
        <div data-testid="card-actions">
          {actions}
        </div>
      )}
    </div>
  );
  
  CardComponent.Meta = ({ title, description }: any) => (
    <div data-testid="card-meta">
      {title && <div data-testid="card-title">{title}</div>}
      {description && <div data-testid="card-description">{description}</div>}
    </div>
  );

  return {
    Card: CardComponent,
    Tag: ({ children, color, className, style }: any) => (
      <span data-testid="tag" data-color={color} className={className} style={style}>
        {children}
      </span>
    ),
    Space: ({ children, direction, size }: any) => (
      <div data-testid="space" data-direction={direction} data-size={size}>
        {children}
      </div>
    ),
  };
})

// Mock de iconos
vi.mock('@ant-design/icons', () => ({
  GithubOutlined: () => <span data-testid="github-icon" />,
  LinkOutlined: () => <span data-testid="link-icon" />,
  CodeOutlined: () => <span data-testid="code-icon" />,
  ShoppingCartOutlined: () => <span data-testid="shopping-icon" />,
  BarChartOutlined: () => <span data-testid="chart-icon" />,
  ApiOutlined: () => <span data-testid="api-icon" />,
  MobileOutlined: () => <span data-testid="mobile-icon" />,
  TeamOutlined: () => <span data-testid="team-icon" />,
  BookOutlined: () => <span data-testid="book-icon" />,
}))

// Mock de CustomButton
vi.mock('@atoms/Buttons/CustomButton', () => ({
  default: ({ children, onClick, icon }: any) => (
    <button onClick={onClick} data-testid="custom-button">
      {icon}
      {children}
    </button>
  ),
}))

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    technologies: ['React', 'TypeScript', 'Vitest'],
  }

  it('should render correctly with default props', () => {
    render(<ProjectCard {...defaultProps} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('should render all technologies as tags', () => {
    render(<ProjectCard {...defaultProps} />)
    
    const tags = screen.getAllByTestId('tag')
    expect(tags).toHaveLength(3)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vitest')).toBeInTheDocument()
  })

  it('should render GitHub button when githubUrl is provided', () => {
    render(<ProjectCard {...defaultProps} githubUrl="https://github.com/test/repo" />)
    
    const buttons = screen.getAllByTestId('custom-button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should render demo button when demoUrl is provided', () => {
    render(<ProjectCard {...defaultProps} demoUrl="https://demo.example.com" />)
    
    const buttons = screen.getAllByTestId('custom-button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should render image when imageUrl is provided', () => {
    render(<ProjectCard {...defaultProps} imageUrl="https://example.com/image.jpg" />)
    
    const cover = screen.queryByTestId('card-cover')
    expect(cover).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<ProjectCard {...defaultProps} className="custom-class" />)
    
    const card = container.querySelector('.custom-class')
    expect(card).toBeInTheDocument()
  })

  it('should handle different card sizes', () => {
    const { rerender } = render(<ProjectCard {...defaultProps} size="small" />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()

    rerender(<ProjectCard {...defaultProps} size="default" />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})
