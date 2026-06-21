import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Mail, Instagram, MessageCircle, Moon, Sun, Play, ChevronLeft, ChevronRight, Languages } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import bueiroImg from "@/assets/bueiro.jpg.asset.json";
import joaoImg from "@/assets/joao.jpg.asset.json";
import casaBrawlImg from "@/assets/casabrawl.png.asset.json";
import raydivaImg from "@/assets/raydiva.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinicius de Alencar — ikilledvini" },
      { name: "description", content: "Manager de Influenciadores, Gestor de Comunidades Digitais e Técnico em Desenvolvimento de Sistemas." },
      { property: "og:title", content: "Vinicius de Alencar — ikilledvini" },
      { property: "og:description", content: "Portfólio digital — comunidades, influenciadores e tecnologia." },
    ],
  }),
  component: Index,
});

type Lang = "pt" | "en";

const I18N = {
  pt: {
    nav: { sobre: "Sobre", trajetoria: "Trajetória", cases: "Cases", projetos: "Projetos", contato: "Contato" },
    themeAria: "Alternar tema",
    langAria: "Mudar idioma",
    hello: "Olá, eu sou",
    role: "Manager de Influenciadores · Gestor de Comunidades Digitais · Técnico em Desenvolvimento de Sistemas",
    aboutTitle: <>Sobre <span className="text-primary">Mim</span></>,
    aboutBody:
      "Olá! Meu nome é Vinicius, tenho 17 anos e desde sempre tive uma paixão em me apresentar e sentir que consegui conectar as pessoas. Comecei na robótica competitiva, passei pela gestão exclusiva de comunidades digitais e hoje trabalho ajudando influenciadores e marcas a crescerem de forma orgânica. Sou curioso por natureza, autodidata e sempre gosto de estar fazendo coisas que me instiguem a aprender mais.",
    trajectoryTitle: <>Minha <span className="text-primary">Trajetória</span></>,
    traj: {
      roboticsTitle: "Robótica",
      roboticsBody:
        "Aos 14 anos, fui campeão do Torneio Regional SESI de Robótica, o que me rendeu uma viagem gratuita para Brasília para representar minha região na etapa nacional. Foi minha primeira grande conquista fora de casa, e me mostrou que dedicação e trabalho em equipe levam longe.",
      communitiesTitle: "Comunidades Digitais",
      communitiesBody:
        "Em 2024, mergulhei de cabeça na gestão de comunidades digitais. Aprendi tanto a construir servidores do zero para influenciadores e empresas, com estrutura, identidade visual e organização, quanto a manter essas comunidades vivas com dinâmicas engajadas, eventos e estratégias que fazem os membros quererem ficar e crescer juntos.",
      managerTitle: "Manager de Influenciadores",
      managerBody: "Conectei criadores de conteúdo a campanhas pagas com grandes marcas, entregando resultados reais e mensuráveis.",
    },
    brandsLabel: "Marcas que confiaram no trabalho",
    viewsLabel: "visualizações geradas",
    partnershipsLabel: "em parcerias movimentadas",
    casesEyebrow: "| CASES DE SUCESSO",
    casesTitle: <>PARCERIAS <span className="text-primary">REALIZADAS</span></>,
    prev: "Anterior",
    next: "Próximo",
    prevVideo: "Vídeo anterior",
    nextVideo: "Próximo vídeo",
    watchYoutube: "Assistir no YouTube →",
    playPrefix: "Reproduzir",
    experienceTitle: <>Experiência <span className="text-primary">Profissional</span></>,
    roboticsSubtitle: "Robótica e Inovação",
    exp1Conclusion: "Conclusão: Março/2024",
    exp1Title: "Equipe de Robótica NEW XP",
    exp1Role: "Competidor · Design / Marketing",
    exp1Body: "Campeões regionais. Criação de identidade visual da equipe, materiais de apresentação e comunicação externa. A equipe avançou para a etapa nacional.",
    exp2Conclusion: "Conclusão: Março/2025",
    exp2Title: "Equipe de Robótica Clusters #16053",
    exp2Role: "Competidor · Design / Outreach",
    exp2Body: "Desenvolvimento de materiais visuais, branding da equipe e comunicação com patrocinadores em ambiente competitivo.",
    educationTitle: "Formação Acadêmica",
    eduCourse: "Técnico em Desenvolvimento de Sistemas, SENAI",
    eduBody: "Formação técnica completa com foco em tecnologia e desenvolvimento de soluções digitais.",
    eduItems: [
      <><strong className="text-foreground">Banco de Dados:</strong> Modelagem, SQL, MySQL</>,
      <><strong className="text-foreground">Linguagens:</strong> Python, C, lógica de programação avançada</>,
      <><strong className="text-foreground">Desenvolvimento Web:</strong> HTML5, CSS3, JavaScript</>,
      <><strong className="text-foreground">Ferramentas:</strong> Git, automação, APIs</>,
      <><strong className="text-foreground">Análise e Projeto:</strong> UML, metodologias ágeis</>,
    ],
    skillsTitle: "Competências Principais",
    skillsSocialTitle: "Social Media & Comunicação",
    skillsSocial: [
      "Gestão de redes sociais",
      "Planejamento de conteúdo estratégico",
      "Branding e identidade visual",
      "Análise de métricas e KPIs",
      "Copywriting e storytelling",
    ],
    skillsMgmtTitle: "Gestão & Liderança",
    skillsMgmt: [
      "Gestão de comunidades digitais",
      "Manager de influenciadores",
      "Coordenação de equipes",
      "Estratégias de crescimento orgânico",
      "Alta capacidade de aprendizado",
    ],
    discordTitle: <>Projetos no <span className="text-primary">Discord</span></>,
    discordIntro: "Comunidades que gerencio ativamente, oferecendo liderança estratégica e operacional.",
    brandsSection: "Soluções para Marcas",
    influencersSection: "Soluções para Influenciadores",
    membersWord: (n: string) => `${n} membros`,
    peopleWord: (n: string) => `${n} pessoas`,
    casaBrawl: {
      role: "Diretor de Comunicações",
      body: "Branding, comunicação estratégica, organização de eventos digitais, gestão de conteúdo e supervisão de equipe.",
    },
    joao: {
      role: "Diretor Executivo",
      body: "Gestão operacional, engajamento, monitoramento de métricas, sistemas de moderação avançada e monetização.",
    },
    bueiro: {
      role: "Diretor Executivo",
      body: "Direção estrutural, moderação tática, cultura organizacional, coordenação de equipes e estratégias de crescimento.",
    },
    inactive: "Comunidade desativada",
    others: {
      title: "Entre outros projetos",
      body: "Tropa do Nice, Hub do Ninja, entre outras comunidades em que atuei com gestão, moderação e crescimento.",
    },
    discordTotal: "Administração ativa de mais de 50.000 membros em ecossistemas digitais diversos",
    contactTitle: <>Vamos <span className="text-primary">Conversar?</span></>,
    contactBody: "Estou sempre aberto para discutir novos projetos, oportunidades e parcerias. Entre em contato por qualquer canal abaixo.",
    contactCard: <>Disponível para novos projetos: <span className="text-primary">Consultorias e colaborações digitais</span></>,
    footer: "© 2026 ikilledvini (Vinicius de Alencar).",
    influencersTab: "Influenciadores",
    influencersCaseTitle: <>3 INFLUENCERS, +10 <span className="text-primary">MILHÕES</span> DE VISUALIZAÇÕES</>,
    influencersCaseDesc: "Campanha com 3 influencers e integração da marca, somando mais de 10 milhões de visualizações e excelente performance de retenção.",
    influencersCaseMetrics: [
      { value: "3", label: "INFLUENCERS", colored: false },
      { value: "+10M", label: "VISUALIZAÇÕES", colored: false },
      { value: "Alta", label: "RETENÇÃO", colored: true },
    ],
    duolingoTitleNodes: (green: string) => <>YOUTUBE <span style={{ color: green }}>SHORT</span> COM A CORUJA</>,
    duolingoDesc: "Integração nativa em formato Short, gerando engajamento orgânico com a audiência gamer e reforçando o tom divertido da marca.",
    duolingoMetrics: [
      { value: "1", label: "SHORT", colored: false },
      { value: "Nativo", label: "FORMATO", colored: true },
      { value: "Orgânico", label: "ENGAJAMENTO", colored: true },
    ],
  },
  en: {
    nav: { sobre: "About", trajetoria: "Journey", cases: "Cases", projetos: "Projects", contato: "Contact" },
    themeAria: "Toggle theme",
    langAria: "Change language",
    hello: "Hi, I'm",
    role: "Influencer Manager · Digital Community Manager · Systems Development Technician",
    aboutTitle: <>About <span className="text-primary">Me</span></>,
    aboutBody:
      "Hi! My name is Vinicius, I'm 17 and I've always been passionate about presenting and connecting people. I started in competitive robotics, moved into managing digital communities, and today I help influencers and brands grow organically. I'm naturally curious, self-taught, and I always enjoy working on things that push me to learn more.",
    trajectoryTitle: <>My <span className="text-primary">Journey</span></>,
    traj: {
      roboticsTitle: "Robotics",
      roboticsBody:
        "At 14, I won the SESI Regional Robotics Tournament, which earned me a free trip to Brasília to represent my region in the national stage. It was my first major achievement away from home, and it taught me that dedication and teamwork take you far.",
      communitiesTitle: "Digital Communities",
      communitiesBody:
        "In 2024, I dove headfirst into managing digital communities. I learned how to build servers from scratch for influencers and companies — with structure, visual identity and organization — and also how to keep those communities alive through engaging dynamics, events and strategies that make members want to stay and grow together.",
      managerTitle: "Influencer Manager",
      managerBody: "I connected content creators to paid campaigns with major brands, delivering real and measurable results.",
    },
    brandsLabel: "Brands that trusted my work",
    viewsLabel: "views generated",
    partnershipsLabel: "in partnerships moved",
    casesEyebrow: "| SUCCESS CASES",
    casesTitle: <>PARTNERSHIPS <span className="text-primary">DELIVERED</span></>,
    prev: "Previous",
    next: "Next",
    prevVideo: "Previous video",
    nextVideo: "Next video",
    watchYoutube: "Watch on YouTube →",
    playPrefix: "Play",
    experienceTitle: <>Professional <span className="text-primary">Experience</span></>,
    roboticsSubtitle: "Robotics & Innovation",
    exp1Conclusion: "Completed: March 2024",
    exp1Title: "NEW XP Robotics Team",
    exp1Role: "Competitor · Design / Marketing",
    exp1Body: "Regional champions. Built the team's visual identity, presentation materials and external communications. The team advanced to the national stage.",
    exp2Conclusion: "Completed: March 2025",
    exp2Title: "Clusters Robotics Team #16053",
    exp2Role: "Competitor · Design / Outreach",
    exp2Body: "Developed visual materials, team branding and sponsor communications in a competitive environment.",
    educationTitle: "Education",
    eduCourse: "Systems Development Technician, SENAI",
    eduBody: "Complete technical education focused on technology and digital solution development.",
    eduItems: [
      <><strong className="text-foreground">Databases:</strong> Modeling, SQL, MySQL</>,
      <><strong className="text-foreground">Languages:</strong> Python, C, advanced programming logic</>,
      <><strong className="text-foreground">Web Development:</strong> HTML5, CSS3, JavaScript</>,
      <><strong className="text-foreground">Tools:</strong> Git, automation, APIs</>,
      <><strong className="text-foreground">Analysis & Design:</strong> UML, agile methodologies</>,
    ],
    skillsTitle: "Core Competencies",
    skillsSocialTitle: "Social Media & Communication",
    skillsSocial: [
      "Social media management",
      "Strategic content planning",
      "Branding and visual identity",
      "Metrics & KPI analysis",
      "Copywriting and storytelling",
    ],
    skillsMgmtTitle: "Management & Leadership",
    skillsMgmt: [
      "Digital community management",
      "Influencer management",
      "Team coordination",
      "Organic growth strategies",
      "Fast learning capacity",
    ],
    discordTitle: <>Projects on <span className="text-primary">Discord</span></>,
    discordIntro: "Communities I actively manage, providing strategic and operational leadership.",
    brandsSection: "Brand Solutions",
    influencersSection: "Influencer Solutions",
    membersWord: (n: string) => `${n} members`,
    peopleWord: (n: string) => `${n} people`,
    casaBrawl: {
      role: "Director of Communications",
      body: "Branding, strategic communication, digital events, content management and team supervision.",
    },
    joao: {
      role: "Executive Director",
      body: "Operational management, engagement, metrics monitoring, advanced moderation systems and monetization.",
    },
    bueiro: {
      role: "Executive Director",
      body: "Structural direction, tactical moderation, organizational culture, team coordination and growth strategies.",
    },
    inactive: "Community deactivated",
    others: {
      title: "Other projects",
      body: "Tropa do Nice, Hub do Ninja and other communities where I worked on management, moderation and growth.",
    },
    discordTotal: "Active management of more than 50,000 members across diverse digital ecosystems",
    contactTitle: <>Let's <span className="text-primary">Talk?</span></>,
    contactBody: "I'm always open to discuss new projects, opportunities and partnerships. Reach out through any channel below.",
    contactCard: <>Available for new projects: <span className="text-primary">Consulting and digital collaborations</span></>,
    footer: "© 2026 ikilledvini (Vinicius de Alencar).",
    influencersTab: "Influencers",
    influencersCaseTitle: <>3 INFLUENCERS, +10 <span className="text-primary">MILLION</span> VIEWS</>,
    influencersCaseDesc: "Campaign with 3 influencers and brand integration, reaching more than 10 million views with excellent retention.",
    influencersCaseMetrics: [
      { value: "3", label: "INFLUENCERS", colored: false },
      { value: "+10M", label: "VIEWS", colored: false },
      { value: "High", label: "RETENTION", colored: true },
    ],
    duolingoTitleNodes: (green: string) => <>YOUTUBE <span style={{ color: green }}>SHORT</span> WITH THE OWL</>,
    duolingoDesc: "Native integration in Short format, generating organic engagement with the gamer audience and reinforcing the brand's fun tone.",
    duolingoMetrics: [
      { value: "1", label: "SHORT", colored: false },
      { value: "Native", label: "FORMAT", colored: true },
      { value: "Organic", label: "ENGAGEMENT", colored: true },
    ],
  },
} as const;

