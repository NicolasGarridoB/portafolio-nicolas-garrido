import React from 'react';
import { Button } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export interface CustomButtonProps extends Omit<AntButtonProps, 'type'> {
  /**
   * Variante del botón
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  /**
   * Tamaño del botón
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * Texto del botón
   */
  children: React.ReactNode;
  /**
   * Función callback al hacer click
   */
  onClick?: () => void;
  /**
   * URL para navegación (si es un link)
   */
  href?: string;
  /**
   * Abrir en nueva pestaña
   */
  target?: '_blank' | '_self';
  /**
   * Clases CSS adicionales
   */
  className?: string;
  /**
   * Estado loading
   */
  loading?: boolean;
  /**
   * Estado disabled
   */
  disabled?: boolean;
  /**
   * Icono del botón
   */
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'middle',
  children,
  onClick,
  href,
  target = '_self',
  className = '',
  loading = false,
  disabled = false,
  icon,
  ...rest
}) => {
  const getButtonType = () => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'ghost':
        return 'text';
      case 'link':
        return 'link';
      default:
        return 'primary';
    }
  };

  const buttonClasses = `
    transition-all duration-300 
    ${variant === 'primary' ? 'hover:scale-105 shadow-lg hover:shadow-xl' : ''}
    ${variant === 'secondary' ? 'hover:scale-102 border-2' : ''}
    ${variant === 'ghost' ? 'hover:bg-blue-50' : ''}
    ${className}
  `.trim();

  const buttonProps = {
    type: getButtonType() as AntButtonProps['type'],
    size,
    loading,
    disabled,
    icon,
    className: buttonClasses,
    ...rest
  };

  if (href) {
    return (
      <Button
        {...buttonProps}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...buttonProps}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;