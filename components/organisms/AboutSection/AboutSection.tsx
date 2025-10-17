import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Card, Progress, Avatar, Space } from 'antd';
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  CloudOutlined, 
  MobileOutlined,
  UserOutlined 
} from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: React.ReactNode;
}

export interface AboutSectionProps {
  /**
   * Título de la sección
   */
  title?: string;
  /**
   * Descripción personal
   */
  description?: string;
  /**
   * URL de la foto de perfil
   */
  profileImageUrl?: string;
  /**
   * Lista de habilidades
   */
  skills?: Skill[];
  /**
   * Experiencia en años
   */
  yearsOfExperience?: number;
  /**
   * Número de proyectos completados
   */
  completedProjects?: number;
  /**
   * Mostrar estadísticas
   */
  showStats?: boolean;
  /**
   * Clase CSS adicional
   */
  className?: string;
  /**
   * ID de la sección para navegación
   */
  id?: string;
}

// Habilidades por defecto (niveles realistas para estudiante)
const defaultSkills: Skill[] = [
  { name: 'React', level: 75, category: 'frontend', icon: <CodeOutlined /> },
  { name: 'JavaScript', level: 80, category: 'frontend', icon: <CodeOutlined /> },
  { name: 'HTML/CSS', level: 85, category: 'frontend', icon: <CodeOutlined /> },
  { name: 'TypeScript', level: 65, category: 'frontend', icon: <CodeOutlined /> },
  { name: 'Node.js', level: 60, category: 'backend', icon: <DatabaseOutlined /> },
  { name: 'Express', level: 55, category: 'backend', icon: <DatabaseOutlined /> },
  { name: 'MongoDB', level: 50, category: 'backend', icon: <DatabaseOutlined /> },
  { name: 'PostgreSQL', level: 45, category: 'backend', icon: <DatabaseOutlined /> },
  { name: 'Git', level: 70, category: 'tools', icon: <CodeOutlined /> },
  { name: 'Docker', level: 40, category: 'tools', icon: <CloudOutlined /> },
  { name: 'Figma', level: 60, category: 'tools', icon: <CodeOutlined /> },
  { name: 'React Native', level: 35, category: 'other', icon: <MobileOutlined /> },
];

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Sobre Mí',
  description = `Soy un estudiante de Ingeniería en Informática apasionado por la tecnología y el aprendizaje continuo. 
    Actualmente me encuentro en proceso de formación como desarrollador, con conocimientos en React, Node.js, JavaScript, bases de datos como PostgreSQL, y orquestaciones de inteligencia artificial en Flowise. 
    A través de proyectos académicos y profesionales, he desarrollado habilidades tanto en frontend como en backend.`,
  profileImageUrl = '/images/perfil.png',
  skills = defaultSkills,
  yearsOfExperience = 2,
  completedProjects = 8,
  showStats = true,
  className = '',
  id = 'sobre-mi'
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Debug: Mostrar la URL de la imagen
  console.log('Intentando cargar imagen desde:', profileImageUrl);
  
  const groupedSkills = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  };

  const skillCategories = [
    { key: 'frontend', title: 'Frontend', skills: groupedSkills.frontend },
    { key: 'backend', title: 'Backend', skills: groupedSkills.backend },
    { key: 'tools', title: 'Herramientas', skills: groupedSkills.tools },
    { key: 'other', title: 'Otros', skills: groupedSkills.other },
  ];

  return (
    <section
      id={id}
      className={`py-20 bg-white ${className}`}
    >
      <Content>
        <div className="container-custom">
          {/* Header de la sección */}
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </Title>
          </div>

          <Row gutter={[48, 48]} align="top">
            {/* Columna izquierda - Información personal */}
            <Col xs={24} lg={12}>
              <div className="space-y-8 h-full">
                {/* Foto de perfil y descripción */}
                <div className="text-center lg:text-left">
                  {!imageError ? (
                    <div className="w-[160px] h-[160px] rounded-full mb-6 shadow-lg mx-auto lg:mx-0 overflow-hidden">
                      <img
                        src={profileImageUrl}
                        alt="Foto de perfil"
                        className="w-full h-full object-contain bg-gray-50"
                        onError={() => {
                          console.log('Error loading image');
                          console.log('Image URL attempted:', profileImageUrl);
                          setImageError(true);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-[160px] h-[160px] rounded-full mb-6 shadow-lg mx-auto lg:mx-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <UserOutlined className="text-white text-5xl" />
                      </div>
                    </div>
                  )}
                  
                  <Paragraph className="text-lg text-gray-600 leading-relaxed">
                    {description}
                  </Paragraph>
                </div>

                {/* Estadísticas */}
                {showStats && (
                  <div className="bg-gray-50 rounded-lg p-6 mt-8">
                    <Row gutter={[24, 24]}>
                      <Col xs={12} sm={12}>
                        <div className="text-center">
                          <Title level={2} className="text-blue-600 mb-2">
                            {yearsOfExperience}+
                          </Title>
                          <Text className="text-gray-600 font-medium">
                            Años de experiencia
                          </Text>
                        </div>
                      </Col>
                      <Col xs={12} sm={12}>
                        <div className="text-center">
                          <Title level={2} className="text-blue-600 mb-2">
                            {completedProjects}+
                          </Title>
                          <Text className="text-gray-600 font-medium">
                            Proyectos completados
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Col>

            {/* Columna derecha - Habilidades */}
            <Col xs={24} lg={12}>
              <div className="space-y-6 h-full">
                <Title level={3} className="text-2xl font-semibold text-gray-900 mb-6">
                  Habilidades Técnicas
                </Title>

                {skillCategories.map(category => (
                  category.skills.length > 0 && (
                    <Card 
                      key={category.key}
                      title={category.title}
                      className="shadow-sm"
                      size="small"
                    >
                      <Space direction="vertical" className="w-full" size="middle">
                        {category.skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Space>
                                {skill.icon}
                                <Text strong>{skill.name}</Text>
                              </Space>
                              <Text className="text-gray-500">{skill.level}%</Text>
                            </div>
                            <Progress
                              percent={skill.level}
                              showInfo={false}
                              strokeColor={{
                                '0%': '#667eea',
                                '100%': '#764ba2',
                              }}
                              trailColor="#f0f0f0"
                            />
                          </div>
                        ))}
                      </Space>
                    </Card>
                  )
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </section>
  );
};

export default AboutSection;