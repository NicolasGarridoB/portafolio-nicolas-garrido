import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '@molecules/Header/Header';
import Footer from '@molecules/Footer/Footer';
import HeroSection from '@organisms/HeroSection/HeroSection';
import ProjectsSection from '@organisms/ProjectsSection/ProjectsSection';
import AboutSection from '@organisms/AboutSection/AboutSection';

export interface HomeLayoutProps {
  /**
   * Clase CSS adicional
   */
  className?: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Observador de intersección para detectar la sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-64px 0px -50% 0px' // Ajuste para el header fijo
      }
    );

    // Observar todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Altura del header fijo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const handleProjectsClick = () => {
    handleNavigation('proyectos');
  };

  const handleCvClick = () => {
    // Implementar descarga de CV
    const link = document.createElement('a');
    link.href = '/cv-nicolas-garrido.pdf';
    link.download = 'CV-Nicolas-Garrido.pdf';
    link.click();
  };

  return (
    <Layout className={`min-h-screen ${className}`}>
      {/* Header fijo */}
      <Header
        activeNavKey={activeSection}
        onNavChange={handleNavigation}
        showContactButton={true}
      />

      {/* Contenido principal */}
      <Layout style={{ marginTop: '64px' }}> {/* Compensar el header fijo */}
        {/* Hero Section */}
        <HeroSection
          name="Nicolás Garrido"
          title="Desarrollador Full Stack"
          subtitle="Especializado en React, TypeScript y tecnologías modernas"
          description="Apasionado por crear experiencias web excepcionales que combinan diseño elegante con código limpio y eficiente. Me especializo en desarrollo frontend con React y backend con Node.js."
          useGradientBackground={true}
          minHeight="100vh"
          showButtons={true}
          buttonsConfig={{
            showProjectsButton: true,
            showCvButton: true,
            projectsButtonText: 'Ver Proyectos',
            cvButtonText: 'Descargar CV',
          }}
          onProjectsClick={handleProjectsClick}
          onCvClick={handleCvClick}
          id="inicio"
        />

        {/* Projects Section */}
        <ProjectsSection
          title="Proyectos Destacados"
          description="Una selección de mis trabajos más recientes que demuestran mis habilidades en desarrollo full stack."
          showFilters={true}
          initialProjectsCount={6}
          showLoadMoreButton={true}
          onProjectClick={(project) => {
            console.log('Proyecto seleccionado:', project);
            // Aquí podrías abrir un modal o navegar a una página de detalle
          }}
          id="proyectos"
        />

        {/* About Section */}
        <AboutSection
          title="Sobre Mí"
          description={`Soy un estudiante de desarrollo web apasionado por la tecnología y el aprendizaje continuo. 
            Actualmente me encuentro en proceso de formación como desarrollador Full Stack, enfocándome en tecnologías modernas como React, TypeScript y Node.js.
            
            A través de proyectos académicos y personales, he desarrollado habilidades tanto en frontend como en backend. 
            Me motiva crear aplicaciones web funcionales y aprender de cada desafío que encuentro en el camino.
            
            Busco oportunidades para aplicar mis conocimientos en un entorno profesional y seguir creciendo como desarrollador.`}
          profileImageUrl="/profile-nicolas.jpg"
          yearsOfExperience={2}
          completedProjects={8}
          showStats={true}
          id="sobre-mi"
        />

        {/* Footer */}
        <Footer
          contactInfo={{
            email: 'contacto@nicolasgarrido.dev',
            phone: '+56 9 1234 5678',
            location: 'Santiago, Chile'
          }}
          socialLinks={[
            {
              platform: 'github',
              url: 'https://github.com/nicolasgarrido',
              label: 'GitHub'
            },
            {
              platform: 'linkedin',
              url: 'https://linkedin.com/in/nicolasgarrido',
              label: 'LinkedIn'
            }
          ]}
          showContactSection={true}
          id="contacto"
        />
      </Layout>
    </Layout>
  );
};

export default HomeLayout;