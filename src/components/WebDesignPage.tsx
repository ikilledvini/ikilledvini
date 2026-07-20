import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Instagram,
  Languages,
  Layout,
  Mail,
  Moon,
  Server,
  Smartphone,
  Sun,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpeg";
import roboticsImg from "@/assets/robotics-award.jpg";
import gamerbizImg from "@/assets/gamerbiz.jpg";

type Lang = "pt" | "en";

const projects = [
  {
    title: "JoãoPdzin — Media Kit",
    url: "https://joaopdzin.vercel.app/",
    type: { pt: "Projeto real · em evolução", en: "Live project · continuously evolving" },
    description: {
      pt: "Portfólio e media kit desenvolvido para JoãoPdzin, um dos criadores mais influentes do nicho de Roblox no Brasil. O site reúne audiência, formatos comerciais, estatísticas e cases para conectar o creator a grandes marcas — incluindo colaborações com Duolingo e Havit.",
      en: "Portfolio and media kit developed for JoãoPdzin, one of Brazil's most influential Roblox creators. The website brings together audience data, commercial formats, statistics and case studies to connect the creator with major brands — including collaborations with Duolingo and Havit.",
    },
    tags: ["Media Kit", "Creator Economy", "Responsive UI"],
  },
  {
    title: "Roxo Nativo",
    url: "https://roxo-nativo-flow.vercel.app/",
    type: { pt: "Projeto conceitual", en: "Concept project" },
    description: {
      pt: "Landing page fictícia para uma açaiteria, criada para explorar identidade visual, apresentação de produtos e uma jornada de compra simples. O projeto valoriza cores marcantes, navegação responsiva e chamadas claras para o pedido online.",
      en: "A fictional landing page for an açaí shop, created to explore visual identity, product presentation and a simple purchase journey. The project combines bold colors, responsive navigation and clear online-order calls to action.",
    },
    tags: ["Landing Page", "Food Business", "UI Design"],
  },
  {
    title: "PetCare+",
    url: "https://petcare-plus-digital-care.vercel.app/",
    type: { pt: "Projeto conceitual", en: "Concept project" },
    description: {
      pt: "Site institucional fictício para uma clínica veterinária, pensado para transmitir confiança e acolhimento. A experiência organiza serviços, equipe, informações da clínica e agendamento em uma navegação clara e acessível.",
      en: "A fictional institutional website for a veterinary clinic, designed to communicate trust and warmth. The experience organizes services, staff, clinic information and appointment scheduling into clear, accessible navigation.",
    },
    tags: ["Institutional", "Healthcare", "UX Writing"],
  },
] as const;

