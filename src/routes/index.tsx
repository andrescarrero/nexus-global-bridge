// Test deploy
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Phone,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-image.webp";
import { CookieBanner } from "@/components/CookieBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Global Supply Solutions | Wholesale Sourcing & Distribution Opportunities" },
      { name: "description", content: "Nexus Global Supply Solutions LLC is a U.S.-based company in Miami, Florida focused on wholesale purchasing and product sourcing, working with brands, manufacturers, and wholesale suppliers." },
      { property: "og:title", content: "Nexus Global Supply Solutions LLC" },
      { property: "og:description", content: "Wholesale sourcing and distribution opportunities. Working with brands, manufacturers, and wholesale suppliers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "en" | "es";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlllrdd";

const copy = {
  en: {
    nav: ["About", "Services", "Process", "Why Nexus", "Suppliers", "Contact"],
    heroLabel: "WHOLESALE PURCHASING & SOURCING",
    heroTitle: "Building Long-Term Supplier Partnerships",
    heroSubtitle: "We work with brands, manufacturers, and wholesale suppliers to source products across a range of categories for the U.S. market, with an eye toward international growth.",
    quote: "Partner With Us",
    learn: "Learn More",
    aboutLabel: "WHO WE ARE",
    aboutTitle: "U.S. based. Focused on long-term partnerships.",
    aboutBody: "Nexus Global Supply Solutions LLC is a U.S.-based company focused on wholesale purchasing and sourcing. We aim to build long-term relationships with brands, manufacturers, and wholesale suppliers across a variety of product categories. We are also open to conversations about international trade and export opportunities.",
    aboutLink: "See what we do",
    imageCaption: ["U.S. BASED", "OPEN TO INTERNATIONAL TRADE"],
    servicesLabel: "WHAT WE DO",
    servicesTitle: "Focused on wholesale purchasing and sourcing",
    servicesIntro: "We focus on purchasing from brands and wholesale suppliers, evaluating products across multiple categories, and developing distribution opportunities in the U.S. and internationally.",
    serviceItems: [
      ["Wholesale Purchasing", "We are interested in opening wholesale accounts and purchasing products directly from brands and authorized suppliers."],
      ["Product Sourcing", "We identify and evaluate products and suppliers across a broad range of categories."],
      ["U.S. Distribution Opportunities", "We are interested in developing distribution opportunities for suitable products in the U.S. market."],
      ["International Opportunities", "We are open to exploring export opportunities, subject to supplier agreements and applicable requirements."],
    ],
    processLabel: "HOW WE WORK WITH SUPPLIERS",
    processTitle: "How it works",
    steps: [
      ["Connect", "We reach out and learn about your catalog and wholesale account requirements."],
      ["Review", "We evaluate products, pricing, terms, and sales policies."],
      ["Partner", "We open an account and place orders under your terms."],
    ],
    whyLabel: "WHY NEXUS",
    whyTitle: "A straightforward partner for suppliers",
    whyBody: "We are a U.S.-based company building our supplier relationships one at a time. We keep communication clear, follow each supplier's account terms and policies, and focus on relationships that can grow over the long term.",
    metrics: [["LLC", "U.S.-based · Miami, Florida"], ["Clear", "Communication"], ["Supplier Partnerships", "Seeking wholesale purchasing relationships"]],
    valueChips: ["Direct communication", "Respect for supplier policies"],
    trustLabel: "OUR DIFFERENCE",
    trustTitle: "How we work with suppliers",
    testimonials: [
      ["We believe strong supplier relationships start with clear communication, respect for sales policies, and a shared understanding of how we will work together.", "Total Transparency", "Honest & Clear"],
      ["We respond promptly to supplier questions and requests for information, and we adapt to each supplier's onboarding process, documentation, and account requirements.", "Responsive Communication", "Prompt & Flexible"],
      ["We respect each supplier's terms, pricing policies, and brand guidelines, and we focus on building relationships that can grow over time.", "Long-term Commitment", "Respectful & Committed"],
    ],
    suppliersLabel: "SUPPLIERS",
    suppliersTitle: "For Brands & Wholesale Suppliers",
    suppliersBody: "We are interested in establishing wholesale relationships with brands, manufacturers, and suppliers across a variety of product categories. If your company offers wholesale accounts, we would be glad to learn about your catalog, account requirements, and sales policies.",
    suppliersEmailLabel: "Purchasing inquiries",
    suppliersChipsTitle: "What we'd like to learn",
    suppliersChips: ["Product catalog & price list", "Wholesale account requirements", "Sales & pricing policies"],
    contactLabel: "START A CONVERSATION",
    contactTitle: "Let's build a wholesale partnership.",
    contactBody: "If you offer wholesale accounts, tell us about your products and account requirements. We'll get back to you shortly.",
    emails: [["Purchasing & supplier inquiries", "purchasing@nexusglobalss.com"], ["General inquiries", "info@nexusglobalss.com"], ["Business inquiries", "contact@nexusglobalss.com"]],
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    whatsappNumber: "+1 (727) 482-5106",
    fields: ["Name", "Company", "Email", "Tell us about your company and products"],
    placeholders: ["Your full name", "Company name", "you@company.com", "Your catalog, product categories, and account requirements"],
    send: "Send Message",
    sending: "Sending...",
    sent: "Message sent — we'll be in touch shortly.",
    formError: "Something went wrong. Please try again or email us directly.",
    location: "Nexus Global Supply Solutions LLC · Miami, Florida, USA",
    hours: "Monday–Friday · 9:00–18:00 ET",
    slogan: "Wholesale sourcing. U.S. based.",
    columns: [["Company", "About", "Why Nexus"], ["Services", "Wholesale Purchasing", "Product Sourcing", "U.S. Distribution Opportunities", "International Opportunities"], ["Legal", "Privacy", "Terms"]],
    rights: "All rights reserved.",
    footerLocation: "Based in Miami, Florida",
  },
  es: {
    nav: ["Nosotros", "Servicios", "Proceso", "Por qué Nexus", "Proveedores", "Contacto"],
    heroLabel: "COMPRAS MAYORISTAS Y ABASTECIMIENTO",
    heroTitle: "Construyendo Alianzas Duraderas con Proveedores",
    heroSubtitle: "Trabajamos con marcas, fabricantes y proveedores mayoristas para abastecer productos de diversas categorías para el mercado estadounidense, con miras al crecimiento internacional.",
    quote: "Trabaja con Nosotros",
    learn: "Saber Más",
    aboutLabel: "QUIÉNES SOMOS",
    aboutTitle: "Con sede en EE. UU. Enfocados en relaciones a largo plazo.",
    aboutBody: "Nexus Global Supply Solutions LLC es una empresa con sede en EE. UU. enfocada en compras mayoristas y abastecimiento. Buscamos construir relaciones a largo plazo con marcas, fabricantes y proveedores mayoristas de diversas categorías de productos. También estamos abiertos a conversar sobre oportunidades internacionales de comercio y exportación.",
    aboutLink: "Conoce lo que hacemos",
    imageCaption: ["CON SEDE EN EE. UU.", "ABIERTOS AL COMERCIO INTERNACIONAL"],
    servicesLabel: "QUÉ HACEMOS",
    servicesTitle: "Enfocados en compras mayoristas y abastecimiento",
    servicesIntro: "Nos enfocamos en comprar a marcas y proveedores mayoristas, evaluar productos de múltiples categorías y desarrollar oportunidades de distribución en EE. UU. y a nivel internacional.",
    serviceItems: [
      ["Compras Mayoristas", "Nos interesa abrir cuentas mayoristas y comprar productos directamente a marcas y proveedores autorizados."],
      ["Abastecimiento de Productos", "Identificamos y evaluamos productos y proveedores en una amplia variedad de categorías."],
      ["Oportunidades de Distribución en EE. UU.", "Nos interesa desarrollar oportunidades de distribución para productos adecuados en el mercado estadounidense."],
      ["Oportunidades Internacionales", "Estamos abiertos a explorar oportunidades de exportación, sujetas a los acuerdos con proveedores y a los requisitos aplicables."],
    ],
    processLabel: "CÓMO TRABAJAMOS CON PROVEEDORES",
    processTitle: "Cómo funciona",
    steps: [
      ["Conectamos", "Te contactamos y conocemos tu catálogo y los requisitos de tu cuenta mayorista."],
      ["Evaluamos", "Revisamos productos, precios, condiciones y políticas de venta."],
      ["Nos asociamos", "Abrimos una cuenta y realizamos pedidos según tus condiciones."],
    ],
    whyLabel: "POR QUÉ NEXUS",
    whyTitle: "Un aliado directo para proveedores",
    whyBody: "Somos una empresa con sede en EE. UU. que construye sus relaciones con proveedores una a una. Mantenemos una comunicación clara, respetamos las condiciones y políticas de cuenta de cada proveedor y nos enfocamos en relaciones que puedan crecer a largo plazo.",
    metrics: [["LLC", "Con sede en EE. UU. · Miami, Florida"], ["Clara", "Comunicación"], ["Alianzas con Proveedores", "Buscamos relaciones de compra mayorista"]],
    valueChips: ["Comunicación directa", "Respeto a las políticas del proveedor"],
    trustLabel: "NUESTRA DIFERENCIA",
    trustTitle: "Cómo trabajamos con proveedores",
    testimonials: [
      ["Creemos que una relación sólida con los proveedores comienza con una comunicación clara, el respeto a sus políticas de venta y un entendimiento compartido de cómo trabajaremos juntos.", "Transparencia Total", "Honesto y Claro"],
      ["Respondemos con prontitud a las preguntas y solicitudes de información de los proveedores, y nos adaptamos a su proceso de alta, documentación y requisitos de cuenta.", "Comunicación Ágil", "Rápido y Flexible"],
      ["Respetamos las condiciones, políticas de precios y lineamientos de marca de cada proveedor, y nos enfocamos en construir relaciones que puedan crecer con el tiempo.", "Compromiso a Largo Plazo", "Respetuoso y Comprometido"],
    ],
    suppliersLabel: "PROVEEDORES",
    suppliersTitle: "Para Marcas y Proveedores Mayoristas",
    suppliersBody: "Nos interesa establecer relaciones mayoristas con marcas, fabricantes y proveedores de diversas categorías de productos. Si tu empresa ofrece cuentas mayoristas, con gusto conoceremos tu catálogo, los requisitos de cuenta y tus políticas de venta.",
    suppliersEmailLabel: "Consultas de compras",
    suppliersChipsTitle: "Lo que nos gustaría conocer",
    suppliersChips: ["Catálogo y lista de precios", "Requisitos de cuenta mayorista", "Políticas de venta y precios"],
    contactLabel: "INICIEMOS UNA CONVERSACIÓN",
    contactTitle: "Construyamos una relación mayorista.",
    contactBody: "Si ofreces cuentas mayoristas, cuéntanos sobre tus productos y los requisitos de cuenta. Te responderemos a la brevedad.",
    emails: [["Compras y consultas de proveedores", "purchasing@nexusglobalss.com"], ["Información general", "info@nexusglobalss.com"], ["Consultas comerciales", "contact@nexusglobalss.com"]],
    phoneLabel: "Teléfono",
    whatsappLabel: "WhatsApp",
    whatsappNumber: "+1 (727) 482-5106",
    fields: ["Nombre", "Empresa", "Email", "Cuéntanos sobre tu empresa y tus productos"],
    placeholders: ["Tu nombre completo", "Nombre de la empresa", "tu@empresa.com", "Tu catálogo, categorías de productos y requisitos de cuenta"],
    send: "Enviar Mensaje",
    sending: "Enviando...",
    sent: "Mensaje enviado — pronto estaremos en contacto.",
    formError: "Algo salió mal. Intenta de nuevo o escríbenos directamente.",
    location: "Nexus Global Supply Solutions LLC · Miami, Florida, EE. UU.",
    hours: "Lunes–viernes · 9:00–18:00 ET",
    slogan: "Abastecimiento mayorista. Con sede en EE. UU.",
    columns: [["Compañía", "Nosotros", "Por qué Nexus"], ["Servicios", "Compras Mayoristas", "Abastecimiento de Productos", "Oportunidades de Distribución en EE. UU.", "Oportunidades Internacionales"], ["Legal", "Privacidad", "Términos"]],
    rights: "Todos los derechos reservados.",
    footerLocation: "Con sede en Miami, Florida",
  },
} as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" aria-label="Nexus Global Supply Solutions" className="group flex items-center gap-3">
      <img src="/logo.png" alt="Nexus Global Supply Solutions" className={compact ? "h-24" : "h-28 md:h-32 lg:h-36"} />
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
        if (d < 145) { context.strokeStyle = `rgba(118, 168, 216, ${0.35 * (1 - d / 145)})`; context.lineWidth = 1.5; context.beginPath(); context.moveTo(a.x * width, a.y * height); context.lineTo(b.x * width, b.y * height); context.stroke(); }
      }));
      nodes.forEach((node, index) => { context.fillStyle = index % 11 === 0 ? "rgba(244,130,31,.95)" : "rgba(180,211,239,.75)"; context.beginPath(); context.arc(node.x * width, node.y * height, index % 11 === 0 ? 3.5 : 2, 0, Math.PI * 2); context.fill(); });
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

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="metric"><div className="font-display text-5xl font-extrabold text-accent md:text-6xl">{value}</div><div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/65">{label}</div></div>;
}

