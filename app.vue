<template>
  <div
    class="h-screen font-montserrat w-full flex items-center bg-dark text-light justify-center"
  >
    <div class="w-full max-w-6xl space-x-12 aspect-video flex">
      <!-- gauche -->
      <section class="w-1/2">
        <div class="relative px-6 flex size-full items-center justify-center">
          <div class="relative z-10 uppercase">
            <h1 class="pr-1 -mb-1 font-thin text-4xl tracking-widest text-end">
              chriswave
            </h1>
            <h2 class="font-bold leading-13 text-end text-6xl tracking-widest">
              développeur web
            </h2>
            <h3
              class="px-2 tracking-wider text-3xl font-thin mt-4 text-justify"
            >
              mon travail est d'aider les gens en leur créant des sites web &
              des solutions digitales
            </h3>
          </div>
          <div class="px-12 absolute z-0 opacity-30 bg-cover bg-center">
            <img
              src="./public/assets/Chriswave_logo.png"
              alt="chriswave_logo"
            />
          </div>
        </div>
      </section>
      <!-- droite -->
      <section class="w-1/2 h-full">
        <div class="grid size-full grid-cols-4 grid-rows-6 gap-4">
          <!-- Portoflio -->
          <grid-card
            class="group cursor-pointer relative col-span-2 row-span-2"
          >
            <p
              class="inline-block relative after:absolute after:block after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:transition-width after:duration-300 group-hover:after:w-full z-10 uppercase font-bold text-3xl"
            >
              portfolio
            </p>
            <div class="absolute z-0 -right-10 -bottom-14">
              <icons-portfolio />
            </div>
          </grid-card>
          <!-- Contact -->
          <a
            class="relative group col-span-2 row-span-3"
            href="mailto:demey.christophe.dc@gmail.com"
          >
            <grid-card>
              <p
                class="relative z-10 pl-2 uppercase font-bold text-3xl text-end"
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
            </grid-card>
          </a>
          <!-- Why code ? -->
          <grid-card
            class="group cursor-pointer relative col-span-2 flex items-end row-span-3"
          >
            <div class="relative z-10 uppercase w-2/3 font-thin text-2xl">
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
          <grid-card
            class="relative col-span-2 row-span-3 flex flex-col justify-center space-y-3 items-end"
          >
            <a
              v-for="social in socials"
              :key="social.name"
              class="relative z-10 font-thin text-xl after:absolute after:block after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-current after:transition-width after:duration-300 hover:after:w-full"
              :href="social.url"
              target="_blank"
            >
              {{ social.name }}
            </a>
            <div class="absolute z-0 -left-16">
              <icons-socials />
            </div>
          </grid-card>
          <!-- Language & Theme -->
          <grid-card class="col-span-2 divide-x row-span-1 flex">
            <div class="w-1/2 pl-2 flex items-center justify-start">
              <LanguageSwitch v-model="locale" />
            </div>
            <div class="w-1/2 flex items-center justify-end">
              <ThemeSwitch v-model="isDark" />
            </div>
          </grid-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chrisdemey/",
  },
  {
    name: "Malt",
    url: "https://github.com/chrisdemey",
  },
  {
    name: "TikTok",
    url: "https://twitter.com/chrisdemey",
  },
  {
    name: "Youtube",
    url: "https://www.instagram.com/chrisdemey/",
  },
  {
    name: "Github",
    url: "https://github.com/chrisdemey",
  },
  {
    name: "Mail",
    url: "https://www.youtube.com/channel/UC9-rYyUMsnEBK8G8fCyrXXA",
  },
];

const locale = ref("fr");
const isDark = ref(true);
</script>
