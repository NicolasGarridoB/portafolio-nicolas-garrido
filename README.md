# Portafolio Nicolás Garrido

Un portafolio moderno y profesional siguiendo la arquitectura de componentes atómicos y las mejores prácticas de desarrollo.

## Stack Tecnológico

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
- **npm** - Package Manager

## Arquitectura de Componentes (Atomic Design)

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

## Configuración e Instalación

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

## Testing

El proyecto incluye tests unitarios para componentes principales usando **Vitest** y **Testing Library**.

### Ejecutar tests
```bash
npm run test
```
