import type { CSSProperties } from 'react';

export const homeLayoutStyles: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  
  mainContent: {
    marginTop: '64px', // Altura del header fijo
    position: 'relative',
  },
  
  section: {
    position: 'relative',
    overflow: 'hidden',
  },
  
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  contentSection: {
    padding: '80px 0',
  },
  
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
};

export const responsiveStyles = `
  @media (max-width: 768px) {
    .home-layout-main {
      margin-top: 64px;
    }
    
    .home-layout-section {
      padding: 60px 0;
    }
    
    .home-layout-content {
      padding: 0 16px;
    }
  }
  
  @media (max-width: 480px) {
    .home-layout-section {
      padding: 40px 0;
    }
  }
`;

// Animaciones CSS
export const animations = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }
  
  .animation-delay-1 {
    animation-delay: 0.1s;
  }
  
  .animation-delay-2 {
    animation-delay: 0.2s;
  }
  
  .animation-delay-3 {
    animation-delay: 0.3s;
  }
`;