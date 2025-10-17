import type { Route } from "./+types/home";
import HomeLayout from "@layouts/home/HomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nicolás Garrido - Desarrollador Full Stack" },
    { name: "description", content: "Portafolio profesional de Nicolás Garrido, desarrollador Full Stack especializado en React, TypeScript y tecnologías modernas." },
    { name: "keywords", content: "desarrollador, full stack, react, typescript, portfolio, frontend, backend" },
    { property: "og:title", content: "Nicolás Garrido - Desarrollador Full Stack" },
    { property: "og:description", content: "Portafolio profesional de Nicolás Garrido" },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <HomeLayout />;
}
