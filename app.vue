<template>
  <div
    class="min-h-screen font-montserrat flex items-center justify-center w-full bg-dark text-light-gray"
  >
    <div
      class="w-full max-w-6xl h-full mx-auto flex flex-col lg:flex-row lg:space-x-12 lg:aspect-video lg:items-center"
    >
      <!-- gauche -->
      <section
        class="w-full lg:w-1/2 h-screen lg:h-auto flex items-center justify-center"
      >
        <div
          class="relative px-6 flex flex-col size-full items-center justify-center"
        >
          <div class="relative z-10 uppercase">
            <h1
              class="pr-1 mb-2 lg:-mb-1 font-thin text-3xl lg:text-4xl tracking-widest text-center lg:text-end"
            >
              chriswave
            </h1>
            <h2
              class="font-bold lg:leading-13 text-center lg:text-end text-4xl lg:text-6xl tracking-widest"
            >
              développeur web
            </h2>
            <h3
              class="px-2 tracking-wider text-xl lg:text-3xl font-thin mt-4 text-justify"
            >
              mon travail est d'aider les gens en leur créant des sites web &
              des solutions digitales
            </h3>
          </div>
          <div class="px-12 absolute z-0 opacity-40 bg-cover bg-center">
            <img
              src="./public/assets/Chriswave_logo.png"
              alt="chriswave_logo"
              class="w-full h-auto"
            />
          </div>
          <!-- Flèche animée pour mobile -->
          <div class="flex justify-center mt-12 -mb-20 lg:hidden">
            <svg
              class="cursor-pointer rounded-full border-2 w-8 h-8 text-current animate-bounce"
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
        class="w-full p-4 lg:p-0 lg:w-1/2 lg:h-full h-screen grid grid-cols-2 grid-rows-6 gap-4"
      >
        <!-- Modal for Portfolio -->
        <Modal :is-open="portoflioModal" @close="portoflioModal = false">
          <div class="lg:grid lg:grid-cols-4 gap-4">
            <!-- Modèles de sites -->
            <div
              class="col-span-1 lg:col-span-4 bg-light-gray mt-4 rounded-2xl p-3"
            >
              <h2
                class="text-2xl lg:text-3xl text-dark text-center font-bold tracking-wider uppercase mb-6"
              >
                Modèles de sites
              </h2>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <a
                  v-for="model in websitesModels"
                  :key="model.name"
                  href=""
                  target="_blank"
                  class="group relative aspect-video"
                >
                  <div
                    class="rounded-xl group-hover:shadow-lg shadow-teal-500/50 absolute z-0 size-full bg-gradient-to-b from-[#F472B6] to-[#5EEAD4] to-75%"
                  />
                  <div
                    class="z-10 absolute transform duration-300 group-hover:p-1.5 size-full"
                  >
                    <div
                      class="group-hover:border-0 border transform duration-300 border-medium-gray text-light-gray overflow-hidden relative flex items-center justify-center group-hover:rounded-lg rounded-xl bg-card-dark size-full"
                    >
                      <div class="z-10 text-center">
                        <h3 class="text-3xl tracking-wider font-bold uppercase">
                          {{ model.name }}
                        </h3>
                        <p class="tracking-widest">
                          {{ model.description }}
                        </p>
                      </div>
                      <component
                        class="z-0 absolute -right-10 -bottom-10"
                        :is="model.icon"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <!-- séparateur -->
            <div
              class="mt-4 mb-2 col-span-4 h-px bg-gradient-to-r from-transparent via-light to-transparent"
            />

            <!-- Projets en société -->
            <div class="col-span-1 lg:col-span-4 space-y-4">
              <h2
                class="text-2xl lg:text-3xl text-center font-bold mb-4 tracking-wider uppercase"
              >
                Projets en société
              </h2>
              <h1
                class="pl-5 text-3xl lg:text-4xl font-thin tracking-widest uppercase mb-2 font"
              >
                alstom
              </h1>

              <!-- Projets -->
              <div
                v-for="project in projects"
                :key="project.name"
                class="h-auto lg:h-48 flex flex-col lg:flex-row lg:space-x-6 p-3 bg-card-dark border border-medium-gray rounded-xl overflow-hidden"
              >
                <div class="w-full lg:w-1/2 aspect-video overflow-hidden">
                  <img
                    :src="project.image"
                    :alt="project.name"
                    class="rounded-lg object-cover size-full"
                  />
                </div>
                <div
                  class="overflow-y-auto pr-2 w-full lg:w-1/2 flex flex-col justify-start mt-4 lg:mt-0"
                >
                  <h3 class="text-xl tracking-wider font-medium uppercase">
                    {{ project.name }}
                  </h3>
                  <p class="text-justify tracking-wide font-light">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <!-- Modal for why dev -->
        <Modal :is-open="whyDevModal" @close="whyDevModal = false">
          <div
            class="mt-8 text-lg lg:text-2xl lg:leading-normal leading-6 font-extralight lg:tracking-wide text-justify rounded-xl py-3 px-5"
          >
            <p class="*:font-medium">
              Les plateformes no-code simplifient la création de sites, mais
              elles
              <span class="text-red-500">limitent la créativité</span>: designs
              génériques, difficultés pour ajouter des fonctionnalités
              spécifiques, risques de <span class="text-red-500">lenteur</span>.
              Un développeur web, lui, crée un site sur mesure:
              <span class="text-emerald-500">fluide, sécurisé et évolutif</span
              >. Il intègre vos idées sans dépendre à des modules préconçus.
            </p>
            <div
              class="mt-6 mb-4 col-span-4 h-px bg-gradient-to-r from-transparent via-light to-transparent"
            />
            <p class="*:font-medium">
              Le no-code semble économique, mais à long terme, la
              <span class="text-red-500">dépendance</span> à une plateforme
              externe limite vos ambitions et génère des coûts cachés. Avec un
              développeur, vous investissez dans un outil scalable,
              <span class="text-emerald-500">entièrement personnalisable</span>
              et maîtrisé. <br />
              L'avantage clé ? Un
              <span class="text-emerald-500">projet pérenne</span> qui vous
              permet de besoins réels, sans frustrations techniques.
            </p>
          </div>
        </Modal>
        <!-- Portoflio -->
        <grid-card
          class="group cursor-pointer relative row-span-2 text-start"
          @click="portoflioModal = true"
        >
          <p
            class="group-hover:-mt-1.5 group-hover:-ml-1.5 transform duration-300 inline-block relative after:absolute after:block after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-width after:duration-300 group-hover:after:w-full z-10 uppercase font-bold text-2xl lg:text-3xl"
          >
            portfolio
          </p>
          <div class="absolute z-0 -right-10 -bottom-14">
            <icons-portfolio />
          </div>
        </grid-card>
        <!-- Contact -->
        <grid-card class="relative group row-span-3">
          <a
            class="overflow-hidden"
            href="mailto:demey.christophe.dc@gmail.com"
          >
            <p
              class="group-hover:-mt-1.5 group-hover:-mr-1.5 transform duration-300 relative z-10 pl-2 uppercase font-bold text-2xl lg:text-3xl text-end"
            >
              <span
                class="relative after:absolute after:block after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-width after:duration-300 group-hover:after:w-full"
                >discutons</span
              >
              de votre projet
            </p>
            <div class="absolute z-0 left-0 -bottom-3">
              <icons-contact />
            </div>
          </a>
        </grid-card>
        <!-- Why code ? -->
        <grid-card
          @click="whyDevModal = true"
          class="group cursor-pointer relative row-span-3"
        >
          <div
            class="group-hover:-ml-1.5 group-hover:-mb-1.5 transform duration-300 absolute bottom-2 z-10 uppercase w-1/2 font-thin text-xl lg:text-2xl"
          >
            <span
              class="relative after:absolute after:block after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:transition-width after:duration-300 group-hover:after:w-full"
              >pourquoi</span
            >
            faire appel à un dev ?
          </div>
          <div class="absolute z-0 -right-16 top-0">
            <icons-why />
          </div>
        </grid-card>
        <!-- Socials -->
        <grid-card class="group relative row-span-3">
          <div
            class="flex space-y-3 flex-col size-full items-end justify-center pr-4 relative z-10"
          >
            <a
              v-for="social in socials"
              :key="social.name"
              class="font-thin text-lg group-hover:-mr-1.5 transform duration-300 relative lg:text-xl after:absolute after:block after:w-0 after:h-px after:bottom-0 after:right-0 after:bg-current after:transition-width after:duration-300 hover:after:w-full"
              :href="social.url"
              target="_blank"
            >
              <p>
                {{ social.name }}
              </p>
            </a>
          </div>
          <div class="absolute z-0 bottom-8 -left-20">
            <icons-socials />
          </div>
        </grid-card>
        <!-- Language & Theme -->
        <grid-card class="row-span-1 flex flex-col lg:flex-row">
          <div class="size-full flex items-center justify-center">
            <ThemeSwitch v-model="isDark" />
          </div>
          <!-- <div
              class="w-full lg:w-1/2 lg:pl-2 flex items-center justify-center lg:justify-start py-2 lg:py-0"
            >
              <LanguageSwitch v-model="locale" />
            </div>
            <div
              class="w-full lg:w-1/2 flex items-center justify-center lg:pr-1 lg:justify-end py-2 lg:py-0"
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

const portoflioModal = ref(false);
const whyDevModal = ref(false);

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

const projects = [
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
];

const websitesModels = [
  {
    name: "One Page",
    description: "Minimaliste et efficace.",
    icon: IconsOnepage,
  },
  {
    name: "Multi Pages",
    description: "Complet et structuré.",
    icon: IconsMultipage,
  },
];

const locale = ref("fr");
const isDark = ref(true);
</script>
