interface SeoConfig {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
  keywords?: string[]
}

export const useSeo = () => {
  const defaultSeo: SeoConfig = {
    title: "Chriswave | Web Dev",
    ogTitle: "Chriswave | Développeur web freelance",
    description: "Développeur web freelance – Création de sites web sur-mesure, modernes et performants.",
    ogDescription: "Besoin d'un site web unique? Chriswave, développeur freelance, crée votre solution digitale sur-mesure!",
    ogImage: "/assets/Chriswave_logo.png",
    twitterCard: "summary_large_image",
    keywords: ["développeur web", "freelance", "sites web", "nuxt", "vue", "typescript"]
  }

  const setSeoMeta = (config: SeoConfig = {}) => {
    const seoConfig = { ...defaultSeo, ...config }

    useSeoMeta({
      title: seoConfig.title,
      ogTitle: seoConfig.ogTitle,
      titleTemplate: "%s",
      description: seoConfig.description,
      ogDescription: seoConfig.ogDescription,
      ogImage: seoConfig.ogImage,
      twitterCard: seoConfig.twitterCard,
      keywords: seoConfig.keywords?.join(", ")
    })
  }

  const setPageSeo = (page: 'home' | 'portfolio' | 'contact' | 'about') => {
    const pageConfigs = {
      home: {
        title: "Chriswave | Développeur Web Freelance",
        description: "Développeur web freelance spécialisé dans la création de sites web modernes et performants avec Vue.js, Nuxt.js et TypeScript.",
        keywords: ["développeur web", "freelance", "portfolio", "vue.js", "nuxt.js"]
      },
      portfolio: {
        title: "Portfolio | Chriswave",
        description: "Découvrez mes réalisations : sites web, applications SaaS et solutions digitales créées pour mes clients.",
        keywords: ["portfolio", "projets web", "réalisations", "sites web", "saas"]
      },
      contact: {
        title: "Contact | Chriswave",
        description: "Contactez-moi pour discuter de votre projet web. Devis gratuit et réponse rapide garantie.",
        keywords: ["contact", "devis", "projet web", "développement"]
      },
      about: {
        title: "À propos | Chriswave",
        description: "Découvrez mon parcours, mes compétences et ma passion pour le développement web moderne.",
        keywords: ["à propos", "développeur", "compétences", "parcours"]
      }
    }

    setSeoMeta(pageConfigs[page])
  }

  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Christophe Demey",
      alternateName: "Chriswave",
      url: "https://chriswave.be",
      image: "/assets/Chriswave_logo.png",
      jobTitle: "Développeur Web Freelance",
      worksFor: {
        "@type": "Organization",
        name: "Chriswave"
      },
      sameAs: [
        "https://github.com/ChrisDemey",
        "https://linkedin.com/in/christophe-demey/",
        "https://fr.malt.be/profile/christophedemey"
      ],
      knowsAbout: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Web Development",
        "Frontend Development"
      ]
    }
  }

  const setJsonLd = (data: object) => {
    useJsonld(data)
  }

  return {
    // Configuration par défaut
    defaultSeo,

    // Méthodes principales
    setSeoMeta,
    setPageSeo,

    // Données structurées
    generateStructuredData,
    setJsonLd
  }
}