const copy = {
  pt: {
    back: "Início",
    language: "Mudar para inglês",
    themeAria: "Alternar tema",
    nav: [
      ["sobre", "Sobre"],
      ["trajetoria", "Trajetória"],
      ["projetos", "Projetos"],
      ["formacao", "Formação"],
      ["competencias", "Competências"],
      ["contato", "Contato"],
    ],
    greeting: "Olá, eu sou",
    location: "Fortaleza, CE, Brasil",
    role: "Web Designer · Desenvolvedor de Sistemas · Criador de Experiências Digitais",
    intro: "Transformo ideias em interfaces claras, responsivas e preparadas para gerar conexões reais entre pessoas, creators e marcas.",
    aboutTitle: <>Sobre <span className="text-primary">Mim</span></>,
    aboutBody: "Olá! Meu nome é Vinicius, tenho 17 anos e desde sempre tive uma paixão em me apresentar e sentir que consegui conectar as pessoas. Comecei na robótica competitiva, passei pela gestão exclusiva de comunidades digitais e hoje trabalho ajudando influenciadores e marcas a crescerem de forma orgânica. Sou curioso por natureza, autodidata e sempre gosto de estar fazendo coisas que me instiguem a aprender mais.",
    trajectoryTitle: <>Minha <span className="text-primary">Trajetória</span></>,
    trajectoryIntro: "Uma trajetória construída entre criatividade, tecnologia e comunidades digitais.",
    roboticsTitle: "Robótica",
    roboticsPeriod: "2022 · O primeiro grande projeto",
    roboticsBody: "Aos 14 anos, minha equipe foi campeã do Torneio Regional SESI de Robótica e se classificou para a etapa nacional em Brasília. Durante a competição, atuei em frentes que uniam design, social media e webdesign, aprendendo a transformar ideias técnicas em experiências e apresentações capazes de conectar pessoas.",
    communityTitle: "Comunidades digitais",
    communityPeriod: "2024 · Estrutura e automação",
    communityBody: "Passei a construir a estrutura técnica de servidores no Discord, incluindo organização de canais, integrações com webhooks e bots. Também desenvolvi códigos de bots para necessidades específicas, criando fluxos mais eficientes para moderação, atendimento e gestão de comunidades.",
    creatorTitle: "Creators e media kits",
    creatorPeriod: "2025 · Design com resultado",
    creatorBody: "Desenvolvi o portfólio e media kit de JoãoPdzin, reunindo alcance, audiência e formatos comerciais em uma experiência voltada a marcas. O projeto segue sendo atualizado e apoiou a apresentação do creator em colaborações com Duolingo e Havit.",
    gamerbizTitle: "GamerBiz",
    gamerbizPeriod: "2026 · Produtos para creators",
    gamerbizBody: "Estruturei o servidor da agência no Discord e passei a auxiliar no desenvolvimento de uma plataforma web de media kits para influenciadores, com informações atualizadas e integração planejada ao site da GamerBiz.",
    projectsEyebrow: "Projetos selecionados",
    projectsTitle: <>Sites que unem <span className="text-primary">forma e função</span></>,
    projectsIntro: "Projetos reais e conceituais desenvolvidos para diferentes públicos e objetivos.",
    viewProject: "Visitar projeto",
    educationTitle: <>Formação <span className="text-primary">Acadêmica</span></>,
    educationSchool: "SENAI",
    educationCourse: "Técnico em Desenvolvimento de Sistemas",
    educationPeriod: "Janeiro de 2024 — Novembro de 2026",
    educationBody: "Formação técnica voltada ao ciclo completo de desenvolvimento de software: levantamento de requisitos, prototipação, lógica de programação, bancos de dados, desenvolvimento web, APIs, testes, versionamento e práticas de trabalho em equipe.",
    experienceTitle: <>Experiência <span className="text-primary">Profissional</span></>,
    experiencePeriod: "Junho de 2026 — Atualmente",
    experienceCompany: "Gamerbiz",
    experienceRole: "Analista de Negócios",
    experienceBody: "Auxílio no desenvolvimento de uma plataforma digital integrada de media kits para os influenciadores da agência, planejada para reunir e atualizar automaticamente informações estratégicas. Também fui responsável pela estruturação técnica do Discord da GamerBiz, conectando processos, creators e oportunidades comerciais.",
    experienceCTA: "Ver no Instagram",
    skillsTitle: <>Competências <span className="text-primary">Principais</span></>,
    skillGroups: [
      { title: "Web & Interface", icon: Layout, items: ["HTML, CSS e JavaScript", "Interfaces responsivas", "Prototipação e UI design", "Acessibilidade e experiência do usuário"] },
      { title: "Desenvolvimento", icon: Code2, items: ["Lógica de programação", "APIs e integrações", "Git e versionamento", "Testes e documentação"] },
      { title: "Dados & Sistemas", icon: Database, items: ["Modelagem de dados", "Bancos de dados relacionais", "Análise de requisitos", "Arquitetura de sistemas"] },
      { title: "Automação & Comunidades", icon: Bot, items: ["Bots para Discord", "Webhooks e automações", "Estruturação de servidores", "Soluções para creators"] },
    ],
    contactTitle: <>Vamos construir algo <span className="text-primary">juntos?</span></>,
    contactBody: "Estou disponível para novos sites, interfaces, media kits e projetos digitais.",
    contact: "Falar comigo",
    linksButton: "Ver links e redes",
    footer: "Vinicius de Alencar",
  },
  en: {
    back: "Home",
    language: "Switch to Portuguese",
    themeAria: "Toggle theme",
    nav: [
      ["sobre", "About"],
      ["trajetoria", "Journey"],
      ["projetos", "Projects"],
      ["formacao", "Education"],
      ["competencias", "Skills"],
      ["contato", "Contact"],
    ],
    greeting: "Hi, I'm",
    location: "Fortaleza, CE, Brazil",
    role: "Web Designer · Systems Developer · Digital Experience Creator",
    intro: "I turn ideas into clear, responsive interfaces designed to create real connections between people, creators and brands.",
    aboutTitle: <>About <span className="text-primary">Me</span></>,
    aboutBody: "Hi! My name is Vinicius, I'm 17 and I've always been passionate about presenting and connecting people. I started in competitive robotics, moved into managing digital communities, and today I help influencers and brands grow organically. I'm naturally curious, self-taught, and I always enjoy working on things that push me to learn more.",
    trajectoryTitle: <>My <span className="text-primary">Journey</span></>,
    trajectoryIntro: "A journey built at the intersection of creativity, technology and digital communities.",
    roboticsTitle: "Robotics",
    roboticsPeriod: "2022 · The first major project",
    roboticsBody: "At 14, my team won the SESI Regional Robotics Tournament and qualified for the national stage in Brasília. During the competition, I worked across design, social media and web design, learning to turn technical ideas into experiences and presentations that connect people.",
    communityTitle: "Digital communities",
    communityPeriod: "2024 · Structure and automation",
    communityBody: "I began building the technical structure of Discord servers, including channel organization and integrations with webhooks and bots. I also developed custom bot code for specific needs, creating more efficient moderation, support and community-management flows.",
    creatorTitle: "Creators and media kits",
    creatorPeriod: "2025 · Design with results",
    creatorBody: "I developed JoãoPdzin's portfolio and media kit, bringing reach, audience data and commercial formats into a brand-focused experience. The project continues to evolve and supported the creator's presentation for collaborations with Duolingo and Havit.",
    gamerbizTitle: "GamerBiz",
    gamerbizPeriod: "2026 · Products for creators",
    gamerbizBody: "I structured the agency's Discord server and began supporting the development of a web-based media-kit platform for influencers, with updated information and a planned integration into the GamerBiz website.",
    projectsEyebrow: "Selected projects",
    projectsTitle: <>Websites where <span className="text-primary">form meets function</span></>,
    projectsIntro: "Live and conceptual projects designed for different audiences and goals.",
    viewProject: "View project",
    educationTitle: <>Academic <span className="text-primary">Education</span></>,
    educationSchool: "SENAI",
    educationCourse: "Systems Development Technician",
    educationPeriod: "January 2024 — November 2026",
    educationBody: "Technical training covering the full software development cycle: requirements analysis, prototyping, programming logic, databases, web development, APIs, testing, version control and collaborative practices.",
    experienceTitle: <>Professional <span className="text-primary">Experience</span></>,
    experiencePeriod: "June 2026 — Present",
    experienceCompany: "Gamerbiz",
    experienceRole: "Business Analyst",
    experienceBody: "Supporting the development of an integrated digital media-kit platform for the agency's influencers, designed to centralize and automatically update strategic information. I was also responsible for the technical structure of GamerBiz's Discord, connecting processes, creators and commercial opportunities.",
    experienceCTA: "See on Instagram",
    skillsTitle: <>Core <span className="text-primary">Skills</span></>,
    skillGroups: [
      { title: "Web & Interface", icon: Layout, items: ["HTML, CSS and JavaScript", "Responsive interfaces", "Prototyping and UI design", "Accessibility and user experience"] },
      { title: "Development", icon: Code2, items: ["Programming logic", "APIs and integrations", "Git and version control", "Testing and documentation"] },
      { title: "Data & Systems", icon: Database, items: ["Data modeling", "Relational databases", "Requirements analysis", "Systems architecture"] },
      { title: "Automation & Communities", icon: Bot, items: ["Discord bots", "Webhooks and automation", "Server architecture", "Solutions for creators"] },
    ],
    contactTitle: <>Let's build something <span className="text-primary">together?</span></>,
    contactBody: "I'm available for new websites, interfaces, media kits and digital projects.",
    contact: "Get in touch",
    linksButton: "View links and socials",
    footer: "Vinicius de Alencar",
  },
} as const;