function Index() {
  const [language, setLanguage] = useState<Language>("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const stored = window.localStorage.getItem("nexus-language") as Language | null;
    setLanguage(stored === "en" || stored === "es" ? stored : navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % t.testimonials.length), 6500); return () => window.clearInterval(timer); }, [t.testimonials.length]);

  const setLang = (next: Language) => { setLanguage(next); window.localStorage.setItem("nexus-language", next); };
  const navTargets = ["about", "services", "process", "why", "suppliers", "contact"];
  const serviceIcons = [ShoppingBag, Search, Network, Globe2];
  const stepIcons = [Mail, Search, Handshake];
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never fill this hidden field, bots usually do.
    if (data.get("_gotcha")) { form.reset(); setSent(true); return; }
    setSending(true);
    setFormError(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (response.ok) { setSent(true); form.reset(); } else { setFormError(true); }
    } catch {
      setFormError(true);
    } finally {
      setSending(false);
    }
  };

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
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2rem,7vw,6.6rem)] font-extrabold leading-[0.96] tracking-normal">{t.heroTitle}</h1>
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
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <Reveal className="border-l-2 border-accent pl-7 md:pl-10">
            <div className="eyebrow text-accent">{t.aboutLabel}</div>
            <h2 className="section-title mt-5">{t.aboutTitle}</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{t.aboutBody}</p>
            <a href="#services" className="text-link mt-8 inline-flex items-center gap-2">{t.aboutLink}<ArrowRight size={16} /></a>
          </Reveal>
          <Reveal className="relative" delay={120}>
            <div className="image-frame"><img src={aboutImage} alt="Nexus Global Supply Solutions" loading="lazy" width={1400} height={1100} className="h-full w-full object-cover" /></div>
            <div className="image-caption"><Globe2 size={18} /><span>{t.imageCaption[0]}<br /><strong>{t.imageCaption[1]}</strong></span></div>
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
            {t.steps.map(([title, body], i) => { const Icon = stepIcons[i] ?? Handshake; return <div className="process-step" key={title}><div className="step-icon"><Icon size={27} strokeWidth={1.6} /></div><div className="step-number">0{i + 1}</div><h3>{title}</h3><p>{body}</p></div>; })}
          </Reveal>
        </div>
      </section>

      <section id="why" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-24 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-1">
            {t.metrics.map(([value, label], i) => <Reveal key={label} delay={i * 90}><Metric label={label} value={value} /></Reveal>)}
          </div>
          <Reveal className="lg:pt-8"><div className="eyebrow text-accent">{t.whyLabel}</div><h2 className="section-title mt-5">{t.whyTitle}</h2><p className="mt-7 text-base leading-8 text-muted-foreground">{t.whyBody}</p><div className="mt-9 grid grid-cols-2 gap-4">{t.valueChips.map((chip) => <div key={chip} className="value-chip"><Check size={17} />{chip}</div>)}</div></Reveal>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div><div className="eyebrow text-accent">{t.trustLabel}</div><h2 className="section-title mt-5 text-charcoal-foreground">{t.trustTitle}</h2></div>
            <div className="testimonial-panel">
              <div key={`${language}-${testimonial}`} className="testimonial-fade"><p className="mt-7 text-xl font-light leading-relaxed md:text-2xl">{t.testimonials[testimonial]?.[0]}</p><div className="mt-8"><strong>{t.testimonials[testimonial]?.[1]}</strong><span className="mt-1 block text-sm text-charcoal-foreground/55">{t.testimonials[testimonial]?.[2]}</span></div></div>
              <div className="mt-8 flex gap-2"><button className="carousel-button" onClick={() => setTestimonial((testimonial - 1 + t.testimonials.length) % t.testimonials.length)} aria-label="Previous"><ChevronLeft size={18} /></button><button className="carousel-button" onClick={() => setTestimonial((testimonial + 1) % t.testimonials.length)} aria-label="Next"><ChevronRight size={18} /></button></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="suppliers" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-24 lg:px-8">
          <Reveal className="border-l-2 border-accent pl-7 md:pl-10">
            <div className="eyebrow text-accent">{t.suppliersLabel}</div>
            <h2 className="section-title mt-5">{t.suppliersTitle}</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{t.suppliersBody}</p>
            <a href="mailto:purchasing@nexusglobalss.com" className="text-link mt-8 inline-flex flex-wrap items-center gap-2"><Mail size={16} />{t.suppliersEmailLabel}: purchasing@nexusglobalss.com</a>
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow text-foreground/65">{t.suppliersChipsTitle}</div>
            <div className="mt-6 grid gap-4">{t.suppliersChips.map((chip) => <div key={chip} className="value-chip"><Check size={17} />{chip}</div>)}</div>
            <a href="#contact" className="button button-accent mt-8">{t.quote}<ArrowRight size={17} /></a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad relative bg-primary text-primary-foreground">
        <div className="process-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-8">
          <Reveal><div className="eyebrow text-accent">{t.contactLabel}</div><h2 className="section-title mt-5 text-primary-foreground">{t.contactTitle}</h2><p className="mt-6 max-w-md leading-7 text-primary-foreground/65">{t.contactBody}</p><div className="mt-10 space-y-5">{t.emails.map(([label, email]) => <a key={email} href={`mailto:${email}`} className="contact-detail"><Mail size={19} /><span><strong className="text-primary-foreground">{label}:</strong> {email}</span></a>)}<a href="tel:+17274825106" className="contact-detail"><Phone size={19} /><span><strong className="text-primary-foreground">{t.phoneLabel}:</strong> {t.whatsappNumber}</span></a><a href="https://wa.me/17274825106" target="_blank" rel="noopener noreferrer" className="contact-detail"><MessageCircle size={19} /><span><strong className="text-primary-foreground">{t.whatsappLabel}:</strong> {t.whatsappNumber}</span></a><div className="contact-detail"><MapPin size={19} />{t.location}</div><div className="contact-detail"><Clock3 size={19} />{t.hours}</div></div></Reveal>
          <Reveal delay={120}><form className="contact-form" onSubmit={handleSubmit}><input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} /><div className="grid gap-5 sm:grid-cols-2">{t.fields.slice(0, 3).map((field, i) => <label key={field} className={i === 2 ? "sm:col-span-2" : ""}><span>{field}</span><input name={["name", "company", "email"][i]} type={i === 2 ? "email" : "text"} placeholder={t.placeholders[i]} required /></label>)}<label className="sm:col-span-2"><span>{t.fields[3]}</span><textarea name="message" placeholder={t.placeholders[3]} rows={5} required /></label></div><button type="submit" className="button button-accent mt-6" disabled={sending}>{sending ? t.sending : t.send}<ArrowRight size={17} /></button>{sent && <p className="mt-4 text-sm text-success" role="status"><Check className="inline-block" size={16} /> {t.sent}</p>}{formError && <p className="mt-4 text-sm text-destructive" role="alert">{t.formError}</p>}</form></Reveal>
        </div>
      </section>

      <footer className="bg-background py-14 text-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 border-b border-border pb-12 md:grid-cols-[1.4fr_2fr]"><div><Logo /><p className="mt-5 text-sm text-muted-foreground">{t.slogan}</p><p className="mt-4 text-sm text-muted-foreground"><strong className="text-foreground">Nexus Global Supply Solutions LLC</strong><br /><a href="tel:+17274825106" className="hover:text-accent">{t.phoneLabel}: {t.whatsappNumber}</a></p></div><div className="grid grid-cols-3 gap-5">{t.columns.map((column, colIndex) => <div key={column[0]}><strong className="text-xs uppercase tracking-[0.14em] text-foreground">{column[0]}</strong>{column.slice(1).map((link, linkIndex) => {
          const href = colIndex === 2 ? ["/privacy", "/terms"][linkIndex] ?? "#top" : "#top";
          return <a key={link} href={href} className="mt-3 block text-sm text-muted-foreground hover:text-accent">{link}</a>;
        })}</div>)}</div></div><div className="flex flex-col gap-4 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nexus Global Supply Solutions LLC. {t.rights}</span><span>{t.footerLocation}</span></div></div>
      </footer>

      <CookieBanner />
    </main>
  );
}