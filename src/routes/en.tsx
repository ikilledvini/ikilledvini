import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Vinicius de Alencar — ikilledvini" },
      { name: "description", content: "Influencer Manager, Digital Community Manager and Systems Development Technician." },
      { property: "og:title", content: "Vinicius de Alencar — ikilledvini" },
      { property: "og:description", content: "Digital portfolio — communities, influencers and technology." },
    ],
  }),
  component: () => <LandingPage initialLang="en" />,
});