function Index() {
  const [dark, setDark] = useState<boolean>(false);
  const [themeUserSet, setThemeUserSet] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>("pt");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") {
      setDark(stored === "dark");
      setThemeUserSet(true);
    } else if (typeof window !== "undefined" && window.matchMedia) {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    const storedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (storedLang === "pt" || storedLang === "en") setLang(storedLang);
  }, []);

  // Follow system changes while user hasn't manually overridden
  useEffect(() => {
    if (themeUserSet || typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [themeUserSet]);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    setDark((d) => {
      const next = !d;
      try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
      return next;
    });
    setThemeUserSet(true);
  };

  const toggleLang = () => {
    setLang((l) => {
      const next: Lang = l === "pt" ? "en" : "pt";
      try { localStorage.setItem("lang", next); } catch {}
      return next;
    });
  };

  const t = I18N[lang];

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const navItems = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#trajetoria", label: t.nav.trajetoria },
    { href: "#cases", label: t.nav.cases },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#contato", label: t.nav.contato },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-bold tracking-tight">
            ikilled<span className="text-primary">vini</span>
          </a>
          <div className="flex items-center gap-3 md:gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
                {n.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              aria-label={t.langAria}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-muted"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={t.themeAria}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-32">
        {/* HERO */}
        <section className="grid items-center gap-12 pb-24 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="fade-in-up mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-primary md:h-56 md:w-56">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>
          <div className="fade-in-up text-center md:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">{t.hello}</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Vinicius de <span className="text-primary">Alencar</span>
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground md:text-xl">@ikilledvini</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.role}</p>
            <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
              <a href="https://instagram.com/ikilledvini" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:ikilledvini@gmail.com" aria-label="Email" className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://discord.com/users/ikilledvini" target="_blank" rel="noreferrer" aria-label="Discord" className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <Section id="sobre" title={t.aboutTitle}>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{t.aboutBody}</p>
        </Section>

        {/* TRAJETÓRIA */}
        <Section id="trajetoria" title={t.trajectoryTitle}>
          <div className="grid gap-6 md:grid-cols-3">
            <TrajectoryBlock
              year="2023"
              title={t.traj.roboticsTitle}
              body={t.traj.roboticsBody}
            />
            <TrajectoryBlock
              year="2024"
              title={t.traj.communitiesTitle}
              body={t.traj.communitiesBody}
            />
            <div className="rounded-xl border-2 border-primary bg-primary/5 p-6 md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">2025</p>
              <h3 className="mt-2 text-lg font-bold">{t.traj.managerTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.traj.managerBody}</p>
            </div>
          </div>

          {/* DESTAQUE MANAGER */}
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-primary bg-primary/5 p-8 md:p-12">
            <div className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{t.brandsLabel}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["Block Blast", "Duolingo"].map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border-2 border-primary bg-background px-5 py-2 text-sm font-bold text-primary"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center md:text-right">
                <div>
                  <p className="text-4xl font-extrabold leading-none tracking-tight text-primary md:text-6xl">+11M</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.viewsLabel}</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold leading-none tracking-tight text-primary md:text-6xl">+R$20K</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.partnershipsLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CASES DE SUCESSO */}
        <CasesSection t={t} />

        {/* EXPERIÊNCIA */}
        <Section id="experiencia" title={t.experienceTitle}>
          <h3 className="mb-6 text-lg font-semibold">{t.roboticsSubtitle}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm font-medium text-primary">{t.exp1Conclusion}</p>
              <h4 className="mt-2 text-xl font-bold">{t.exp1Title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.exp1Role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.exp1Body}</p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-primary">{t.exp2Conclusion}</p>
              <h4 className="mt-2 text-xl font-bold">{t.exp2Title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.exp2Role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.exp2Body}</p>
            </Card>
          </div>
        </Section>

        {/* FORMAÇÃO */}
        <Section id="formacao" title={t.educationTitle}>
          <Card>
            <h4 className="text-xl font-bold">{t.eduCourse}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.eduBody}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              {t.eduItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* COMPETÊNCIAS */}
        <Section id="competencias" title={t.skillsTitle}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h4 className="text-lg font-bold text-primary">{t.skillsSocialTitle}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.skillsSocial.map((s) => (<li key={s}>• {s}</li>))}
              </ul>
            </Card>
            <Card>
              <h4 className="text-lg font-bold text-primary">{t.skillsMgmtTitle}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.skillsMgmt.map((s) => (<li key={s}>• {s}</li>))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* PROJETOS DISCORD */}
        <Section id="projetos" title={t.discordTitle}>
          <p className="mb-10 max-w-2xl text-base text-muted-foreground">{t.discordIntro}</p>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.brandsSection}</h3>
          <div className="mb-10">
            <Card>
              <div className="flex items-start gap-4">
                <img src={casaBrawlImg.url} alt="Casa Brawl" className="h-14 w-14 flex-shrink-0 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-xl font-bold">Casa Brawl</h4>
                    <span className="text-sm font-semibold text-primary">{t.membersWord("+5,000")}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.casaBrawl.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.casaBrawl.body}</p>
              <p className="mt-5 text-xs italic text-muted-foreground">{t.inactive}</p>
            </Card>
          </div>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.influencersSection}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="flex items-start gap-4">
                <img src={joaoImg.url} alt="Clube do Joaopdzin" className="h-14 w-14 flex-shrink-0 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-xl font-bold">Clube do Joaopdzin</h4>
                    <span className="text-sm font-semibold text-primary">{t.membersWord("+30,000")}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.joao.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.joao.body}</p>
              <p className="mt-5 text-xs italic text-muted-foreground">{t.inactive}</p>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <img src={bueiroImg.url} alt="Bueiro do Neston" className="h-14 w-14 flex-shrink-0 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-xl font-bold">Bueiro do Neston</h4>
                    <span className="text-sm font-semibold text-primary">{t.membersWord("+3,800")}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.bueiro.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bueiro.body}</p>
              <p className="mt-5 text-xs italic text-muted-foreground">{t.inactive}</p>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-bold">{t.others.title}</h4>
                <span className="text-sm font-semibold text-primary">{t.peopleWord("+12,000")}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.others.body}</p>
            </Card>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-muted-foreground">{t.discordTotal}</p>
        </Section>

        {/* CONTATO */}
        <Section id="contato" title={t.contactTitle}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t.contactBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:ikilledvini@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://discord.com/users/ikilledvini" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
          <div className="mt-10 rounded-xl border-2 border-primary bg-primary/5 p-6 text-center">
            <p className="text-sm font-semibold md:text-base">{t.contactCard}</p>
          </div>
        </Section>
      </main>

      <footer className="mt-16 border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="fade-in-up scroll-mt-24 border-t border-border py-20">
      <h2 className="mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
      {children}
    </div>
  );
}

