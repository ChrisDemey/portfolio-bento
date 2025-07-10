<template>
  <div
    class="relative flex justify-center items-center bg-dark w-full min-h-screen font-montserrat text-light-gray"
  >
    <div class="z-0 absolute inset-0 opacity-70 background--custom" />
    <div class="z-5 absolute inset-0 bg-radial from-dark via-dark/70 to-transparent" />
    <img
      src="/assets/Chriswave_logo.png"
      alt="chriswave_logo"
      class="top-7 z-10 absolute size-20 object-cover"
    />
    <div
      class="z-10 relative flex lg:flex-row flex-col lg:items-center lg:space-x-12 mx-auto w-full max-w-6xl h-full lg:aspect-video"
    >
      <!-- gauche -->
      <section
        class="flex justify-center items-center w-full lg:max-w-1/2 lg:h-full"
      >
        <div
          class="relative flex flex-col justify-start items-center"
        >
          <div class="z-10 relative w-full uppercase">
            <h1
              class="font-thin text-3xl lg:text-4xl text-center lg:text-end tracking-widest"
            >
              développeur web
            </h1>
            <h2
              class="font-bold text-4xl lg:text-8xl text-center lg:text-end"
            >
              Chriswave
            </h2>
            <h3
              class="mt-4 lg:pr-2 font-thin text-xl lg:text-3xl text-center lg:text-end leading-10 tracking-widest"
            >
              Création de <span class="font-bold">sites web</span> et <span class="font-bold">solutions digitales</span> (SaaS)
            </h3>
          </div>
          <!-- Flèche animée pour mobile -->
          <div class="lg:hidden right-0 bottom-0 left-0 absolute flex justify-center mt-12 -mb-20">
            <svg
              class="border-2 rounded-full w-8 h-8 text-current animate-bounce cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click="scrollToBento"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </div>
        </div>
      </section>

      <!-- droite -->
      <section
        id="bento-section"
        class="gap-4 grid grid-cols-2 grid-rows-6 p-4 lg:p-0 w-full lg:max-w-1/2 h-screen lg:h-full"
      >
        <!-- Modal for Portfolio -->
        <Modal :is-open="portoflioModal" @close="portoflioModal = false">
          <div class="gap-8 lg:gap-4 grid lg:grid-cols-4">
            <div v-for="company in projectsByCompany" :key="company.company" class="col-span-1 lg:col-span-4">
                <h1
                  class="mb-2 pl-5 font-thin text-3xl uppercase tracking-widest"
                >
                  {{ company.company }}
                </h1>
                <div
                  v-for="project in company.projects"
                  :key="project.name"
                  class="flex lg:flex-row flex-col lg:space-x-6 bg-card-dark mb-4 p-3 border border-medium-gray rounded-xl h-auto lg:h-48 overflow-hidden"
                >
                  <a v-if="project.link" :href="project.link" target="_blank" class="w-full lg:w-1/2 aspect-video overflow-hidden scale-100 hover:scale-102 transition">
                    <img
                      :src="project.image"
                      :alt="project.name"
                      class="rounded-lg size-full object-cover"
                    />
                  </a>
                  <div v-else class="w-full lg:w-1/2 aspect-video overflow-hidden">
                    <img
                      :src="project.image"
                      :alt="project.name"
                      class="rounded-lg size-full object-cover"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-start mt-4 lg:mt-0 pr-2 w-full lg:w-1/2 overflow-y-auto"
                  >
                    <h3 class="font-medium text-xl uppercase tracking-wider">
                      {{ project.name }}
                    </h3>
                    <p class="font-light text-justify tracking-wide">
                      {{ project.description }}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </Modal>
        <!-- Modal for models -->
        <Modal :is-open="modelsModal" @close="modelsModal = false">
          <div
              class="col-span-1 lg:col-span-4 bg-light-gray mt-4 px-3 pt-6 pb-3 rounded-2xl"
            >
              <h2
                class="mb-6 font-bold text-dark text-2xl lg:text-3xl text-center uppercase tracking-wider"
              >
                Modèles de base
              </h2>
              <div class="gap-6 grid grid-cols-1 lg:grid-cols-2">
                <a
                  v-for="model in websitesModels"
                  :key="model.name"
                  :href="model.link"
                  target="_blank"
                  class="group relative aspect-video"
                >
                  <div
                    class="z-0 absolute bg-gradient-to-b from-[#F472B6] to-[#5EEAD4] to-75% shadow-teal-500/50 group-hover:shadow-lg rounded-xl size-full"
                  />
                  <div
                    class="z-10 absolute group-hover:p-1.5 size-full duration-300 transform"
                  >
                    <div
                      class="relative flex justify-center items-center bg-card-dark border border-medium-gray group-hover:border-0 rounded-xl group-hover:rounded-lg size-full overflow-hidden text-light-gray duration-300 transform"
                    >
                      <div class="z-10 text-center">
                        <h3 class="font-bold text-3xl uppercase tracking-wider">
                          {{ model.name }}
                        </h3>
                        <p class="tracking-widest">
                          {{ model.description }}
                        </p>
                      </div>
                      <component
                        class="-right-2 -bottom-10 z-0 absolute"
                        :is="model.icon"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </Modal>
        <!-- Portoflio -->
        <grid-card
          class="group relative row-span-2 text-start cursor-pointer"
          @click="portoflioModal = true"
        >
          <p
            class="after:block inline-block after:bottom-0 after:left-0 z-10 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-0.5 font-bold text-2xl lg:text-3xl uppercase after:transition-width duration-300 after:duration-300 transform"
          >
            portfolio
          </p>
          <div class="-right-10 -bottom-18 z-0 absolute">
            <icons-briefcase />
          </div>
        </grid-card>
        <!-- Discutons de votre projet -->
        <grid-card class="group relative row-span-3">
          <a
            class="overflow-hidden"
            href="mailto:demey.christophe.dc@gmail.com"
          >
            <p
              class="z-10 relative pl-2 font-bold text-2xl lg:text-3xl text-end uppercase duration-300 transform"
            >
              <span
                class="after:block after:bottom-0 after:left-0 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-0.5 after:transition-width after:duration-300"
                >discutons</span
              >
              de votre projet
            </p>
            <div class="-bottom-12 -left-0 z-0 absolute">
              <icons-contact />
            </div>
          </a>
        </grid-card>
        <!-- Modèles de site -->
        <grid-card
          @click="modelsModal = true"
          class="group relative row-span-3 cursor-pointer"
        >
          <div
            class="bottom-4 z-10 absolute w-[80%] font-thin text-xl lg:text-2xl uppercase duration-300 transform"
          > Mes
            <span
              class="after:block after:bottom-0 after:left-0 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-px after:transition-width after:duration-300"
              >modèles</span
            >
            de site web
          </div>
          <div class="top-0 -right-12 z-0 absolute">
            <icons-models />
          </div>
        </grid-card>
        <!-- Socials -->
        <grid-card class="group relative row-span-3">
          <div
            class="z-10 relative flex flex-col justify-center items-end space-y-3 pr-4 size-full"
          >
            <a
              v-for="social in socials"
              :key="social.name"
              class="after:block after:right-0 after:bottom-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-px font-thin text-lg lg:text-xl after:transition-width duration-300 after:duration-300 transform"
              :href="social.url"
              target="_blank"
            >
              <p>
                {{ social.name }}
              </p>
            </a>
          </div>
          <div class="bottom-10 -left-12 z-0 absolute">
            <icons-socials />
          </div>
        </grid-card>
        <!-- Language & Theme -->
        <grid-card class="flex lg:flex-row flex-col row-span-1">
          <div class="flex justify-center items-center size-full">
            <ThemeSwitch v-model="isDark" />
          </div>
          <!-- <div
              class="flex justify-center lg:justify-start items-center py-2 lg:py-0 lg:pl-2 w-full lg:w-1/2"
            >
              <LanguageSwitch v-model="locale" />
            </div>
            <div
              class="flex justify-center lg:justify-end items-center py-2 lg:py-0 lg:pr-1 w-full lg:w-1/2"
            >
              <ThemeSwitch v-model="isDark" />
            </div> -->
        </grid-card>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconsOnepage from "./components/icons/Onepage.vue";
