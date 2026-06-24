import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinicius de Alencar — ikilledvini" },
      { name: "description", content: "Manager de Influenciadores, Gestor de Comunidades Digitais e Técnico em Desenvolvimento de Sistemas." },
      { property: "og:title", content: "Vinicius de Alencar — ikilledvini" },
      { property: "og:description", content: "Portfólio digital — comunidades, influenciadores e tecnologia." },
    ],
  }),
  component: () => <LandingPage initialLang="pt" />,
});