function TrajectoryBlock({ year, title, body }: { year: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{year}</p>
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

const DUOLINGO_GREEN = "#65CC00";

function CasesSection({ t }: { t: typeof I18N[Lang] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slides = Array.from(scroller.querySelectorAll<HTMLElement>("[data-case-slide]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            const idx = Number((e.target as HTMLElement).dataset.index ?? 0);
            setActive(idx);
          }
        });
      },
      { root: scroller, threshold: [0.6] },
    );
    slides.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const goTo = (idx: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slide = scroller.querySelector<HTMLElement>(`[data-case-slide][data-index="${idx}"]`);
    if (slide) {
      scroller.scrollTo({ left: slide.offsetLeft - scroller.offsetLeft, behavior: "smooth" });
      setActive(idx);
    }
  };

  return (
    <section id="cases" className="fade-in-up scroll-mt-24 border-t border-border py-20">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {t.casesEyebrow}
      </p>
      <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
        {t.casesTitle}
      </h2>

      <div className="mb-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(0)}
          className="cursor-pointer rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
          style={{
            background: active === 0 ? "var(--primary)" : "transparent",
            color: active === 0 ? "var(--primary-foreground)" : "var(--muted-foreground)",
            border: active === 0 ? "2px solid var(--primary)" : "2px solid var(--border)",
          }}
        >
          Block Blast
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          className="cursor-pointer rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all"
          style={{
            background: active === 1 ? DUOLINGO_GREEN : "transparent",
            color: active === 1 ? "#fff" : "var(--muted-foreground)",
            border: active === 1 ? `2px solid ${DUOLINGO_GREEN}` : "2px solid var(--border)",
          }}
        >
          Duolingo
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label={t.prev}
          onClick={() => goTo(0)}
          disabled={active === 0}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/70 p-2 text-background backdrop-blur transition-opacity hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-30 md:left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={t.next}
          onClick={() => goTo(1)}
          disabled={active === 1}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/70 p-2 text-background backdrop-blur transition-opacity hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-30 md:right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
        <CaseSlide
          index={0}
          accent="var(--primary)"
          accentText="text-primary"
          badge="BLOCK BLAST"
          t={t}
          videos={[
            {
              url: "https://www.youtube.com/watch?v=rjyJ3vNgt2Y",
              title: "EU AMO JOGAR #blockblast",
              author: "João Pdzin",
              avatar: joaoImg.url,
            },
            {
              url: "https://www.youtube.com/watch?v=hcNnRHRuYKk",
              title: "JOGUEI #blockblast NO EVENTO",
              author: "Ray Diva",
              avatar: raydivaImg.url,
            },
          ]}
          titleNodes={t.blockBlastTitle}
          description={t.blockBlastDesc}
          metrics={[...t.blockBlastMetrics]}
        />
        <CaseSlide
          index={1}
          accent={DUOLINGO_GREEN}
          accentText=""
          badge="DUOLINGO"
          t={t}
          videos={[
            {
              url: "https://www.youtube.com/shorts/N8pCV7LtNtw",
              title: "O @duolingobroficial REC...",
              author: "João Pdzin",
              avatar: joaoImg.url,
            },
          ]}
          titleNodes={t.duolingoTitleNodes(DUOLINGO_GREEN)}
          description={t.duolingoDesc}
          metrics={[...t.duolingoMetrics]}
        />
        </div>
      </div>
    </section>
  );
}

