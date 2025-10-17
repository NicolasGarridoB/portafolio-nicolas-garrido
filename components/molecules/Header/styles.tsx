import { CSSProperties } from 'react';

export const headerStyles: Record<string, CSSProperties> = {
  header: {
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    borderBottom: '1px solid #f0f0f0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '64px',
    lineHeight: '64px',
    padding: '0 24px',
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  
  logo: {
    flexShrink: 0,
  },
  
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  
  mobileMenu: {
    display: 'none',
  },
  
  drawer: {
    padding: '16px',
  },
};

export const responsiveStyles = `
  @media (max-width: 768px) {
    .header-navigation {
      display: none;
    }
    
    .header-actions {
      display: none;
    }
    
    .header-mobile-menu {
      display: block;
    }
  }
`;