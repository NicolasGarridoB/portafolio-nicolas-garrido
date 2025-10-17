import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '@atoms/Header/Logo';
import NavBarLinks from '@atoms/Header/NavBarLinks';
import ProfileButton from '@atoms/Header/ProfileButton';
import CustomButton from '@atoms/Buttons/CustomButton';
import type { NavItem } from '@atoms/Header/NavBarLinks';

const { Header: AntHeader } = Layout;

export interface HeaderProps {
  /**
   * Items de navegación
   */
  navItems?: NavItem[];
  /**
   * Key del item activo
   */
  activeNavKey?: string;
  /**
   * Mostrar botón de contacto
   */
  showContactButton?: boolean;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Callback cuando se cambia la navegación
   */
  onNavChange?: (key: string) => void;
}

const defaultNavItems: NavItem[] = [
  { key: 'inicio', label: 'Inicio', href: '#inicio' },
  { key: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { key: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi' },
  { key: 'contacto', label: 'Contacto', href: '#contacto' },
];

const Header: React.FC<HeaderProps> = ({
  navItems = defaultNavItems,
  activeNavKey,
  showContactButton = true,
  className = '',
  onNavChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavSelect = (key: string) => {
    if (onNavChange) {
      onNavChange(key);
    }
    setMobileMenuOpen(false); // Cerrar menú móvil al seleccionar
  };

  return (
    <AntHeader 
      className={`
        bg-white shadow-sm border-b border-gray-100 
        px-4 lg:px-8 h-16 leading-16 
        fixed top-0 left-0 right-0 z-50
        ${className}
      `}
      style={{ 
        padding: '0 24px',
        height: '64px',
        lineHeight: '64px'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo size="medium" onClick={handleLogoClick} />
        </div>

        {/* Navegación Desktop */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <NavBarLinks
            items={navItems}
            mode="horizontal"
            activeKey={activeNavKey}
            onSelect={handleNavSelect}
            className="flex-1 justify-center"
          />
        </div>

        {/* Botones Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {showContactButton && (
            <ProfileButton type="contact" size="middle" />
          )}
        </div>

        {/* Menú Hamburguesa Mobile */}
        <div className="lg:hidden">
          <CustomButton
            variant="ghost"
            size="middle"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          >
            Menú
          </CustomButton>
        </div>
      </div>

      {/* Drawer para Menú Mobile */}
      <Drawer
        title="Navegación"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
      >
        <div className="flex flex-col space-y-4">
          <NavBarLinks
            items={navItems}
            mode="vertical"
            activeKey={activeNavKey}
            onSelect={handleNavSelect}
            className="border-none"
          />
          
          {showContactButton && (
            <div className="pt-4 border-t border-gray-200">
              <ProfileButton 
                type="contact" 
                size="large" 
                className="w-full"
              />
            </div>
          )}
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;