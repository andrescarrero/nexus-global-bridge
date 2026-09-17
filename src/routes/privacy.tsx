import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Language = "en" | "es";

const copy = {
  en: {
    title: "Privacy Policy & Cookies",
    backToHome: "← Back to Home",
    lastUpdated: "Last updated: January 15, 2026",
    sections: {
      section1: {
        title: "1. Information We Collect",
        content: "We collect information you provide directly to us when you contact us through our website, including your name, email address, company name, and any other information you choose to provide.",
      },
      section2: {
        title: "2. How We Use Your Information",
        intro: "We use the information we collect to:",
        items: [
          "Respond to your inquiries and provide customer service",
          "Send you information about our services",
          "Improve our website and services",
          "Comply with legal obligations",
        ],
      },
      section3: {
        title: "3. Cookies",
        intro: "Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:",
        items: [
          { label: "Essential cookies:", text: "Required for the website to function properly" },
          { label: "Analytics cookies:", text: "Help us understand how visitors use our website" },
          { label: "Preference cookies:", text: "Remember your language selection and other preferences" },
        ],
        outro: "You can control cookies through your browser settings. However, disabling cookies may affect website functionality.",
      },
      section4: {
        title: "4. Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      section5: {
        title: "5. Third-Party Services",
        content: "We may use third-party services (such as analytics providers) that collect, monitor, and analyze data to improve our services. These third parties have their own privacy policies.",
      },
      section6: {
        title: "6. Your Rights",
        intro: "You have the right to:",
        items: [
          "Access the personal information we hold about you",
          "Request correction of inaccurate information",
          "Request deletion of your information",
          "Object to processing of your information",
          "Withdraw consent at any time",
        ],
      },
      section7: {
        title: "7. Contact Us",
        intro: "If you have questions about this Privacy Policy or our data practices, please contact us at:",
        email: "Email:",
        address: "Address:",
        location: "Miami, Florida, United States",
      },
    },
  },
  es: {
    title: "Política de Privacidad y Cookies",
    backToHome: "← Volver al Inicio",
    lastUpdated: "Última actualización: 15 de enero de 2026",
    sections: {
      section1: {
        title: "1. Información que Recopilamos",
        content: "Recopilamos la información que nos proporcionas directamente cuando te contactas con nosotros a través de nuestro sitio web, incluyendo tu nombre, dirección de correo electrónico, nombre de la empresa y cualquier otra información que elijas proporcionar.",
      },
      section2: {
        title: "2. Cómo Usamos tu Información",
        intro: "Usamos la información que recopilamos para:",
        items: [
          "Responder a tus consultas y proporcionar servicio al cliente",
          "Enviarte información sobre nuestros servicios",
          "Mejorar nuestro sitio web y servicios",
          "Cumplir con obligaciones legales",
        ],
      },
      section3: {
        title: "3. Cookies",
        intro: "Nuestro sitio web usa cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en tu dispositivo. Usamos:",
        items: [
          { label: "Cookies esenciales:", text: "Requeridas para que el sitio web funcione correctamente" },
          { label: "Cookies analíticas:", text: "Nos ayudan a entender cómo los visitantes usan nuestro sitio web" },
          { label: "Cookies de preferencias:", text: "Recuerdan tu selección de idioma y otras preferencias" },
        ],
        outro: "Puedes controlar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar las cookies puede afectar la funcionalidad del sitio web.",
      },
      section4: {
        title: "4. Seguridad de Datos",
        content: "Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
      },
      section5: {
        title: "5. Servicios de Terceros",
        content: "Podemos usar servicios de terceros (como proveedores de análisis) que recopilan, monitorean y analizan datos para mejorar nuestros servicios. Estos terceros tienen sus propias políticas de privacidad.",
      },
      section6: {
        title: "6. Tus Derechos",
        intro: "Tienes derecho a:",
        items: [
          "Acceder a la información personal que tenemos sobre ti",
          "Solicitar la corrección de información inexacta",
          "Solicitar la eliminación de tu información",
          "Oponerte al procesamiento de tu información",
          "Retirar el consentimiento en cualquier momento",
        ],
      },
      section7: {
        title: "7. Contáctanos",
        intro: "Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, por favor contáctanos en:",
        email: "Correo:",
        address: "Dirección:",
        location: "Miami, Florida, Estados Unidos",
      },
    },
  },
} as const;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Nexus Global Supply Solutions" },
      { name: "description", content: "Privacy policy and cookie information for Nexus Global Supply Solutions." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
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

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section3.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section3.intro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {t.sections.section3.items.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section3.outro}
          </p>

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
            {t.sections.section6.intro}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {t.sections.section6.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-foreground">{t.sections.section7.title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            {t.sections.section7.intro}
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            <strong>{t.sections.section7.email}</strong> NexusGlobalSupplySolutions@gmail.com<br />
            <strong>{t.sections.section7.address}</strong> {t.sections.section7.location}
          </p>
        </div>
      </article>
    </main>
  );
}
