import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Network,
  PackageCheck,
  Quote,
  Search,
  Ship,
  ShoppingBag,
  Star,
  Truck,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import logisticsImage from "@/assets/nexus-logistics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Global Supply Solutions | Global Logistics" },
      { name: "description", content: "End-to-end sourcing, distribution and logistics solutions connecting modern businesses to global supply." },
      { property: "og:title", content: "Nexus Global Supply Solutions" },
      { property: "og:description", content: "Your bridge to the world's supply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "en" | "es";

const copy = {
  en: {
    nav: ["About", "Services", "Process", "Why Nexus", "Contact"],
    heroLabel: "GLOBAL SUPPLY, SIMPLIFIED",
    heroTitle: "Your Bridge to the World's Supply",
    heroSubtitle: "End-to-end supply chain solutions for the modern digital marketplace.",
    quote: "Get a Quote",
    learn: "Learn More",
    aboutLabel: "WHO WE ARE",
    aboutTitle: "Global reach. Personal accountability.",
    aboutBody: "Nexus connects ambitious businesses to a dependable global supply network. We manage every critical handoff—from identifying the right source to delivering the final shipment—with clarity, precision, and care.",
    aboutLink: "Discover our approach",
    servicesLabel: "WHAT WE DO",
    servicesTitle: "Built for every link in your supply chain",
    servicesIntro: "One accountable partner across sourcing, commerce, operations, and delivery.",
    serviceItems: [
      ["International Sourcing", "Find and validate trusted suppliers with transparent pricing and rigorous quality standards."],
      ["E-Commerce Distribution", "Move inventory seamlessly across digital marketplaces and fulfillment networks."],
      ["Supply Chain Management", "Gain end-to-end visibility, coordinated operations, and resilient planning."],
      ["Import & Logistics", "Navigate freight, customs, documentation, and final-mile delivery with confidence."],
    ],
    processLabel: "A CLEARER WAY FORWARD",
    processTitle: "How it works",
    steps: [
      ["Source", "We identify, vet, and secure the right products and suppliers."],
      ["Ship", "We coordinate freight, customs, and documentation worldwide."],
      ["Deliver", "Your goods arrive where they need to be, on time and visible."],
    ],
    whyLabel: "WHY NEXUS",
    whyTitle: "Measured by the outcomes that matter",
    whyBody: "Global supply chains are complex. Your experience shouldn't be. Our network, operating discipline, and responsive team turn moving parts into dependable progress.",
    metrics: [["Products sourced", 500, "+"], ["Countries served", 20, "+"], ["On-time delivery", 99, "%"]],
    trustLabel: "CLIENT PERSPECTIVES",
    trustTitle: "Trusted to keep business moving",
    testimonials: [
      ["Nexus gave us visibility we never had before. Their team made a complex international launch feel controlled from day one.", "Elena Márquez", "COO, Northline Commerce"],
      ["We found the right manufacturing partner and cut weeks from our sourcing cycle without compromising quality.", "Daniel Foster", "Founder, Altura Goods"],
      ["Responsive, precise, and accountable. Nexus has become an extension of our operations team.", "Sofia Chen", "VP Operations, Everfield"],
    ],
    partners: "ECOSYSTEM EXPERIENCE",
    contactLabel: "START A CONVERSATION",
    contactTitle: "Let's move your business forward.",
    contactBody: "Tell us what you need to source, ship, or simplify. Our team will respond within one business day.",
    fields: ["Name", "Company", "Email", "How can we help?"],
    placeholders: ["Your full name", "Company name", "you@company.com", "Tell us about your supply needs"],
    send: "Send Request",
    sent: "Request sent — we'll be in touch shortly.",
    location: "Miami, Florida · Serving globally",
    hours: "Monday–Friday · 9:00–18:00 ET",
    slogan: "Your bridge to global supply.",
    columns: [["Company", "About", "Why Nexus"], ["Services", "Sourcing", "Distribution", "Logistics"], ["Legal", "Privacy", "Terms"]],
    rights: "All rights reserved.",
  },
  es: {
    nav: ["Nosotros", "Servicios", "Proceso", "Por qué Nexus", "Contacto"],
    heroLabel: "SUMINISTRO GLOBAL, SIMPLIFICADO",
    heroTitle: "Tu Puente hacia el Abastecimiento Mundial",
    heroSubtitle: "Soluciones integrales de cadena de suministro para el comercio digital moderno.",
    quote: "Solicitar Cotización",
    learn: "Saber Más",
    aboutLabel: "QUIÉNES SOMOS",
    aboutTitle: "Alcance global. Compromiso personal.",
    aboutBody: "Nexus conecta empresas ambiciosas con una red global de suministro confiable. Gestionamos cada punto crítico—desde identificar la fuente correcta hasta entregar el envío final—con claridad, precisión y cuidado.",
    aboutLink: "Conoce nuestro enfoque",
    servicesLabel: "QUÉ HACEMOS",
    servicesTitle: "Presentes en cada eslabón de tu cadena",
    servicesIntro: "Un solo aliado responsable para abastecimiento, comercio, operaciones y entrega.",
    serviceItems: [
      ["Abastecimiento Internacional", "Encontramos y validamos proveedores confiables con precios transparentes y estándares rigurosos."],
      ["Distribución E-Commerce", "Movemos inventario sin fricción entre marketplaces y redes de cumplimiento."],
      ["Gestión de Cadena de Suministro", "Obtén visibilidad integral, operaciones coordinadas y planificación resiliente."],
      ["Importación y Logística", "Gestiona carga, aduanas, documentación y última milla con confianza."],
    ],
    processLabel: "UN CAMINO MÁS CLARO",
    processTitle: "Cómo funciona",
    steps: [
      ["Abastecemos", "Identificamos, validamos y aseguramos los productos y proveedores correctos."],
      ["Enviamos", "Coordinamos carga, aduanas y documentación en todo el mundo."],
      ["Entregamos", "Tu mercancía llega a destino, a tiempo y siempre visible."],
    ],
    whyLabel: "POR QUÉ NEXUS",
    whyTitle: "Medidos por los resultados que importan",
    whyBody: "Las cadenas globales son complejas. Tu experiencia no debería serlo. Nuestra red, disciplina operativa y equipo ágil convierten cada parte en progreso confiable.",
    metrics: [["Productos abastecidos", 500, "+"], ["Países atendidos", 20, "+"], ["Entregas a tiempo", 99, "%"]],
    trustLabel: "PERSPECTIVAS DE CLIENTES",
    trustTitle: "La confianza que mantiene tu negocio en marcha",
    testimonials: [
      ["Nexus nos dio una visibilidad que nunca habíamos tenido. Su equipo hizo que un lanzamiento internacional complejo se sintiera controlado desde el primer día.", "Elena Márquez", "COO, Northline Commerce"],
      ["Encontramos el socio de manufactura ideal y redujimos semanas del ciclo de abastecimiento sin comprometer la calidad.", "Daniel Foster", "Fundador, Altura Goods"],
      ["Ágiles, precisos y responsables. Nexus se ha convertido en una extensión de nuestro equipo de operaciones.", "Sofia Chen", "VP Operaciones, Everfield"],
    ],
    partners: "EXPERIENCIA EN EL ECOSISTEMA",
    contactLabel: "INICIEMOS UNA CONVERSACIÓN",
    contactTitle: "Movamos tu negocio hacia adelante.",
    contactBody: "Cuéntanos qué necesitas abastecer, enviar o simplificar. Nuestro equipo responderá en un día hábil.",
    fields: ["Nombre", "Empresa", "Email", "¿Cómo podemos ayudarte?"],
    placeholders: ["Tu nombre completo", "Nombre de la empresa", "tu@empresa.com", "Cuéntanos sobre tus necesidades"],
    send: "Enviar Solicitud",
    sent: "Solicitud enviada — pronto estaremos en contacto.",
    location: "Miami, Florida · Servicio global",
    hours: "Lunes–viernes · 9:00–18:00 ET",
    slogan: "Tu puente al suministro global.",
    columns: [["Compañía", "Nosotros", "Por qué Nexus"], ["Servicios", "Abastecimiento", "Distribución", "Logística"], ["Legal", "Privacidad", "Términos"]],
    rights: "Todos los derechos reservados.",
  },
} as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" aria-label="Nexus Global Supply Solutions" className="group flex items-center gap-3">
      <span className="logo-mark" aria-hidden="true"><span /></span>
      {!compact && <span className="leading-none"><strong className="block font-display text-xl tracking-normal">NEXUS</strong><span className="mt-1 block text-[9px] font-light uppercase tracking-[0.22em] opacity-75">Global Supply Solutions</span></span>}
    </a>
  );
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let animation = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from({ length: 48 }, (_, index) => ({ x: ((index * 83) % 997) / 997, y: ((index * 47) % 521) / 521, vx: ((index % 5) - 2) * 0.000025, vy: ((index % 7) - 3) * 0.000018 }));
    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
        canvas.width = width * ratio; canvas.height = height * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }
      context.clearRect(0, 0, width, height);
      nodes.forEach((node) => { if (!reduced) { node.x = (node.x + node.vx + 1) % 1; node.y = (node.y + node.vy + 1) % 1; } });
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach((b) => {
        const dx = (a.x - b.x) * width; const dy = (a.y - b.y) * height; const d = Math.hypot(dx, dy);
        if (d < 145) { context.strokeStyle = `rgba(118, 168, 216, ${0.14 * (1 - d / 145)})`; context.lineWidth = 1; context.beginPath(); context.moveTo(a.x * width, a.y * height); context.lineTo(b.x * width, b.y * height); context.stroke(); }
      }));
      nodes.forEach((node, index) => { context.fillStyle = index % 11 === 0 ? "rgba(244,130,31,.8)" : "rgba(180,211,239,.5)"; context.beginPath(); context.arc(node.x * width, node.y * height, index % 11 === 0 ? 2.5 : 1.4, 0, Math.PI * 2); context.fill(); });
      frame += 1; if (!reduced || frame < 2) animation = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animation);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(el); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Metric({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => { const progress = Math.min((now - start) / 1200, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [active, value]);
  return <div className="metric"><div className="font-display text-5xl font-extrabold text-accent md:text-6xl">{display}{suffix}</div><div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/65">{label}</div></div>;
}

function Index() {
  const [language, setLanguage] = useState<Language>("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [sent, setSent] = useState(false);
  const [metricsActive, setMetricsActive] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const t = copy[language];

  useEffect(() => {
    const stored = window.localStorage.getItem("nexus-language") as Language | null;
    setLanguage(stored === "en" || stored === "es" ? stored : navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const el = metricsRef.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setMetricsActive(true); observer.disconnect(); } }, { threshold: 0.25 });
    observer.observe(el); return () => observer.disconnect();
  }, []);
  useEffect(() => { const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % t.testimonials.length), 6500); return () => window.clearInterval(timer); }, [t.testimonials.length]);

  const setLang = (next: Language) => { setLanguage(next); window.localStorage.setItem("nexus-language", next); };
  const navTargets = ["about", "services", "process", "why", "contact"];
  const serviceIcons = [Search, ShoppingBag, Network, Ship];
  const stepIcons = [Search, Ship, PackageCheck];
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {t.nav.map((item, i) => <a key={navTargets[i]} href={`#${navTargets[i]}`} className="nav-link">{item}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <div className="language-switch" aria-label="Language selector"><button className={language === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button><span>/</span><button className={language === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button></div>
            <button className="icon-button lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-menu lg:hidden">{t.nav.map((item, i) => <a key={navTargets[i]} href={`#${navTargets[i]}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <section className="hero-section relative flex min-h-[100svh] items-center bg-primary text-primary-foreground">
        <NetworkCanvas />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8">
          <div className="max-w-4xl animate-hero-in">
            <div className="eyebrow text-accent">{t.heroLabel}</div>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,6.6rem)] font-extrabold leading-[0.96] tracking-normal">{t.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/72 md:text-xl">{t.heroSubtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button button-accent">{t.quote}<ArrowRight size={17} /></a>
              <a href="#about" className="button button-outline">{t.learn}</a>
            </div>
          </div>
        </div>
        <a href="#about" aria-label="Scroll to learn more" className="scroll-cue"><span /></a>
      </section>

      <section id="about" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="border-l-2 border-accent pl-7 md:pl-10">
            <div className="eyebrow text-accent">{t.aboutLabel}</div>
            <h2 className="section-title mt-5">{t.aboutTitle}</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{t.aboutBody}</p>
            <a href="#services" className="text-link mt-8 inline-flex items-center gap-2">{t.aboutLink}<ArrowRight size={16} /></a>
          </Reveal>
          <Reveal className="relative" delay={120}>
            <div className="image-frame"><img src={logisticsImage} alt="Logistics professionals coordinating shipments at a global container port" loading="lazy" width={1400} height={1100} className="h-full w-full object-cover" /></div>
            <div className="image-caption"><Globe2 size={18} /><span>GLOBAL NETWORK<br /><strong>LOCAL CONTROL</strong></span></div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-pad bg-secondary">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><div className="eyebrow text-accent">{t.servicesLabel}</div><h2 className="section-title mt-5 max-w-3xl">{t.servicesTitle}</h2></div>
            <p className="max-w-md text-muted-foreground">{t.servicesIntro}</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.serviceItems.map(([title, body], i) => { const Icon = serviceIcons[i] ?? Box; return <Reveal key={title} delay={i * 90}><article className="service-card"><Icon size={28} strokeWidth={1.6} /><span className="service-index">0{i + 1}</span><h3>{title}</h3><p>{body}</p><ArrowRight className="mt-auto" size={18} /></article></Reveal>; })}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad relative bg-primary text-primary-foreground">
        <div className="process-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center"><div className="eyebrow text-accent">{t.processLabel}</div><h2 className="section-title mt-5 text-primary-foreground">{t.processTitle}</h2></Reveal>
          <Reveal className="process-track mt-16">
            {t.steps.map(([title, body], i) => { const Icon = stepIcons[i] ?? Truck; return <div className="process-step" key={title}><div className="step-icon"><Icon size={27} strokeWidth={1.6} /></div><div className="step-number">0{i + 1}</div><h3>{title}</h3><p>{body}</p></div>; })}
          </Reveal>
        </div>
      </section>

      <section id="why" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-24 lg:px-8">
          <div ref={metricsRef} className="grid gap-10 sm:grid-cols-3 lg:grid-cols-1">
            {t.metrics.map(([label, value, suffix]) => <Metric key={label} label={label} value={value} suffix={suffix} active={metricsActive} />)}
          </div>
          <Reveal className="lg:pt-8"><div className="eyebrow text-accent">{t.whyLabel}</div><h2 className="section-title mt-5">{t.whyTitle}</h2><p className="mt-7 text-base leading-8 text-muted-foreground">{t.whyBody}</p><div className="mt-9 grid grid-cols-2 gap-4"><div className="value-chip"><Check size={17} />Proactive visibility</div><div className="value-chip"><Check size={17} />One accountable team</div></div></Reveal>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div><div className="eyebrow text-accent">{t.trustLabel}</div><h2 className="section-title mt-5 text-charcoal-foreground">{t.trustTitle}</h2></div>
            <div className="testimonial-panel">
              <Quote className="text-accent" size={38} strokeWidth={1.4} />
              <div key={`${language}-${testimonial}`} className="testimonial-fade"><div className="mt-7 flex gap-1 text-accent" aria-label="5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><blockquote className="mt-5 text-xl font-light leading-relaxed md:text-2xl">“{t.testimonials[testimonial]?.[0]}”</blockquote><div className="mt-8"><strong>{t.testimonials[testimonial]?.[1]}</strong><span className="mt-1 block text-sm text-charcoal-foreground/55">{t.testimonials[testimonial]?.[2]}</span></div></div>
              <div className="mt-8 flex gap-2"><button className="carousel-button" onClick={() => setTestimonial((testimonial - 1 + t.testimonials.length) % t.testimonials.length)} aria-label="Previous testimonial"><ChevronLeft size={18} /></button><button className="carousel-button" onClick={() => setTestimonial((testimonial + 1) % t.testimonials.length)} aria-label="Next testimonial"><ChevronRight size={18} /></button></div>
            </div>
          </Reveal>
          <div className="partner-row mt-16"><span>{t.partners}</span><strong>amazon</strong><strong>shopify</strong><strong>LLC</strong><strong>FREIGHT<br />FORWARD</strong></div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad relative bg-primary text-primary-foreground">
        <div className="process-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-8">
          <Reveal><div className="eyebrow text-accent">{t.contactLabel}</div><h2 className="section-title mt-5 text-primary-foreground">{t.contactTitle}</h2><p className="mt-6 max-w-md leading-7 text-primary-foreground/65">{t.contactBody}</p><div className="mt-10 space-y-5"><a href="mailto:hello@nexusglobalsupply.com" className="contact-detail"><Mail size={19} />hello@nexusglobalsupply.com</a><div className="contact-detail"><MapPin size={19} />{t.location}</div><div className="contact-detail"><Clock3 size={19} />{t.hours}</div></div></Reveal>
          <Reveal delay={120}><form className="contact-form" onSubmit={handleSubmit}><div className="grid gap-5 sm:grid-cols-2">{t.fields.slice(0, 3).map((field, i) => <label key={field} className={i === 2 ? "sm:col-span-2" : ""}><span>{field}</span><input type={i === 2 ? "email" : "text"} placeholder={t.placeholders[i]} required /></label>)}<label className="sm:col-span-2"><span>{t.fields[3]}</span><textarea placeholder={t.placeholders[3]} rows={5} required /></label></div><button type="submit" className="button button-accent mt-6">{t.send}<ArrowRight size={17} /></button>{sent && <p className="mt-4 text-sm text-success" role="status"><Check className="inline-block" size={16} /> {t.sent}</p>}</form></Reveal>
        </div>
      </section>

      <footer className="bg-footer py-14 text-footer-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 border-b border-footer-foreground/12 pb-12 md:grid-cols-[1.4fr_2fr]"><div><Logo /><p className="mt-5 text-sm text-footer-foreground/55">{t.slogan}</p></div><div className="grid grid-cols-3 gap-5">{t.columns.map((column) => <div key={column[0]}><strong className="text-xs uppercase tracking-[0.14em]">{column[0]}</strong>{column.slice(1).map((link) => <a key={link} href="#top" className="mt-3 block text-sm text-footer-foreground/50 hover:text-accent">{link}</a>)}</div>)}</div></div><div className="flex flex-col gap-4 pt-7 text-xs text-footer-foreground/45 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexus Global Supply Solutions LLC. {t.rights}</span><span>Miami · Caracas · Global</span></div></div>
      </footer>
    </main>
  );
}