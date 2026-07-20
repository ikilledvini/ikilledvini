import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BriefcaseBusiness, Code2, Instagram, Languages, Linkedin, Mail, MessageCircle, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpeg";

const socialLinks = [
  {
    label: "Instagram",
    detail: "@vinidealencar",
    href: "https://www.instagram.com/vinidealencar/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    detail: "Vinícius de Alencar",
    href: "https://www.linkedin.com/in/vin%C3%ADcius-de-alencar-b2697739a/",
    icon: Linkedin,
  },
  {
    label: "Discord",
    detail: "@ikilledvini",
    href: "https://discord.com/users/1174398514772594698",
    icon: MessageCircle,
  },
  {
    label: "Email",
    detail: "vinicius@gamerbiz.com.br",
    href: "mailto:vinicius@gamerbiz.com.br",
    icon: Mail,
  },
] as const;

type Lang = "pt" | "en";

const copy = {
  pt: {
    role: "Web Designer, Influencer Manager",
    socialDescription: "Comunidades, creators e campanhas",
    webDescription: "Sites, interfaces e tecnologia",
    themeLabel: "Alternar tema",
    languageLabel: "Ver página em inglês",
  },
  en: {
    role: "Web Designer, Influencer Manager",
    socialDescription: "Communities, creators and campaigns",
    webDescription: "Websites, interfaces and technology",
    themeLabel: "Toggle theme",
    languageLabel: "View page in Portuguese",
  },
} as const;

export function LinksPage({ lang = "pt" }: { lang?: Lang }) {
  const [dark, setDark] = useState(false);
  const t = copy[lang];
  const prefix = lang === "en" ? "/en" : "";
  const languageTarget = lang === "en" ? "/links" : "/en/links";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDark(stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <main className="relative flex min-h-screen justify-center overflow-hidden bg-background px-5 py-12 text-foreground sm:py-16">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <section className="relative w-full max-w-xl">
        <div className="flex justify-end gap-2">
          <Link to={languageTarget} aria-label={t.languageLabel} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Languages className="h-4 w-4" />
            {lang === "pt" ? "EN" : "PT"}
          </Link>
          <button onClick={toggleTheme} aria-label={t.themeLabel} className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-3 text-center">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_50px_rgba(160,110,255,0.2)]">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight">Vinicius de <span className="text-primary">Alencar</span></h1>
          <p className="mt-1 font-medium text-muted-foreground">@ikilledvini</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{t.role}</p>
        </div>

        <div className="mt-8 space-y-3">
          {socialLinks.map(({ label, detail, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block font-bold">{label}</span><span className="block truncate text-sm text-muted-foreground">{detail}</span></span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to={`${prefix}/socialmedia`} className="group rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary">
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
            <span className="mt-4 flex items-center justify-between font-bold">Social Media <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
            <span className="mt-1 block text-xs text-muted-foreground">{t.socialDescription}</span>
          </Link>
          <Link to={`${prefix}/webdesign`} className="group rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="mt-4 flex items-center justify-between font-bold">Webdesign <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
            <span className="mt-1 block text-xs text-muted-foreground">{t.webDescription}</span>
          </Link>
        </div>

        <Link to={lang === "en" ? "/en" : "/"} className="mt-8 block text-center text-xs font-bold tracking-wider text-muted-foreground transition-colors hover:text-primary">
          ikilled<span className="text-primary">vini</span>
        </Link>
      </section>
    </main>
  );
}
