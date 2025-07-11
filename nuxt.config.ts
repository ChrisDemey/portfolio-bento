import tailwindcss from "@tailwindcss/vite";
import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "@nuxtjs/seo"],

  site: {
    url: "https://chriswave.be",
    name: "Chriswave | Web Dev",
  },

  schemaOrg: {
    identity: definePerson({
      // Basic Information
      name: "Chriswave",
      givenName: "Christophe",
      familyName: "Demey",

      // Profile Information
      image: "/assets/Chriswave_logo.png",
      description:
        "Développeur web freelance – Création de sites web sur-mesure, modernes et performants.",
      jobTitle: "Développeur web",

      // Contact & Social
      email: "demey.christophe.dc@gmail.com",
      url: "https://chriswave.be",
      sameAs: [
        "https://github.com/ChrisDemey",
        "https://linkedin.com/in/christophe-demey/",
      ],
    }),
  },
});