function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|watch\?v=|v\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function CaseSlide({
  index,
  accent,
  badge,
  videos,
  titleNodes,
  description,
  metrics,
  t,
}: {
  index: number;
  accent: string;
  accentText: string;
  badge: string;
  videos: { url: string; title: string; author: string; avatar?: string }[];
  titleNodes: React.ReactNode;
  description: string;
  metrics: { value: string; label: string; colored: boolean }[];
  t: typeof I18N[Lang];
}) {
  const [playing, setPlaying] = useState(false);
  const [videoIdx, setVideoIdx] = useState(0);
  const current = videos[videoIdx];
  const currentUrl = current.url;
  const videoId = extractYouTubeId(currentUrl);
  const hasMultiple = videos.length > 1;
  const changeVideo = (dir: 1 | -1) => {
    setPlaying(false);
    setVideoIdx((i) => (i + dir + videos.length) % videos.length);
  };
  return (
    <div
      data-case-slide
      data-index={index}
      className="w-full flex-shrink-0 snap-start px-2"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        {/* Mockup */}
        <div className="mx-auto block w-full max-w-[280px]">
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-foreground/80 bg-black shadow-2xl">
            {hasMultiple && (
              <>
                <button
                  type="button"
                  aria-label={t.prevVideo}
                  onClick={() => changeVideo(-1)}
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white backdrop-blur transition-opacity hover:bg-black"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={t.nextVideo}
                  onClick={() => changeVideo(1)}
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white backdrop-blur transition-opacity hover:bg-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <span className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {videoIdx + 1} / {videos.length}
                </span>
              </>
            )}
            <div className="flex items-center gap-2 bg-black px-3 pt-3 pb-2 text-white">
              {current.avatar ? (
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                />
              ) : (
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: accent }}
                  aria-hidden
                >
                  {current.author.charAt(0)}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-bold leading-tight">{current.title}</p>
                <p className="truncate text-[10px] leading-tight text-white/70">{current.author}</p>
              </div>
            </div>
            <div className="relative aspect-[9/16] w-full bg-neutral-900">
              {playing && videoId ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
                  title={current.title}
                  allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`${t.playPrefix} ${current.title}`}
                  className="group absolute inset-0 block w-full transition-transform hover:scale-[1.02]"
                >
                  {videoId && (
                    <img
                      src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                      alt={current.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-24 items-center justify-center rounded-2xl bg-red-600 shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8 fill-white text-white" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span
            className="inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{ borderColor: accent, color: accent, background: "transparent" }}
          >
            {badge}
          </span>
          <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
            {titleNodes}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-muted/40 p-4 text-center">
                <p
                  className="text-2xl font-extrabold tracking-tight md:text-3xl"
                  style={m.colored ? { color: accent } : undefined}
                >
                  {m.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={currentUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-semibold underline-offset-4 hover:underline"
            style={{ color: accent }}
          >
            {t.watchYoutube}
          </a>
        </div>
      </div>
    </div>
  );
}
