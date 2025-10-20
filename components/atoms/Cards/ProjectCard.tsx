import React, { useState } from 'react';
import { Card, Tag, Space } from 'antd';
import { 
  GithubOutlined, 
  LinkOutlined, 
  CodeOutlined, 
  ShoppingCartOutlined, 
  BarChartOutlined, 
  ApiOutlined,
  MobileOutlined,
  TeamOutlined,
  BookOutlined
} from '@ant-design/icons';
import CustomButton from '@atoms/Buttons/CustomButton';

const { Meta } = Card;

export interface ProjectCardProps {
  /**
   * Título del proyecto
   */
  title: string;
  /**
   * Descripción del proyecto
   */
  description: string;
  /**
   * URL de la imagen del proyecto
   */
  imageUrl?: string;
  /**
   * Tecnologías utilizadas
   */
  technologies: string[];
  /**
   * URL del repositorio en GitHub
   */
  githubUrl?: string;
  /**
   * URL de la demo en vivo
   */
  demoUrl?: string;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Tamaño de la tarjeta
   */
  size?: 'small' | 'default';
  /**
   * Permitir expandir la descripción completa
   */
  expandableDescription?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl = '/placeholder-project.jpg',
  technologies,
  githubUrl,
  demoUrl,
  className = '',
  size = 'default',
  expandableDescription = true
}) => {
  const [imageError, setImageError] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const cardHeight = size === 'small' ? 460 : 520; // Aumentamos la altura para mostrar más contenido

  // Función para obtener el icono según el tipo de proyecto
  const getProjectIcon = () => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('ecommerce') || titleLower.includes('commerce')) {
      return <ShoppingCartOutlined style={{ fontSize: '48px', color: 'white' }} />;
    } else if (titleLower.includes('dashboard') || titleLower.includes('analítico')) {
      return <BarChartOutlined style={{ fontSize: '48px', color: 'white' }} />;
    } else if (titleLower.includes('api') || titleLower.includes('rest')) {
      return <ApiOutlined style={{ fontSize: '48px', color: 'white' }} />;
    } else if (titleLower.includes('móvil') || titleLower.includes('mobile') || titleLower.includes('app')) {
      return <MobileOutlined style={{ fontSize: '48px', color: 'white' }} />;
    } else if (titleLower.includes('crm') || titleLower.includes('gestión')) {
      return <TeamOutlined style={{ fontSize: '48px', color: 'white' }} />;
    } else if (titleLower.includes('learning') || titleLower.includes('educativa') || titleLower.includes('education')) {
      return <BookOutlined style={{ fontSize: '48px', color: 'white' }} />;
    }
    return <CodeOutlined style={{ fontSize: '48px', color: 'white' }} />;
  };

  // Función para obtener el gradiente según el tipo de proyecto
  const getProjectGradient = () => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('ecommerce') || titleLower.includes('commerce')) {
      return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else if (titleLower.includes('dashboard') || titleLower.includes('analítico')) {
      return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    } else if (titleLower.includes('api') || titleLower.includes('rest')) {
      return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    } else if (titleLower.includes('móvil') || titleLower.includes('mobile') || titleLower.includes('app')) {
      return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
    } else if (titleLower.includes('crm') || titleLower.includes('gestión')) {
      return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
    } else if (titleLower.includes('learning') || titleLower.includes('educativa') || titleLower.includes('education')) {
      return 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
    }
    return 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)';
  };

  const actions = [];
  
  if (githubUrl) {
    actions.push(
      <CustomButton
        key="github"
        variant="ghost"
        size="small"
        icon={<GithubOutlined />}
        href={githubUrl}
        target="_blank"
      >
        Código
      </CustomButton>
    );
  }
  
  if (demoUrl) {
    actions.push(
      <CustomButton
        key="demo"
        variant="primary"
        size="small"
        icon={<LinkOutlined />}
        href={demoUrl}
        target="_blank"
      >
        Demo
      </CustomButton>
    );
  }

  return (
    <Card
      hoverable
      style={{ 
        height: cardHeight,
        borderRadius: '12px',
        overflow: 'hidden'
      }}
      className={`shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 ${className}`}
      cover={
        <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}> {/* Reducimos de 200px a 180px */}
          {!imageError ? (
            <>
              <img
                alt={title}
                src={imageUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                className="hover:scale-110"
                onError={() => setImageError(true)}
              />
              {/* Overlay con información del proyecto */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)'
                }}
              >
                <div className="text-center text-white">
                  {getProjectIcon()}
                  <p className="mt-2 font-semibold text-sm">Ver Proyecto</p>
                </div>
              </div>
            </>
          ) : (
            /* Placeholder con gradiente cuando la imagen falla */
            <div 
              style={{
                width: '100%',
                height: '100%',
                background: getProjectGradient(),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              className="hover:scale-105 transition-transform duration-300"
            >
              {getProjectIcon()}
              <h4 className="text-white font-bold text-lg mt-3 text-center px-4">
                {title}
              </h4>
              <div className="absolute top-3 right-3">
                <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Preview
                </span>
              </div>
            </div>
          )}
        </div>
      }
      actions={actions.length > 0 ? [
        <Space key="actions" size="small">
          {actions}
        </Space>
      ] : undefined}
    >
      <Meta
        title={
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {title}
          </h3>
        }
        description={
          <div>
            <div className="mb-2">
              <p className={`text-gray-600 text-sm ${
                expandableDescription && !isDescriptionExpanded 
                  ? 'line-clamp-3' 
                  : ''
              }`}>
                {description}
              </p>
              {expandableDescription && description.length > 120 && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-blue-500 hover:text-blue-700 text-xs mt-1 font-medium transition-colors"
                >
                  {isDescriptionExpanded ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 4).map((tech, index) => (
                <Tag 
                  key={index} 
                  color="blue" 
                  className="text-xs rounded-full"
                  style={{ margin: '1px' }}
                >
                  {tech}
                </Tag>
              ))}
              {technologies.length > 4 && (
                <Tag className="text-xs" style={{ margin: '1px' }}>
                  +{technologies.length - 4} más
                </Tag>
              )}
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default ProjectCard;