import IconsMultipage from "./components/icons/Multipage.vue";

useSeoMeta({
  title: "Chriswave | Web Dev",
  ogTitle: "Chriswave | Développeur web freelance",
  titleTemplate: "%s",
  description:
    "Développeur web freelance – Création de sites web sur-mesure, modernes et performants.",
  ogDescription:
    "Besoin d'un site web unique? Chriswave, développeur freelance, crée votre solution digitale sur-mesure!",
  ogImage: "/assets/Chriswave_logo.png",
  twitterCard: "summary_large_image",
});

const portoflioModal = ref(false);
const modelsModal = ref(false);
const isDark = ref(true);

const scrollToBento = () => {
  const bentoSection = document.getElementById("bento-section");
  bentoSection.scrollIntoView({ behavior: "smooth" });
};

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/christophe-demey/",
  },
  {
    name: "Malt",
    url: "https://fr.malt.be/profile/christophedemey",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@chriswave_dev",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@chriswave_dev",
  },
  {
    name: "Github",
    url: "https://github.com/ChrisDemey",
  },
  {
    name: "Mail",
    url: "mailto:demey.christophe.dc@gmail.com",
  },
];

const projectsByCompany = [
  {
    company: "Alstom",
    projects: [
      {
        name: "Carsharing",
        image: "/assets/carsharing_screenshot.png",
        description:
          "Projet de covoiturage réservés aux employés de l'entreprise. Il permet de créer/partager/rechercher des trajets ainsi que renseigner leur propre voiture ainsi que des destinations fixes.",
      },
      {
        name: "Desksharing",
        image: "/assets/desksharing_screenshot.png",
        description:
          "Projet de partage de bureaux, interne à l'entreprise. Mis en place durant la pandémie de Covid-19, il permet de visualiser la disponibilité des bureaux en temps réel et de les réserver pour des périodes de temps spécifiques.",
      },
    ],
  },
  {
    company: "Nirvana Centre de Bien-Être",
    projects: [
      {
        image: "/assets/nirvana_screenshot.png",
        description:
          "J'ai réalisé ce site vitrine pour un centre de beauté, il s'agissait de concevoir une page d'accueil simple et efficace pour présenter leurs services.",
        link: "https://www.nirvanacentredebienetre.com/"
      }
    ]
  }
];

const websitesModels = [
  {
    name: "One Page",
    description: "Minimaliste et efficace.",
    icon: IconsOnepage,
    link: "https://onepage-model-rho.vercel.app/",
  },
  {
    name: "Multi Pages",
    description: "Complet et structuré.",
    icon: IconsMultipage,
    link: "https://multipage-model.vercel.app/",
  },
];
</script>
