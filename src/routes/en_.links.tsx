import { createFileRoute } from "@tanstack/react-router";
import { LinksPage } from "@/components/LinksPage";

export const Route = createFileRoute("/en_/links")({
  head: () => ({
    meta: [
      { title: "Links — Vinicius de Alencar" },
      { name: "description", content: "Social profiles, contact details and portfolios by Vinicius de Alencar." },
    ],
  }),
  component: () => <LinksPage lang="en" />,
});
