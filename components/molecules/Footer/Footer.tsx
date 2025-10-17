import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { 
  GithubOutlined, 
  LinkedinOutlined, 
  MailOutlined, 
  PhoneOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';
import CustomButton from '@atoms/Buttons/CustomButton';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'custom';
  url: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
}

export interface FooterProps {
  /**
   * Información de contacto
   */
  contactInfo?: ContactInfo;
  /**
   * Enlaces sociales
   */
  socialLinks?: SocialLink[];
  /**
   * Texto de copyright personalizado
   */
  copyrightText?: string;
  /**
   * Año actual (se auto-calcula si no se provee)
   */
  currentYear?: number;
  /**
   * Mostrar sección de contacto
   */
  showContactSection?: boolean;
  /**
   * Clase CSS adicional
   */
  className?: string;
}

const defaultContactInfo: ContactInfo = {
  email: 'nicolasgarrido802@gmail.com',
  phone: '+56 9 45205623',
  location: 'Santiago, Chile'
};

const defaultSocialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/NicolasGarridoB',
    label: 'GitHub'
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/nicol%C3%A1s-garrido-7b53b9286/',
    label: 'LinkedIn'
  }
];

const Footer: React.FC<FooterProps> = ({
  contactInfo = defaultContactInfo,
  socialLinks = defaultSocialLinks,
  copyrightText,
  currentYear = new Date().getFullYear(),
  showContactSection = true,
  className = ''
}) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <GithubOutlined />;
      case 'linkedin':
        return <LinkedinOutlined />;
      default:
        return null;
    }
  };

  const defaultCopyright = `© ${currentYear} Nicolás Garrido. Todos los derechos reservados.`;

  return (
    <AntFooter 
      className={`bg-gray-900 text-white ${className}`}
      style={{
        backgroundColor: '#1f2937',
        color: '#fff',
        marginTop: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {showContactSection && (
          <>
            <Row gutter={[32, 32]} className="mb-8">
              {/* Información Personal */}
              <Col xs={24} md={8}>
                <Title level={4} className="text-white mb-4 font-semibold">
                  Nicolás Garrido
                </Title>
                <Paragraph className="text-gray-100 text-base leading-relaxed">
                  Apasionado por la tecnología y el aprendizaje continuo. Actualmente en proceso de formación como desarrollador, con conocimientos en React, Node.js, JavaScript, AWS y GCP, y orquestaciones de inteligencia artificial en Flowise.
                </Paragraph>
              </Col>

              {/* Contacto */}
              <Col xs={24} md={8}>
                <Title level={4} className="text-white mb-4 font-semibold">
                  Contacto
                </Title>
                <Space direction="vertical" size="small" className="w-full">
                  {contactInfo.email && (
                    <div className="flex items-center space-x-3">
                      <MailOutlined className="text-blue-300 text-lg" />
                      <Text className="text-white">
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="text-white hover:text-blue-300 transition-colors duration-200"
                        >
                          {contactInfo.email}
                        </a>
                      </Text>
                    </div>
                  )}
                  
                  {contactInfo.phone && (
                    <div className="flex items-center space-x-3">
                      <PhoneOutlined className="text-blue-300 text-lg" />
                      <Text className="text-white">
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="text-white hover:text-blue-300 transition-colors duration-200"
                        >
                          {contactInfo.phone}
                        </a>
                      </Text>
                    </div>
                  )}
                  
                  {contactInfo.location && (
                    <div className="flex items-center space-x-3">
                      <EnvironmentOutlined className="text-blue-300 text-lg" />
                      <Text className="text-white">{contactInfo.location}</Text>
                    </div>
                  )}
                </Space>
              </Col>

              {/* Redes Sociales */}
              <Col xs={24} md={8}>
                <Title level={4} className="text-white mb-4 font-semibold">
                  Sígueme
                </Title>
                <Space direction="vertical" size="middle" className="w-full">
                  {socialLinks.map((link, index) => (
                    <CustomButton
                      key={index}
                      variant="ghost"
                      size="middle"
                      icon={link.icon || getSocialIcon(link.platform)}
                      href={link.url}
                      target="_blank"
                      className="text-white hover:text-blue-300 border-none p-0 h-auto transition-colors duration-200"
                    >
                      {link.label}
                    </CustomButton>
                  ))}
                </Space>
              </Col>
            </Row>
            
            <Divider className="border-gray-700" />
          </>
        )}

        {/* Copyright */}
        <Row>
          <Col span={24}>
            <div className="text-center py-4">
              <Text className="text-gray-200 text-sm font-medium">
                {copyrightText || defaultCopyright}
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;