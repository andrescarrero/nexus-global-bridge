import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Language = "en" | "es";

const copy = {
  en: {
    title: "Terms & Conditions",
    backToHome: "← Back to Home",
    lastUpdated: "Last updated: January 15, 2026",
    sections: {
      section1: {
        title: "1. Acceptance of Terms",
        content: 'By accessing and using the services of Nexus Global Supply Solutions LLC ("Nexus," "we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
      },
      section2: {
        title: "2. Services",
        intro: "Nexus provides global supply chain solutions including but not limited to:",
        items: [
          "Sourcing and procurement",
          "E-commerce distribution services",
          "Supply chain management",
          "Logistics coordination",
        ],
        outro: "Specific terms for each service will be outlined in individual service agreements.",
      },
      section3: {
        title: "3. Use of Website",
        intro: "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. You must not:",
        items: [
          "Use the website in any way that causes damage to the website or impairs its availability",
          "Use the website to transmit any harmful or malicious code",
          "Attempt to gain unauthorized access to our systems",
          "Use automated systems to access the website without our permission",
        ],
      },
      section4: {
        title: "4. Intellectual Property",
        content: "All content on this website, including text, graphics, logos, images, and software, is the property of Nexus Global Supply Solutions LLC and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
      },
      section5: {
        title: "5. Limitation of Liability",
        content: "To the fullest extent permitted by law, Nexus Global Supply Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services or website.",
      },
      section6: {
        title: "6. Service Agreements",
        content: "Specific services provided by Nexus will be governed by separate service agreements that outline pricing, delivery terms, responsibilities, and other relevant conditions. These agreements take precedence over these general terms for the specific services covered.",
      },
      section7: {
        title: "7. Modifications",
        content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
      },
      section8: {
        title: "8. Governing Law",
        content: "These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.",
      },
      section9: {
        title: "9. Contact Information",
        intro: "If you have any questions about these Terms and Conditions, please contact us:",
        company: "Nexus Global Supply Solutions LLC",
        email: "Email:",
        location: "Location:",
        address: "Miami, Florida, United States",
      },
    },
  },
  es: {
    title: "Términos y Condiciones",
    backToHome: "← Volver al Inicio",
    lastUpdated: "Última actualización: 15 de enero de 2026",
    sections: {
      section1: {
        title: "1. Aceptación de Términos",
        content: 'Al acceder y usar los servicios de Nexus Global Supply Solutions LLC ("Nexus," "nosotros," "nuestro"), aceptas y acuerdas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con estos términos, por favor no uses nuestros servicios.',
      },
      section2: {
        title: "2. Servicios",
        intro: "Nexus proporciona soluciones globales de cadena de suministro que incluyen, pero no se limitan a:",
        items: [
          "Abastecimiento y adquisiciones",
          "Servicios de distribución e-commerce",
          "Gestión de cadena de suministro",
          "Coordinación logística",
        ],
        outro: "Los términos específicos para cada servicio se detallarán en acuerdos de servicio individuales.",
      },
      section3: {
        title: "3. Uso del Sitio Web",
        intro: "Aceptas usar nuestro sitio web solo para propósitos legales y de una manera que no infrinja los derechos de otros o restrinja su uso del sitio web. No debes:",
        items: [
          "Usar el sitio web de cualquier manera que cause daño al sitio web o afecte su disponibilidad",
          "Usar el sitio web para transmitir cualquier código dañino o malicioso",
          "Intentar obtener acceso no autorizado a nuestros sistemas",
          "Usar sistemas automatizados para acceder al sitio web sin nuestro permiso",
        ],
      },
      section4: {
        title: "4. Propiedad Intelectual",
        content: "Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de Nexus Global Supply Solutions LLC y está protegido por derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir, distribuir o crear trabajos derivados sin nuestro permiso expreso por escrito.",
      },
      section5: {
        title: "5. Limitación de Responsabilidad",
        content: "En la medida máxima permitida por la ley, Nexus Global Supply Solutions LLC no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja de o esté relacionado con tu uso de nuestros servicios o sitio web.",
      },
      section6: {
        title: "6. Acuerdos de Servicio",
        content: "Los servicios específicos proporcionados por Nexus estarán regidos por acuerdos de servicio separados que describen precios, términos de entrega, responsabilidades y otras condiciones relevantes. Estos acuerdos tienen precedencia sobre estos términos generales para los servicios específicos cubiertos.",
      },
      section7: {
        title: "7. Modificaciones",
        content: "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en este sitio web. Tu uso continuo de nuestros servicios después de que se publiquen los cambios constituye la aceptación de los términos modificados.",
      },
      section8: {
        title: "8. Ley Aplicable",
        content: "Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes del Estado de Florida, Estados Unidos, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
      },
      section9: {
        title: "9. Información de Contacto",
        intro: "Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos:",
        company: "Nexus Global Supply Solutions LLC",
        email: "Correo:",
        location: "Ubicación:",
        address: "Miami, Florida, Estados Unidos",
      },
    },
  },
} as const;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Nexus Global Supply Solutions" },
      { name: "description", content: "Terms and conditions for using Nexus Global Supply Solutions services." },
    ],
  }),
  component: Terms,
});

function Terms() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nexus-language") as Language | null;
    setLanguage(stored === "en" || stored === "es" ? stored : navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
  }, []);

  const t = copy[language];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-4xl px-5">
          <Link to="/" className="text-sm font-semibold text-primary hover:text-accent">
            {t.backToHome}
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-16">
        <h1 className="font-display text-4xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t.lastUpdated}</p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section1.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section1.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section2.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section2.intro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {t.sections.section2.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section2.outro}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section3.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section3.intro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {t.sections.section3.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section4.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section4.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section5.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section5.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section6.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section6.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section7.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section7.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section8.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section8.content}
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section9.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section9.intro}
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            <strong>{t.sections.section9.company}</strong><br />
            <strong>{t.sections.section9.email}</strong> NexusGlobalSupplySolutions@gmail.com<br />
            <strong>{t.sections.section9.location}</strong> {t.sections.section9.address}
          </p>
        </div>
      </article>
    </main>
  );
}
