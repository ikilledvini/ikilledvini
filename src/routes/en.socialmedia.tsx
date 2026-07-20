import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/en/socialmedia")({
  head: () => ({
    meta: [
      { title: "Social Media — Vinicius de Alencar" },
      { name: "description", content: "Social media, digital communities and influencer management portfolio." },
    ],
  }),
  component: () => <LandingPage initialLang="en" />,
});
