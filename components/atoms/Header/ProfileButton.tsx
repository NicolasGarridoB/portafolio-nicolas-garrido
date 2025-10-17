import React from 'react';
import { DownloadOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import CustomButton from '@atoms/Buttons/CustomButton';

export interface ProfileButtonProps {
  /**
   * Tipo de botón de perfil
   */
  type?: 'contact' | 'download-cv' | 'call';
  /**
   * Tamaño del botón
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * Texto personalizado
   */
  text?: string;
  /**
   * URL del CV para descargar
   */
  cvUrl?: string;
  /**
   * Email de contacto
   */
  email?: string;
  /**
   * Teléfono de contacto
   */
  phone?: string;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * Callback personalizado
   */
  onClick?: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  type = 'contact',
  size = 'middle',
  text,
  cvUrl = '/cv-nicolas-garrido.pdf',
  email = 'contacto@nicolasgarrido.dev',
  phone = '+56 9 1234 5678',
  className = '',
  onClick
}) => {
  const getButtonConfig = () => {
    switch (type) {
      case 'download-cv':
        return {
          icon: <DownloadOutlined />,
          text: text || 'Descargar CV',
          variant: 'secondary' as const,
          action: () => {
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'CV-Nicolas-Garrido.pdf';
            link.click();
          }
        };
      case 'call':
        return {
          icon: <PhoneOutlined />,
          text: text || 'Llamar',
          variant: 'ghost' as const,
          action: () => {
            window.open(`tel:${phone}`, '_self');
          }
        };
      case 'contact':
      default:
        return {
          icon: <MailOutlined />,
          text: text || 'Contactar',
          variant: 'primary' as const,
          action: () => {
            window.open(`mailto:${email}`, '_self');
          }
        };
    }
  };

  const config = getButtonConfig();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      config.action();
    }
  };

  return (
    <CustomButton
      variant={config.variant}
      size={size}
      icon={config.icon}
      onClick={handleClick}
      className={`font-semibold ${className}`}
    >
      {config.text}
    </CustomButton>
  );
};

export default ProfileButton;