export function WebDesignPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = lang === "en" ? "/en" : "/";
  const languageTarget = lang === "en" ? "/webdesign" : "/en/webdesign";
  const linksTarget = lang === "en" ? "/en/links" : "/links";
  const [dark, setDark] = useState(false);
  const [themeUserSet, setThemeUserSet] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") {
      setDark(stored === "dark");
      setThemeUserSet(true);
    } else if (typeof window !== "undefined" && window.matchMedia) {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (themeUserSet || typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => setDark(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [themeUserSet]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
      return next;
    });
    setThemeUserSet(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to={home} className="text-sm font-bold tracking-tight" aria-label={t.back}>
            ikilled<span className="text-primary">vini</span>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            {t.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:inline">{label}</a>
            ))}
            <Link to={languageTarget} aria-label={t.language} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-muted">
              <Languages className="h-3.5 w-3.5" /> {lang === "pt" ? "EN" : "PT"}
            </Link>
            <button onClick={toggleTheme} aria-label={t.themeAria} className="rounded-full border border-border p-2 transition-colors hover:bg-muted">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-32">
        <section className="grid items-center gap-12 pb-24 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_60px_rgba(160,110,255,0.18)] md:h-56 md:w-56">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">{t.greeting}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Vinicius de <span className="text-primary">Alencar</span></h1>
            <p className="mt-3 text-lg font-medium text-muted-foreground">@ikilledvini</p>
            <p className="mt-2 text-sm font-semibold text-primary">{t.location}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.role}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.intro}</p>
          </div>
        </section>

        <Section id="sobre" title={t.aboutTitle}>
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">{t.aboutBody}</p>
        </Section>

        <Section id="trajetoria" title={t.trajectoryTitle} intro={t.trajectoryIntro}>
          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={roboticsImg} alt={t.roboticsTitle} className="aspect-[16/7] w-full object-cover" />
            <div className="p-6 md:p-9">
              <div className="flex items-start gap-4">
                <IconBox><Trophy className="h-5 w-5" /></IconBox>
                <div><p className="text-xs font-bold uppercase tracking-widest text-primary">{t.roboticsPeriod}</p><h3 className="mt-2 text-2xl font-bold">{t.roboticsTitle}</h3></div>
              </div>
              <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">{t.roboticsBody}</p>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <JourneyCard icon={<Server className="h-5 w-5" />} period={t.communityPeriod} title={t.communityTitle} body={t.communityBody} />
            <JourneyCard icon={<Smartphone className="h-5 w-5" />} period={t.creatorPeriod} title={t.creatorTitle} body={t.creatorBody} />
            <JourneyCard icon={<BriefcaseBusiness className="h-5 w-5" />} period={t.gamerbizPeriod} title={t.gamerbizTitle} body={t.gamerbizBody} />
          </div>
        </Section>

        <Section id="projetos" title={t.projectsTitle} intro={t.projectsIntro} eyebrow={t.projectsEyebrow}>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <article key={project.url} className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[1.15fr_1fr]">
                <div className={`relative aspect-[16/9] min-h-64 overflow-hidden bg-muted lg:aspect-auto lg:min-h-80 ${index % 2 ? "lg:order-2" : ""}`}>
                  <iframe src={project.url} title={`${project.title} preview`} loading="lazy" tabIndex={-1} className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{project.type[lang]}</p>
                  <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">{tag}</span>)}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary hover:underline">
                    {t.viewProject} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="formacao" title={t.educationTitle}>
          <div className="grid items-start gap-5 sm:grid-cols-[auto_1fr] sm:gap-7">
            <IconBox><GraduationCap className="h-6 w-6" /></IconBox>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                <span className="text-primary">{t.educationSchool}</span>
                <span className="mx-2 text-foreground">•</span>
                {t.educationCourse}
              </h3>
              <p className="mt-3 font-bold text-primary">{t.educationPeriod}</p>
              <p className="mt-2 max-w-4xl leading-relaxed text-muted-foreground">{t.educationBody}</p>
            </div>
          </div>
        </Section>

        <Section id="experiencia" title={t.experienceTitle}>
          <div className="mb-8 overflow-hidden rounded-2xl border-2 border-primary bg-primary/5 p-6 md:p-10">
            <div className="grid items-start gap-8 md:grid-cols-[auto_1fr]">
              <img src={gamerbizImg} alt="Gamerbiz" className="h-24 w-24 rounded-xl object-cover shadow-lg md:h-32 md:w-32" />
              <div>
                <p className="text-sm font-bold text-primary">{t.experiencePeriod}</p>
                <h3 className="mt-1 text-2xl font-extrabold md:text-3xl">{t.experienceCompany}</h3>
                <p className="mt-1 text-base font-medium text-muted-foreground">{t.experienceRole}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.experienceBody}</p>
                <a href="https://www.instagram.com/gamerbizbr/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                  <Instagram className="h-4 w-4" /> {t.experienceCTA}
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="competencias" title={t.skillsTitle}>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.skillGroups.map((group) => {
              const Icon = group.icon;
              return <div key={group.title} className="rounded-2xl border border-border bg-card p-6 md:p-7"><div className="flex items-center gap-3"><IconBox><Icon className="h-5 w-5" /></IconBox><h3 className="text-lg font-bold">{group.title}</h3></div><ul className="mt-5 grid gap-3 text-sm text-muted-foreground">{group.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />{item}</li>)}</ul></div>;
            })}
          </div>
        </Section>

        <Section id="contato" title={t.contactTitle}>
          <div className="rounded-2xl border border-primary bg-primary/5 p-8 text-center md:p-12">
            <p className="mx-auto max-w-2xl text-muted-foreground">{t.contactBody}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="mailto:vinicius@gamerbiz.com.br" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                <Mail className="h-4 w-4" /> {t.contact}
              </a>
              <Link to={linksTarget} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                {t.linksButton} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mt-16 border-t border-border py-8 text-center text-sm text-muted-foreground">{t.footer}</footer>
    </div>
  );
}

function Section({ id, title, intro, eyebrow, children }: { id?: string; title: React.ReactNode; intro?: string; eyebrow?: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 border-t border-border py-20">{eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}<h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>{intro && <p className="mt-4 mb-10 max-w-2xl text-muted-foreground">{intro}</p>}{!intro && <div className="h-10" />}{children}</section>;
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">{children}</span>;
}

function JourneyCard({ icon, period, title, body }: { icon: React.ReactNode; period: string; title: string; body: string }) {
  return <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"><IconBox>{icon}</IconBox><p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">{period}</p><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p></article>;
}
