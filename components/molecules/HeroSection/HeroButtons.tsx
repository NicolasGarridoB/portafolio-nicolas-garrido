import React from 'react';
import { Space } from 'antd';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import CustomButton from '@atoms/Buttons/CustomButton';

export interface HeroButtonsProps {
  /**
   * Mostrar botón de proyectos
   */
  showProjectsButton?: boolean;
  /**
   * Mostrar botón de CV
   */
  showCvButton?: boolean;
  /**
   * Texto del botón de proyectos
   */
  projectsButtonText?: string;
  /**
   * Texto del botón de CV
   */
  cvButtonText?: string;
  /**
   * URL del CV
   */
  cvUrl?: string;
  /**
   * Callback al hacer click en proyectos
   */
  onProjectsClick?: () => void;
  /**
   * Callback al hacer click en CV
   */
  onCvClick?: () => void;
  /**
   * Alineación de los botones
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Tamaño de los botones
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * Dirección de los botones
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Animación de entrada
   */
  animated?: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({
  showProjectsButton = true,
  showCvButton = true,
  projectsButtonText = 'Ver Proyectos',
  cvButtonText = 'Descargar CV',
  cvUrl = '/cv-nicolas-garrido.pdf',
  onProjectsClick,
  onCvClick,
  align = 'center',
  size = 'large',
  direction = 'horizontal',
  className = '',
  animated = true
}) => {
  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }[align];

  const animationClass = animated ? 'animate-fade-in-up' : '';

  const handleProjectsClick = () => {
    if (onProjectsClick) {
      onProjectsClick();
    } else {
      // Scroll suave a la sección de proyectos
      const projectsSection = document.querySelector('#proyectos');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCvClick = () => {
    if (onCvClick) {
      onCvClick();
    } else {
      // Descargar CV
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'CV-Nicolas-Garrido.pdf';
      link.click();
    }
  };

  return (
    <div 
      className={`flex ${alignmentClass} ${className} ${animationClass}`}
      style={{ animationDelay: '0.6s' }}
    >
      <Space
        direction={direction}
        size={direction === 'horizontal' ? 'large' : 'middle'}
        wrap
      >
        {showProjectsButton && (
          <CustomButton
            variant="primary"
            size={size}
            icon={<EyeOutlined />}
            onClick={handleProjectsClick}
            className="font-semibold min-w-[160px]"
          >
            {projectsButtonText}
          </CustomButton>
        )}
        
        {showCvButton && (
          <CustomButton
            variant="secondary"
            size={size}
            icon={<DownloadOutlined />}
            onClick={handleCvClick}
            className="font-semibold min-w-[160px]"
          >
            {cvButtonText}
          </CustomButton>
        )}
      </Space>
    </div>
  );
};

export default HeroButtons;