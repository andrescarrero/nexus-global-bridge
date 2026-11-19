# Nexus Global Connect

🌐 Website Design Prompt — Nexus Global Supply Solutions

🎨 Paleta de Colores

Primary: Navy Blue #0D2B5E — fondos de secciones hero, headers y footers

Accent: Orange #F4821F — CTAs, hover effects, líneas decorativas y highlights

Neutral Dark: Charcoal #1C1C2E — fondos alternativos dark mode

Neutral Light: Silver Gray #F4F6F9 — fondos de secciones alternas claras

White: #FFFFFF — texto sobre fondos oscuros, cards, espaciado

🔤 Tipografía

Títulos (H1/H2): Montserrat ExtraBold — imponente, moderno, corporativo

Subtítulos (H3/H4): Montserrat SemiBold

Cuerpo de texto: Inter Regular 16px — alta legibilidad en pantalla

Acento/Etiquetas: Inter Medium en mayúsculas con letter-spacing amplio

Jerarquía: NEXUS siempre en peso Bold, "Global Supply Solutions" en Light/Regular

📐 Estructura de Secciones

1. HERO — Pantalla completa (100vh)

Fondo oscuro navy #0D2B5E con una malla geométrica animada (nodos y líneas interconectadas moviéndose sutilmente, como una red de suministro viva)

Logo NGSS centrado o esquina superior izquierda

Título principal: "Wholesale Sourcing & Distribution Opportunities" — blanco, Montserrat ExtraBold, gran tamaño

Subtítulo: "We work with brands, manufacturers, and wholesale suppliers to source products across a range of categories for the U.S. market, with an eye toward international growth." — gris claro, Inter Light

CTA doble: botón sólido naranja "Partner With Us" + botón outline blanco "Learn More"

Transición: fade-in con parallax suave al hacer scroll

2. ABOUT / WHO WE ARE

Fondo blanco, layout 50/50: texto izquierda, imagen derecha (foto editorial, tono azul)

Texto: empresa con sede en EE. UU. enfocada en compras mayoristas y abastecimiento

Línea naranja decorativa vertical al lado izquierdo del texto

Animación: slide-in desde los lados al hacer scroll (Intersection Observer)

3. SERVICES — Qué ofrecemos

Fondo gris claro #F4F6F9, grid de 3 o 4 cards

Cada card con ícono minimalista lineal (navy), título en Bold y descripción en Inter Regular

Servicios: Wholesale Purchasing / Product Sourcing / U.S. Distribution Opportunities / International Opportunities

Hover effect: card eleva sombra suave + borde naranja aparece en la parte superior

Animación: cards aparecen con stagger (una tras otra) al entrar al viewport

4. HOW IT WORKS — Proceso en 3 pasos

Fondo navy #0D2B5E, texto blanco

Timeline horizontal con íconos: 1. Connect → 2. Review → 3. Partner

Línea de conexión animada entre pasos (naranja, se dibuja de izquierda a derecha al hacer scroll)

Subtexto breve bajo cada paso en gris claro

5. WHY NEXUS — Diferenciadores

Fondo blanco, layout asimétrico: puntos destacados grandes a la izquierda (LLC / Clear / B2B, sin cifras) en naranja + descripción a la derecha

Fade-in cuando la sección entra al viewport

6. OUR DIFFERENCE

Fondo charcoal #1C1C2E, texto blanco

Carrusel de principios de trabajo con proveedores (no testimonios), transición suave (fade o slide)

Sin logos de partners, certificaciones ni estrellas

6b. FOR BRANDS & WHOLESALE SUPPLIERS

Sección antes de contacto, enlace "Suppliers" en el nav, email purchasing@nexusglobalss.com

7. CONTACT

Fondo navy #0D2B5E con patrón geométrico sutil

Formulario limpio: nombre, empresa, email, mensaje — campos en blanco con borde gris

Botón submit naranja sólido con hover que oscurece ligeramente

A la derecha: info de contacto con íconos (email, ubicación, horario)

Animación: formulario hace slide-up al entrar al viewport

