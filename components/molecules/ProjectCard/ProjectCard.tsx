import React from 'react';
import ProjectCardAtom from '@atoms/Cards/ProjectCard';
import type { ProjectCardProps as ProjectCardAtomProps } from '@atoms/Cards/ProjectCard';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  category?: string;
  completedDate?: string;
}

export interface ProjectCardProps extends Omit<ProjectCardAtomProps, 'title' | 'description' | 'technologies'> {
  /**
   * Datos del proyecto
   */
  project: ProjectData;
  /**
   * Callback al hacer click en la tarjeta
   */
  onClick?: (project: ProjectData) => void;
  /**
   * Mostrar badge de destacado
   */
  showFeaturedBadge?: boolean;
  /**
   * Mostrar fecha de finalización
   */
  showCompletedDate?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  showFeaturedBadge = true,
  showCompletedDate = false,
  className = '',
  ...rest
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  const cardClassName = `
    ${project.featured ? 'ring-2 ring-blue-200 ring-opacity-50' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  return (
    <div onClick={handleCardClick} className="relative">
      {/* Badge de destacado */}
      {showFeaturedBadge && project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
            Destacado
          </span>
        </div>
      )}
      
      {/* Badge de fecha */}
      {showCompletedDate && project.completedDate && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-gray-800 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded shadow-lg">
            {project.completedDate}
          </span>
        </div>
      )}

      <ProjectCardAtom
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        technologies={project.technologies}
        githubUrl={project.githubUrl}
        demoUrl={project.demoUrl}
        expandableDescription={true}
        className={cardClassName}
        {...rest}
      />
    </div>
  );
};

export default ProjectCard;