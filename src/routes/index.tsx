import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Instagram, MessageCircle, Moon, Sun, ExternalLink, Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

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

function Index() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

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
    { href: "#sobre", label: "Sobre" },
    { href: "#trajetoria", label: "Trajetória" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-bold tracking-tight">
            ikilled<span className="text-primary">vini</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Alternar tema"
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={() => setDark((d) => !d)} className="rounded-full border border-border p-2">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={() => setMenuOpen((o) => !o)} className="rounded-full border border-border p-2">
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col px-6 py-4">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-32">
        {/* HERO */}
        <section className="grid items-center gap-12 pb-24 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="fade-in-up mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-primary md:h-56 md:w-56">
            <img src={profileImg} alt="Vinicius de Alencar" className="h-full w-full object-cover" />
          </div>
          <div className="fade-in-up text-center md:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Olá, eu sou</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Vinicius de <span className="text-primary">Alencar</span>
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground md:text-xl">@ikilledvini</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Manager de Influenciadores · Gestor de Comunidades Digitais · Técnico em Desenvolvimento de Sistemas
            </p>
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
        <Section id="sobre" title={<>Sobre <span className="text-primary">Mim</span></>}>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tenho 16 anos e desde cedo descobri que adoro conectar pessoas e construir coisas que fazem
            diferença online. Comecei na gestão de comunidades digitais, passei pela robótica competitiva
            e hoje trabalho ajudando influenciadores e marcas a crescerem de forma autêntica. Sou curioso
            por natureza, aprendo rápido e gosto de estar sempre no meio de projetos novos e desafiadores.
          </p>
        </Section>

        {/* TRAJETÓRIA */}
        <Section id="trajetoria" title={<>Minha <span className="text-primary">Trajetória</span></>}>
          <div className="grid gap-6 md:grid-cols-3">
            <TrajectoryBlock
              year="2023"
              title="Robótica"
              body="Aos 14 anos, fui campeão regional de robótica pelo SENAI, o que me rendeu uma viagem gratuita para Brasília para representar minha região na etapa nacional. Foi minha primeira grande conquista fora de casa, e me mostrou que dedicação e trabalho em equipe levam longe."
            />
            <TrajectoryBlock
              year="2024"
              title="Comunidades Digitais"
              body="Em 2024, mergulhei de cabeça na gestão de comunidades digitais. Aprendi tanto a construir servidores do zero para influenciadores e empresas — com estrutura, identidade visual e organização — quanto a manter essas comunidades vivas com dinâmicas engajadas, eventos e estratégias que fazem os membros quererem ficar e crescer juntos."
            />
            <TrajectoryBlock
              year="2025"
              title="Manager de Influenciadores"
              body="Atuando como manager de influenciadores, conectei criadores de conteúdo a campanhas pagas com marcas como Block Blast, Fifine, Havit e Duolingo. Juntos, geramos mais de 7 milhões de visualizações para essas marcas, entregando resultados reais e mensuráveis."
            />
          </div>
        </Section>

        {/* EXPERIÊNCIA */}
        <Section id="experiencia" title={<>Experiência <span className="text-primary">Profissional</span></>}>
          <h3 className="mb-6 text-lg font-semibold">Robótica e Inovação 🤖</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm font-medium text-primary">Conclusão: Março/2024</p>
              <h4 className="mt-2 text-xl font-bold">Equipe de Robótica NEW XP</h4>
              <p className="mt-1 text-sm text-muted-foreground">Competidor — Design / Marketing</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Campeões regionais. Criação de identidade visual da equipe, materiais de apresentação e
                comunicação externa. A equipe avançou para a etapa nacional.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-primary">Conclusão: Março/2025</p>
              <h4 className="mt-2 text-xl font-bold">Equipe de Robótica Clusters #16053</h4>
              <p className="mt-1 text-sm text-muted-foreground">Competidor — Design / Outreach</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Desenvolvimento de materiais visuais, branding da equipe e comunicação com patrocinadores
                em ambiente competitivo.
              </p>
            </Card>
          </div>
        </Section>

        {/* FORMAÇÃO */}
        <Section id="formacao" title="Formação Acadêmica">
          <Card>
            <h4 className="text-xl font-bold">Técnico em Desenvolvimento de Sistemas — SENAI</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Formação técnica completa com foco em tecnologia e desenvolvimento de soluções digitais.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li>• <strong className="text-foreground">Banco de Dados:</strong> Modelagem, SQL, MySQL</li>
              <li>• <strong className="text-foreground">Linguagens:</strong> Python, C, lógica de programação avançada</li>
              <li>• <strong className="text-foreground">Desenvolvimento Web:</strong> HTML5, CSS3, JavaScript</li>
              <li>• <strong className="text-foreground">Ferramentas:</strong> Git, automação, APIs</li>
              <li>• <strong className="text-foreground">Análise e Projeto:</strong> UML, metodologias ágeis</li>
            </ul>
          </Card>
        </Section>

        {/* COMPETÊNCIAS */}
        <Section id="competencias" title="Competências Principais">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h4 className="text-lg font-bold text-primary">Social Media & Comunicação</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Gestão de redes sociais</li>
                <li>• Planejamento de conteúdo estratégico</li>
                <li>• Branding e identidade visual</li>
                <li>• Análise de métricas e KPIs</li>
                <li>• Copywriting e storytelling</li>
              </ul>
            </Card>
            <Card>
              <h4 className="text-lg font-bold text-primary">Gestão & Liderança</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Gestão de comunidades digitais</li>
                <li>• Manager de influenciadores</li>
                <li>• Coordenação de equipes</li>
                <li>• Estratégias de crescimento orgânico</li>
                <li>• Alta capacidade de aprendizado</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* PROJETOS DISCORD */}
        <Section id="projetos" title={<>Projetos no <span className="text-primary">Discord</span></>}>
          <p className="mb-10 max-w-2xl text-base text-muted-foreground">
            Comunidades que gerencio ativamente, oferecendo liderança estratégica e operacional.
          </p>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Soluções para Marcas</h3>
          <div className="mb-10">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-xl font-bold">Casa Brawl</h4>
                <span className="text-sm font-semibold text-primary">+5.000 membros</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Diretor de Comunicações</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Branding, comunicação estratégica, organização de eventos digitais, gestão de conteúdo e
                supervisão de equipe.
              </p>
              <a href="https://discord.gg/casabrawl" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Entrar na comunidade <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>
          </div>

          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Soluções para Influenciadores</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-xl font-bold">Clube do Joaopdzin</h4>
                <span className="text-sm font-semibold text-primary">+30.000 membros</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Diretor Executivo</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Gestão operacional, engajamento, monitoramento de métricas, sistemas de moderação avançada
                e monetização.
              </p>
              <p className="mt-5 text-xs italic text-muted-foreground">Comunidade desativada</p>
            </Card>
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-xl font-bold">Bueiro do Neston</h4>
                <span className="text-sm font-semibold text-primary">+3.800 membros</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Diretor Executivo</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Direção estrutural, moderação tática, cultura organizacional, coordenação de equipes e
                estratégias de crescimento.
              </p>
              <a href="https://discord.gg/bueirodoneston" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Entrar na comunidade <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-muted-foreground">
            🏅 Administração ativa de mais de 38.000 membros em ecossistemas digitais diversos
          </p>
        </Section>

        {/* CONTATO */}
        <Section id="contato" title={<>Vamos <span className="text-primary">Conversar?</span></>}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Estou sempre aberto para discutir novos projetos, oportunidades e parcerias. Entre em contato
            por qualquer canal abaixo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:ikilledvini@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://discord.com/users/ikilledvini" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
          <div className="mt-10 rounded-xl border-2 border-primary bg-primary/5 p-6 text-center">
            <p className="text-sm font-semibold md:text-base">
              Disponível para novos projetos — <span className="text-primary">Consultorias e colaborações digitais</span>
            </p>
          </div>
        </Section>
      </main>

      <footer className="mt-16 border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          © 2025 Vinicius de Alencar (ikilledvini). <span className="font-semibold text-foreground">Presença Digital é Poder.</span>
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
