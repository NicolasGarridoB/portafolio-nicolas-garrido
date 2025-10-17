import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

export interface NavItem {
  key: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface NavBarLinksProps {
  /**
   * Items de navegación
   */
  items: NavItem[];
  /**
   * Modo del menú
   */
  mode?: 'horizontal' | 'vertical';
  /**
   * Key del item activo
   */
  activeKey?: string;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Callback cuando se selecciona un item
   */
  onSelect?: (key: string) => void;
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({
  items,
  mode = 'horizontal',
  activeKey,
  className = '',
  onSelect
}) => {
  const handleMenuClick: MenuProps['onClick'] = (info) => {
    const item = items.find(item => item.key === info.key);
    
    if (item?.href) {
      // Scroll suave para anclas
      if (item.href.startsWith('#')) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navegación externa
        window.open(item.href, '_self');
      }
    }
    
    if (item?.onClick) {
      item.onClick();
    }
    
    if (onSelect) {
      onSelect(info.key);
    }
  };

  const menuItems = items.map(item => ({
    key: item.key,
    label: (
      <span 
        className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50"
        style={{ 
          display: 'inline-block',
          fontSize: '15px',
          fontWeight: 500
        }}
      >
        {item.label}
      </span>
    ),
  }));

  return (
    <Menu
      mode={mode}
      selectedKeys={activeKey ? [activeKey] : []}
      onClick={handleMenuClick}
      className={`border-none bg-transparent ${className}`}
      items={menuItems}
      style={{
        lineHeight: '64px',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none'
      }}
    />
  );
};

export default NavBarLinks;