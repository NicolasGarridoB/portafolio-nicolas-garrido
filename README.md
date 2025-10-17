# Portafolio Nicolás Garrido - Desarrollador Full Stack

Un portafolio moderno y profesional desarrollado con las últimas tecnologías web, siguiendo la arquitectura de componentes atómicos y las mejores prácticas de desarrollo.

## 🚀 Stack Tecnológico

### Frontend Framework
- **React 19+** con TypeScript
- **React Router v7** (última versión)
- **Ant Design v5.27+** - UI Library
- **TailwindCSS v4+** - Styling integrado con Ant Design

### Build Tools & Testing
- **Vite v7+** - Build Tool ultrarrápido
- **Vitest** - Testing framework
- **Testing Library** - Utilidades de testing
- **TypeScript 5.9+** - Tipado estático

### Deployment
- **Docker** - Containerización
- **npm** - Package Manager

## 📁 Estructura del Proyecto

```
portafolio-nicolas-garrido/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── react-router.config.ts
├── tailwind.config.ts
├── Dockerfile
├── README.md
├── app/
│   ├── root.tsx                    # Root component con ConfigProvider
│   ├── routes.ts                   # Configuración de rutas
│   ├── app.css                     # Estilos globales
│   └── routes/
│       └── home.tsx                # Ruta principal
├── assets/
│   └── images/                     # Imágenes del proyecto
├── components/
│   ├── atoms/                      # Componentes básicos
│   │   ├── Header/
│   │   │   ├── Logo.tsx
│   │   │   ├── NavBarLinks.tsx
│   │   │   └── ProfileButton.tsx
│   │   ├── Buttons/
│   │   │   └── CustomButton.tsx
│   │   └── Cards/
│   │       └── ProjectCard.tsx
│   ├── molecules/                  # Combinaciones de átomos
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── styles.tsx
│   │   ├── HeroSection/
│   │   │   ├── HeroText.tsx
│   │   │   └── HeroButtons.tsx
│   │   ├── ProjectCard/
│   │   │   └── ProjectCard.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   ├── organisms/                  # Secciones completas
│   │   ├── HeroSection/
│   │   │   └── HeroSection.tsx
│   │   ├── ProjectsSection/
│   │   │   └── ProjectsSection.tsx
│   │   └── AboutSection/
│   │       └── AboutSection.tsx
│   ├── layouts/                    # Layouts de página
│   │   └── home/
│   │       ├── HomeLayout.tsx
│   │       └── styles.tsx
│   └── __tests__/                  # Tests unitarios
│       ├── CustomButton.test.tsx
│       └── Logo.test.tsx
├── src/
│   └── test/
│       └── setup.ts                # Configuración de tests
└── public/                         # Archivos estáticos
```

## 🎨 Arquitectura de Componentes (Atomic Design)

### Átomos (`components/atoms/`)
Componentes básicos e indivisibles:

- **Logo.tsx** - Logo personal/marca con props configurables
- **CustomButton.tsx** - Botón reutilizable con variantes (primary, secondary, ghost)
- **NavBarLinks.tsx** - Enlaces de navegación con scroll suave
- **ProfileButton.tsx** - Botón de contacto/CV con diferentes tipos
- **ProjectCard.tsx** - Tarjeta básica de proyecto

### Moléculas (`components/molecules/`)
Combinaciones de átomos que forman componentes funcionales:

- **Header.tsx** - Encabezado completo con navegación responsive
- **HeroText.tsx** - Sección de texto principal del hero
- **HeroButtons.tsx** - Contenedor de botones de llamada a la acción
- **ProjectCard.tsx** - Tarjeta avanzada de proyecto con badges
- **Footer.tsx** - Pie de página completo con información de contacto

### Organismos (`components/organisms/`)
Secciones completas de la página:

- **HeroSection.tsx** - Sección principal con gradiente de fondo
- **ProjectsSection.tsx** - Galería de proyectos con filtros
- **AboutSection.tsx** - Sección sobre mí con habilidades y estadísticas

### Layouts (`components/layouts/`)
Composiciones completas de página:

- **HomeLayout.tsx** - Layout principal que integra todos los organismos

## 🎯 Características Principales

### Hero Section
- Título personalizable: "Hola, soy [TU_NOMBRE]"
- Subtítulo: "Desarrollador Full Stack especializado en [TUS_TECNOLOGÍAS]"
- Descripción profesional
- Botones de acción: "Ver Proyectos" y "Descargar CV"
- Fondo con gradiente animado
- Scroll indicator animado

### Proyectos Destacados
- Mínimo 3 proyectos con datos completos
- Filtros por categoría (Frontend, Backend, Full Stack)
- Información técnica detallada
- Enlaces a GitHub y Demo
- Sistema de badges para proyectos destacados
- Carga progresiva con "Ver más"

### Header Navigation
- Logo/Nombre clicable
- Enlaces: Inicio, Proyectos, Sobre mí, Contacto
- Navegación con scroll suave
- Responsive con menú hamburguesa
- Indicador de sección activa

### Footer Completo
- Información de contacto
- Enlaces a redes sociales profesionales
- Copyright dinámico
- Grid responsive

## 🔧 Configuración e Instalación

### Requisitos Previos
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0

### Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

3. **Ver el proyecto**
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo con hot reload

# Construcción
npm run build           # Construir para producción
npm run start           # Servir build de producción

# Testing
npm run test            # Ejecutar tests unitarios

# Calidad de código
npm run typecheck       # Verificar tipos TypeScript
```

## 🧪 Testing

El proyecto incluye tests unitarios para componentes principales usando **Vitest** y **Testing Library**.

### Ejecutar tests
```bash
npm run test
```

## 🐳 Docker

### Construcción de imagen
```bash
docker build -t portafolio-nicolas .
```

### Ejecutar contenedor
```bash
docker run -p 3000:3000 portafolio-nicolas
```

## 📱 Responsive Design

El portafolio está completamente optimizado para:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Personalización

### Contenido
Para personalizar el contenido:

1. **Información personal** - Editar `components/layouts/home/HomeLayout.tsx`
2. **Proyectos** - Modificar array `defaultProjects` en `ProjectsSection.tsx`
3. **Habilidades** - Actualizar array `defaultSkills` en `AboutSection.tsx`
4. **Contacto** - Cambiar datos en `Footer.tsx` y componentes relacionados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

**Nicolás Garrido** - Desarrollador Full Stack

- **Email:** contacto@nicolasgarrido.dev
- **LinkedIn:** [linkedin.com/in/nicolasgarrido](https://linkedin.com/in/nicolasgarrido)
- **GitHub:** [github.com/nicolasgarrido](https://github.com/nicolasgarrido)

---

⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub.
