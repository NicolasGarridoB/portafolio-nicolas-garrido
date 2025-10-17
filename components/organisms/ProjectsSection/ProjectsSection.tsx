import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Tabs, Space } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';
import ProjectCard from '@molecules/ProjectCard/ProjectCard';
import type { ProjectData } from '@molecules/ProjectCard/ProjectCard';
import CustomButton from '@atoms/Buttons/CustomButton';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export interface ProjectsSectionProps {
  /**
   * Lista de proyectos
   */
  projects?: ProjectData[];
  /**
   * Título de la sección
   */
  title?: string;
  /**
   * Descripción de la sección
   */
  description?: string;
  /**
   * Mostrar filtros por categoría
   */
  showFilters?: boolean;
  /**
   * Número inicial de proyectos a mostrar
   */
  initialProjectsCount?: number;
  /**
   * Mostrar botón "Ver más"
   */
  showLoadMoreButton?: boolean;
  /**
   * Callback al hacer click en un proyecto
   */
  onProjectClick?: (project: ProjectData) => void;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * ID de la sección para navegación
   */
  id?: string;
}

// Datos de ejemplo de proyectos
const defaultProjects: ProjectData[] = [
  {
    id: '1',
    title: '7upper',
    description: 'Aplicación móvil que busca impulsar el crecimiento de la alimentación sana en la comunidad chilena, especialmente de usuarios fitness y usuarios con falta de tiempo para cocinar un plato de comida.',
    imageUrl: 'assets/images/unnamed.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Flowise'],
    githubUrl: '',
    demoUrl: '',
    featured: true,
    category: 'Cloud Engineer, AI Orchestration',
    completedDate: '2025'
  },
  {
    id: '2',
    title: 'Dashboard Analítico',
    description: 'Dashboard interactivo para análisis de datos con gráficos en tiempo real, filtros avanzados y exportación de reportes.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    technologies: ['React', 'D3.js', 'Chart.js', 'TypeScript', 'Python'],
    githubUrl: 'https://github.com/nicolasgarrido/dashboard',
    demoUrl: 'https://dashboard-demo.nicolasgarrido.dev',
    featured: true,
    category: 'Frontend',
    completedDate: '2024'
  },
  {
    id: '3',
    title: 'API REST Escalable',
    description: 'API RESTful robusta con autenticación JWT, documentación Swagger y deployment automatizado.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    githubUrl: 'https://github.com/nicolasgarrido/api-rest',
    category: 'Backend',
    completedDate: '2023'
  },
  {
    id: '4',
    title: 'App Móvil React Native',
    description: 'Aplicación móvil cross-platform con autenticación biométrica, sincronización offline y push notifications.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    githubUrl: 'https://github.com/nicolasgarrido/mobile-app',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.nicolasgarrido.app',
    category: 'Mobile',
    completedDate: '2024'
  },
  {
    id: '5',
    title: 'Sistema de Gestión CRM',
    description: 'CRM completo con gestión de clientes, pipeline de ventas, reportes automáticos y integración con email marketing.',
    imageUrl: 'placeholder-crm-fail',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/nicolasgarrido/crm-system',
    demoUrl: 'https://crm-demo.nicolasgarrido.dev',
    featured: true,
    category: 'Full Stack',
    completedDate: '2023'
  },
  {
    id: '6',
    title: 'Plataforma de E-learning',
    description: 'Plataforma educativa con videos interactivos, quizzes, progreso de estudiantes y sistema de certificaciones.',
    imageUrl: 'placeholder-education-fail',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3'],
    githubUrl: 'https://github.com/nicolasgarrido/elearning',
    demoUrl: 'https://learn.nicolasgarrido.dev',
    category: 'Full Stack',
    completedDate: '2024'
  }
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
  title = 'Proyectos Destacados',
  description = 'Una selección de mis trabajos más recientes que demuestran mis habilidades en desarrollo full stack.',
  showFilters = true,
  initialProjectsCount = 6,
  showLoadMoreButton = true,
  onProjectClick,
  className = '',
  id = 'proyectos'
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [visibleProjects, setVisibleProjects] = useState(initialProjectsCount);

  // Obtener categorías únicas
  const categories = ['todos', ...new Set(projects.map(p => p.category).filter(Boolean))];

  // Filtrar proyectos
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Proyectos visibles
  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + initialProjectsCount);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleProjects(initialProjectsCount);
  };

  const tabItems = categories.map(category => ({
    key: category || 'default',
    label: category === 'todos' ? 'Todos' : (category || 'Otros'),
    children: null // Los usaremos solo para los tabs, no para el contenido
  }));

  return (
    <section
      id={id}
      className={`py-20 bg-gray-50 ${className}`}
    >
      <Content>
        <div className="container-custom">
          {/* Header de la sección */}
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </Paragraph>
          </div>

          {/* Filtros */}
          {showFilters && categories.length > 1 && (
            <div className="mb-12">
              <Tabs
                activeKey={activeFilter}
                onChange={handleFilterChange}
                centered
                size="large"
                items={tabItems}
                className="custom-tabs"
              />
            </div>
          )}

          {/* Grid de proyectos */}
          {displayedProjects.length > 0 ? (
            <>
              <Row gutter={[24, 24]} className="mb-12">
                {displayedProjects.map((project) => (
                  <Col 
                    key={project.id}
                    xs={24} 
                    sm={12} 
                    lg={8}
                    className="animate-fade-in-up"
                  >
                    <ProjectCard
                      project={project}
                      onClick={onProjectClick}
                      showFeaturedBadge={true}
                      showCompletedDate={true}
                    />
                  </Col>
                ))}
              </Row>

              {/* Botón Ver más */}
              {showLoadMoreButton && visibleProjects < filteredProjects.length && (
                <div className="text-center">
                  <CustomButton
                    variant="secondary"
                    size="large"
                    onClick={handleLoadMore}
                    icon={<FolderOpenOutlined />}
                  >
                    Ver más proyectos ({filteredProjects.length - visibleProjects} restantes)
                  </CustomButton>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <FolderOpenOutlined className="text-6xl text-gray-400 mb-4" />
              <Title level={3} className="text-gray-500">
                No hay proyectos en esta categoría
              </Title>
              <Paragraph className="text-gray-400">
                Intenta seleccionar otra categoría o revisa más tarde.
              </Paragraph>
            </div>
          )}
        </div>
      </Content>
    </section>
  );
};

export default ProjectsSection;