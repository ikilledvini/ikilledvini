import { createFileRoute } from "@tanstack/react-router";
import { WebDesignPage } from "@/components/WebDesignPage";

export const Route = createFileRoute("/webdesign")({
  head: () => ({
    meta: [
      { title: "Webdesign — Vinicius de Alencar" },
      { name: "description", content: "Portfólio de webdesign e experiências digitais de Vinicius de Alencar." },
    ],
  }),
  component: () => <WebDesignPage lang="pt" />,
});
