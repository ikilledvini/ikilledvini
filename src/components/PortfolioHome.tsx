import { Link } from "@tanstack/react-router";
import { ArrowRight, Languages } from "lucide-react";
import { useEffect } from "react";
import profileImg from "@/assets/profile.jpeg";

type Lang = "pt" | "en";

const copy = {
  pt: {
    greeting: "Olá, eu sou",
    intro: "Escolha uma área para conhecer meu trabalho.",
    social: "Social Media",
    socialDescription: "Comunidades, influenciadores, campanhas e estratégia digital.",
    web: "Webdesign",
    webDescription: "Interfaces, experiências digitais e desenvolvimento web.",
    links: "Links & Contato",
    linksDescription: "Redes sociais, contato e todos os meus canais em um só lugar.",
    languageLabel: "Ver página em inglês",
  },
  en: {
    greeting: "Hi, I'm",
    intro: "Choose an area to explore my work.",
    social: "Social Media",
    socialDescription: "Communities, influencers, campaigns and digital strategy.",
    web: "Web Design",
    webDescription: "Interfaces, digital experiences and web development.",
    links: "Links & Contact",
    linksDescription: "Social profiles, contact details and all my channels in one place.",
    languageLabel: "Ver página em português",
  },
} as const;

export function PortfolioHome({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const prefix = lang === "en" ? "/en" : "";
  const languageTarget = lang === "en" ? "/" : "/en";

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 px-6 py-16 text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10 flex justify-end">
          <Link
            to={languageTarget}
            aria-label={t.languageLabel}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 transition hover:border-primary hover:text-white"
          >
            <Languages className="h-4 w-4" />
            {lang === "pt" ? "EN" : "PT"}
          </Link>
        </div>

        <section className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-20">
          <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_70px_rgba(160,110,255,0.18)] md:h-72 md:w-72">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/60">{t.greeting}</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Vinicius de <span className="text-primary">Alencar</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-white/65">@ikilledvini</p>
            <p className="mt-6 text-base text-white/55">{t.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <PortfolioLink
                to={`${prefix}/socialmedia`}
                title={t.social}
                description={t.socialDescription}
              />
              <PortfolioLink
                to={`${prefix}/webdesign`}
                title={t.web}
                description={t.webDescription}
              />
            </div>
            <div className="mt-4">
              <PortfolioLink to={`${prefix}/links`} title={t.links} description={t.linksDescription} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function PortfolioLink({ to, title, description }: { to: string; title: string; description: string }) {
  return (
    <Link
      to={to}
      className="group block rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
    >
      <span className="flex items-center justify-between text-lg font-bold">
        {title}
        <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-white/55">{description}</span>
    </Link>
  );
}
