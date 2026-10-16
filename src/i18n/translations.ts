export const translations = {
  en: {
    navDownload: "Download",
    navHow: "How it works",
    navOpenSource: "Open source",
    eyebrow: "Open source utility for Linux",
    title: "Your DualSense.\nReady for Steam.",
    description:
      "A tiny setup assistant that fixes PS5 DualSense compatibility with Steam games on Linux. No terminal rituals. Just connect, configure, and play.",
    download: "Download for Linux",
    source: "View on GitHub",
    version: "Latest release · v1.0.0 · AppImage",
    compatibility: "Works with Steam Input",
    heroLabel: "PS5 DualSense + Steam Input",
    heroStatus: "Everything is configured",
    heroAction: "Check again",
    heroHint: "Restart Steam if you just connected the controller.",
    whyEyebrow: "Less setup. More play.",
    whyTitle: "The missing link between your controller and Steam.",
    whyDescription:
      "Steam Input is powerful, but Linux sometimes needs a little help. Steam Input Setup takes care of the udev rules so your DualSense is recognized the way it should be.",
    features: [
      {
        title: "One-click setup",
        body: "A clear visual check tells you what is ready and what needs attention.",
      },
      {
        title: "Made for Linux",
        body: "Installs the right Steam Input udev rules without changing anything else.",
      },
      {
        title: "Safe by design",
        body: "Only touches the files needed for controller compatibility, with admin access when required.",
      },
    ],
    stepsEyebrow: "From download to game",
    stepsTitle: "Three steps. Zero guesswork.",
    steps: [
      ["01", "Download", "Grab the AppImage and make it executable."],
      ["02", "Connect", "Plug in your DualSense or connect it over Bluetooth."],
      ["03", "Play", "Run the setup, restart Steam, and jump into your game."],
    ],
    ctaTitle: "Make your DualSense feel at home on Linux.",
    ctaBody: "Free, open source, and ready when you are.",
    cta: "Get the latest release",
    footerText: "Steam Input Setup for Linux",
    footerLicense: "Open source under GPL-2.0",
  },
  es: {
    navDownload: "Descargar",
    navHow: "Cómo funciona",
    navOpenSource: "Código abierto",
    eyebrow: "Utilidad open source para Linux",
    title: "Tu DualSense.\nListo para Steam.",
    description:
      "Un pequeño asistente que corrige la compatibilidad del DualSense de PS5 con juegos de Steam en Linux. Sin rituales en la terminal: conecta, configura y juega.",
    download: "Descargar para Linux",
    source: "Ver en GitHub",
    version: "Última versión · v1.0.0 · AppImage",
    compatibility: "Funciona con Steam Input",
    heroLabel: "PS5 DualSense + Steam Input",
    heroStatus: "Todo está configurado",
    heroAction: "Comprobar de nuevo",
    heroHint: "Reinicia Steam si acabas de conectar el mando.",
    whyEyebrow: "Menos configuración. Más juego.",
    whyTitle: "El enlace que faltaba entre tu mando y Steam.",
    whyDescription:
      "Steam Input es potente, pero Linux a veces necesita una pequeña ayuda. Steam Input Setup se encarga de las reglas udev para que tu DualSense sea reconocido como debe.",
    features: [
      {
        title: "Configuración en un clic",
        body: "Una comprobación visual te muestra qué está listo y qué necesita atención.",
      },
      {
        title: "Hecho para Linux",
        body: "Instala las reglas udev correctas de Steam Input sin modificar nada más.",
      },
      {
        title: "Seguro por diseño",
        body: "Solo toca los archivos necesarios y pide permisos de administrador cuando hace falta.",
      },
    ],
    stepsEyebrow: "De la descarga al juego",
    stepsTitle: "Tres pasos. Cero dudas.",
    steps: [
      ["01", "Descarga", "Baja el AppImage y dale permisos de ejecución."],
      ["02", "Conecta", "Conecta tu DualSense por cable o Bluetooth."],
      ["03", "Juega", "Ejecuta el setup, reinicia Steam y entra en tu juego."],
    ],
    ctaTitle: "Haz que tu DualSense se sienta como en casa en Linux.",
    ctaBody: "Gratis, open source y listo cuando tú lo estés.",
    cta: "Descargar última versión",
    footerText: "Steam Input Setup para Linux",
    footerLicense: "Código abierto bajo GPL-2.0",
  },
} as const;

export type Language = keyof typeof translations;
