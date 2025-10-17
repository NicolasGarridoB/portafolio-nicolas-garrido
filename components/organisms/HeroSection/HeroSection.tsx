import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeroText from '@molecules/HeroSection/HeroText';
import HeroButtons from '@molecules/HeroSection/HeroButtons';

const { Content } = Layout;

export interface HeroSectionProps {
  /**
   * Nombre a mostrar en el hero
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
   * URL de la imagen de fondo
   */
  backgroundImage?: string;
  /**
   * Usar gradiente de fondo
   */
  useGradientBackground?: boolean;
  /**
   * Altura mínima de la sección
   */
  minHeight?: string | number;
  /**
   * Mostrar botones de acción
   */
  showButtons?: boolean;
  /**
   * Configuración de botones
   */
  buttonsConfig?: {
    showProjectsButton?: boolean;
    showCvButton?: boolean;
    projectsButtonText?: string;
    cvButtonText?: string;
    cvUrl?: string;
  };
  /**
   * Callbacks
   */
  onProjectsClick?: () => void;
  onCvClick?: () => void;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * ID de la sección para navegación
   */
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = 'Nicolás Garrido',
  title = 'Estudiante de Ingeniería en Informática',
  subtitle = 'Especializado en Desarrollo Web Full Stack, Bases de Datos e Inteligencia Artificial.',
  description = 'Apasionado por la tecnología y el aprendizaje continuo. Actualmente en proceso de formación como desarrollador, con conocimientos en React, Node.js, JavaScript, AWS y GCP, y orquestaciones de inteligencia artificial en Flowise.',
  backgroundImage,
  useGradientBackground = true,
  minHeight = '100vh',
  showButtons = true,
  buttonsConfig = {},
  onProjectsClick,
  onCvClick,
  className = '',
  id = 'inicio'
}) => {
  const backgroundStyle = () => {
    if (backgroundImage) {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else if (useGradientBackground) {
      return {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      };
    }
    return {
      backgroundColor: '#f8fafc'
    };
  };

  const textColor = backgroundImage || useGradientBackground ? 'text-white' : 'text-gray-900';

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        ...backgroundStyle()
      }}
    >
      {/* Overlay pattern opcional */}
      {(backgroundImage || useGradientBackground) && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      )}

      <Content className="relative z-10">
        <div className="container-custom">
          <Row 
            justify="center" 
            align="middle" 
            style={{ minHeight: 'inherit' }}
            className="py-20"
          >
            <Col xs={24} sm={22} md={20} lg={18} xl={16}>
              <div className="text-center space-y-8">
                {/* Texto principal del hero */}
                <HeroText
                  name={name}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  align="center"
                  animated={true}
                  className={textColor}
                />

                {/* Botones de acción */}
                {showButtons && (
                  <div className="mt-12">
                    <HeroButtons
                      {...buttonsConfig}
                      onProjectsClick={onProjectsClick}
                      onCvClick={onCvClick}
                      align="center"
                      size="large"
                      animated={true}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${textColor === 'text-white' ? 'border-white' : 'border-gray-400'} rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${textColor === 'text-white' ? 'bg-white' : 'bg-gray-400'} rounded-full mt-2 animate-ping`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;