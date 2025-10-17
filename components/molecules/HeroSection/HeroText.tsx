import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export interface HeroTextProps {
  /**
   * Nombre a mostrar
   */
  name?: string;
  /**
   * Título principal
   */
  title?: string;
  /**
   * Subtítulo o especialización
   */
  subtitle?: string;
  /**
   * Descripción detallada
   */
  description?: string;
  /**
   * Alineación del texto
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Animación de entrada
   */
  animated?: boolean;
}

const HeroText: React.FC<HeroTextProps> = ({
  name = 'Nicolás Garrido',
  title = 'Estudiante de Ingeniería en Informática',
  subtitle = 'Especializado en Desarrollo Web Full Stack, Bases de Datos e Inteligencia Artificial.',
  description = 'Apasionado por la tecnología y el aprendizaje continuo. Actualmente en proceso de formación como desarrollador, con conocimientos en React, Node.js, JavaScript, AWS y GCP, y orquestaciones de inteligencia artificial en Flowise.',
  align = 'center',
  className = '',
  animated = true
}) => {
  const textAlign = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const animationClass = animated ? 'animate-fade-in-up' : '';

  return (
    <div className={`${textAlign} ${className}`}>
      {/* Saludo */}
      <div className={`mb-4 ${animationClass}`} style={{ animationDelay: '0.1s' }}>
        <Title 
          level={2} 
          className="text-white text-opacity-90 font-normal mb-2"
          style={{ 
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          Hola, soy
        </Title>
      </div>

      {/* Nombre principal */}
      <div className={`mb-4 ${animationClass}`} style={{ animationDelay: '0.2s' }}>
        <Title 
          level={1}
          className="text-white font-bold mb-2"
          style={{ 
            fontSize: '3.5rem',
            marginBottom: '0.5rem',
            lineHeight: 1.1,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          {name}
        </Title>
      </div>

      {/* Título profesional */}
      <div className={`mb-4 ${animationClass}`} style={{ animationDelay: '0.3s' }}>
        <Title 
          level={2}
          className="text-white font-semibold mb-2"
          style={{ 
            fontSize: '2.25rem',
            marginBottom: '0.5rem',
            fontWeight: 600,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          {title}
        </Title>
      </div>

      {/* Subtítulo */}
      <div className={`mb-6 ${animationClass}`} style={{ animationDelay: '0.4s' }}>
        <Title 
          level={3}
          className="text-blue-200 font-medium"
          style={{ 
            fontSize: '1.375rem',
            marginBottom: '1.5rem',
            fontWeight: 500,
            color: '#bfdbfe',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}
        >
          {subtitle}
        </Title>
      </div>

      {/* Descripción */}
      <div className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${animationClass}`} style={{ animationDelay: '0.5s' }}>
        <Paragraph 
          className="text-white text-opacity-90 text-lg leading-relaxed"
          style={{ 
            fontSize: '1.125rem',
            lineHeight: 1.7,
            marginBottom: 0,
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroText;