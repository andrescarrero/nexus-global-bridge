import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Language = "en" | "es";

const copy = {
  en: {
    message: "We use cookies to improve your browsing experience, analyze site traffic, and personalize content.",
    learnMore: "Learn more",
    acceptAll: "Accept All",
    decline: "Decline",
  },
  es: {
    message: "Usamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido.",
    learnMore: "Saber más",
    acceptAll: "Aceptar Todo",
    decline: "Rechazar",
  },
} as const;

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
    
    const stored = localStorage.getItem("nexus-language") as Language | null;
    setLanguage(stored === "en" || stored === "es" ? stored : navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  const t = copy[language];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-charcoal p-4 shadow-lg md:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-charcoal-foreground">
            {t.message}{" "}
            <a href="/privacy" className="font-semibold text-accent underline hover:text-accent/80">
              {t.learnMore}
            </a>
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            onClick={acceptCookies}
            className="inline-flex h-10 items-center justify-center rounded bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {t.acceptAll}
          </button>
          <button
            onClick={declineCookies}
            className="inline-flex h-10 items-center justify-center rounded border border-charcoal-foreground/30 px-6 text-sm font-semibold text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/10"
          >
            {t.decline}
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="absolute right-4 top-4 text-charcoal-foreground/60 transition-colors hover:text-charcoal-foreground md:static"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
