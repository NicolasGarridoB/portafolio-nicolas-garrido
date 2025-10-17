import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export interface LogoProps {
  /**
   * Tamaño del logo
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Nombre personalizado a mostrar
   */
  name?: string;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Función callback al hacer click
   */
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  name = 'Nicolás Garrido',
  className = '',
  onClick 
}) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div 
      className={`cursor-pointer flex items-center ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <Text 
        strong
        className={`text-gradient font-bold ${sizeClasses[size]} transition-all duration-300 hover:scale-105`}
      >
        {name}
      </Text>
    </div>
  );
};

export default Logo;