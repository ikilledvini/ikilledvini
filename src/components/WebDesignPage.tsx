import { Link } from "@tanstack/react-router";
import { ArrowLeft, Languages, Mail, MonitorSmartphone } from "lucide-react";
import { useEffect } from "react";
import profileImg from "@/assets/profile.jpeg";

type Lang = "pt" | "en";

const copy = {
  pt: {
    back: "Início",
    language: "Mudar para inglês",
    greeting: "Olá, eu sou",
    role: "Web Designer · Desenvolvedor de experiências digitais",
    eyebrow: "Portfólio de Webdesign",
    title: <>Projetos em <span className="text-primary">construção</span></>,
    body: "Esta nova área já está pronta para receber meus projetos de interfaces, sites e experiências digitais. Em breve, cada trabalho será apresentado com contexto, processo e resultado.",
    contact: "Falar comigo",
    footer: "© 2026 ikilledvini (Vinicius de Alencar).",
  },
  en: {
    back: "Home",
    language: "Switch to Portuguese",
    greeting: "Hi, I'm",
    role: "Web Designer · Digital Experience Developer",
    eyebrow: "Web Design Portfolio",
    title: <>Projects in <span className="text-primary">progress</span></>,
    body: "This new area is ready to showcase my interface, website and digital experience projects. Soon, each project will be presented with its context, process and results.",
    contact: "Get in touch",
    footer: "© 2026 ikilledvini (Vinicius de Alencar).",
  },
} as const;

export function WebDesignPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = lang === "en" ? "/en" : "/";
  const languageTarget = lang === "en" ? "/webdesign" : "/en/webdesign";

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to={home} className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>
          <Link to={languageTarget} aria-label={t.language} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:border-primary">
            <Languages className="h-3.5 w-3.5" /> {lang === "pt" ? "EN" : "PT"}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-20 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-primary md:h-56 md:w-56">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{t.greeting}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Vinicius de <span className="text-primary">Alencar</span></h1>
            <p className="mt-3 text-lg text-muted-foreground">@ikilledvini</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{t.role}</p>
          </div>
        </section>

        <section className="border-t border-border py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-primary/30 bg-primary/5">
              <MonitorSmartphone className="h-20 w-20 text-primary/70" strokeWidth={1.2} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">{t.title}</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{t.body}</p>
              <a href="mailto:vinicius@gamerbiz.com.br" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                <Mail className="h-4 w-4" /> {t.contact}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-border py-8 text-center text-sm text-muted-foreground">{t.footer}</footer>
    </div>
  );
}