8. FOOTER

Fondo #08182E (navy más oscuro)

Logo NGSS + slogan en texto pequeño gris

Links de navegación en columnas: Company / Services / Legal

Íconos de redes sociales con hover en naranja

Copyright line: © 2026 Nexus Global Supply Solutions LLC. All rights reserved.

✨ Transiciones y Microinteracciones

Scroll animations: fade-in + translateY suave en todas las secciones (usando AOS.js o GSAP)

Navbar: transparente en el hero → sólida navy con sombra al hacer scroll (sticky)

Cursor hover en botones: scale leve (1.04) + transición de color suave 0.3s

Hero background: partículas o malla animada con Three.js o CSS Canvas (nodos moviéndose lentamente)

Línea de proceso (Step 3): animación de trazado SVG al entrar al viewport

Page load: logo hace fade-in + slide-down en los primeros 0.8s

📱 Responsive

Mobile-first design

Hero con texto más pequeño, CTA apilados verticalmente

Cards de servicios en columna única

Timeline vertical en mobile   🌍 Sistema de Idiomas

Toggle bilingüe fijo en la navbar: botón EN | ES con transición suave al cambiar

El idioma se guarda en localStorage para mantener la preferencia del usuario

Traducción dinámica vía i18n.js o atributos data-lang en el HTML — sin recargar la página

Idioma por defecto: Inglés (con detección automática del navegador para español)

URLs limpias opcionales: /en/ y /es/ si se usa routing

🔤 Consideraciones Tipográficas Bilingües

Montserrat e Inter soportan perfectamente caracteres especiales en español (ñ, á, é, í, ó, ú, ¡, ¿)

Prever que los textos en español suelen ser 15-20% más largos — diseñar con texto expandible sin romper el layout

Botones con min-width fijo para que no cambien de tamaño al cambiar idioma

📐 Secciones con Contenido Bilingüe

1. HERO

EN: "Wholesale Sourcing & Distribution Opportunities"

ES: "Abastecimiento Mayorista y Oportunidades de Distribución"

EN subtitle: "We work with brands, manufacturers, and wholesale suppliers to source products across a range of categories for the U.S. market, with an eye toward international growth."

ES subtitle: "Trabajamos con marcas, fabricantes y proveedores mayoristas para abastecer productos de diversas categorías para el mercado estadounidense, con miras al crecimiento internacional."

CTAs → EN: "Partner With Us" / "Learn More" | ES: "Trabaja con Nosotros" / "Saber Más"

2. ABOUT

EN: "Who We Are" | ES: "Quiénes Somos"

Texto de misión y valores en ambos idiomas

3. SERVICES

EN: "Our Services" | ES: "Nuestros Servicios"

Nombres de servicios traducidos: Wholesale Purchasing → Compras Mayoristas, etc.

4. HOW IT WORKS

EN: "How It Works" | ES: "Cómo Funciona"

Pasos: EN: Connect → Review → Partner | ES: Conectamos → Evaluamos → Nos asociamos

5. WHY NEXUS

EN: "Why Choose Nexus?" | ES: "¿Por Qué Elegir Nexus?"

Puntos destacados y descripciones traducidos

6. OUR DIFFERENCE

Principios de trabajo con proveedores en ambos idiomas

EN: "How we work with suppliers" | ES: "Cómo trabajamos con proveedores"

7. CONTACT

EN: "Get in Touch" | ES: "Contáctanos"

Labels del formulario traducidos: Name → Nombre, Company → Empresa, etc.

Placeholder texts adaptados al idioma activo

8. FOOTER

Links de navegación traducidos

EN: "All rights reserved" | ES: "Todos los derechos reservados"

✨ Transiciones del Toggle de Idioma

Al cambiar idioma: los textos hacen un fade-out → swap → fade-in (150ms) para una transición elegante

El botón EN | ES resalta con subrayado naranja el idioma activo

La bandera opcional (🇺🇸 / 🇪🇸) puede acompañar el toggle para mayor claridad visual

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c3efa5ff-27c2-424a-8328-9b183ed93d41).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
