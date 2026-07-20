import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/socialmedia")({
  head: () => ({
    meta: [
      { title: "Social Media — Vinicius de Alencar" },
      { name: "description", content: "Portfólio de social media, comunidades digitais e gestão de influenciadores." },
    ],
  }),
  component: () => <LandingPage initialLang="pt" />,
});
