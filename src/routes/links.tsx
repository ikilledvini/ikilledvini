import { createFileRoute } from "@tanstack/react-router";
import { LinksPage } from "@/components/LinksPage";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Links — Vinicius de Alencar" },
      { name: "description", content: "Redes sociais, contato e portfólios de Vinicius de Alencar." },
    ],
  }),
  component: LinksPage,
});
