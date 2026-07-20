import { createFileRoute } from "@tanstack/react-router";
import { WebDesignPage } from "@/components/WebDesignPage";

export const Route = createFileRoute("/en/webdesign")({
  head: () => ({
    meta: [
      { title: "Web Design — Vinicius de Alencar" },
      { name: "description", content: "Web design and digital experiences portfolio by Vinicius de Alencar." },
    ],
  }),
  component: () => <WebDesignPage lang="en" />,
});
