<template>
  <Modal :is-open="modelsModal" @close="closeModelsModal">
    <div class="bg-light-gray/80 dark:bg-light-gray-dark/80 backdrop-blur-lg mx-auto mt-4 px-3 pt-6 pb-3 rounded-2xl w-full max-w-4xl">
      <h2 class="mb-4 lg:mb-6 font-bold text-background dark:text-background-dark text-xl sm:text-2xl lg:text-3xl text-center uppercase tracking-wider">
        Modèles de base
      </h2>

      <div class="gap-3 lg:gap-4 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
        <!-- Available models -->
        <a
          v-for="model in websitesModels"
          :key="model.name"
          :href="model.link"
          target="_blank"
          class="group relative aspect-video"
        >
          <div class="z-0 absolute bg-gradient-to-b from-[#F472B6] to-[#5EEAD4] to-75% shadow-teal-500/50 group-hover:shadow-lg rounded-xl size-full" />

          <div class="z-10 absolute group-hover:p-1.5 size-full duration-300 transform">
            <div class="relative flex justify-center items-center bg-surface dark:bg-surface-dark rounded-xl group-hover:rounded-lg size-full overflow-hidden text-light-gray dark:text-light-gray-dark duration-300 transform">
              <div class="z-10 px-2 sm:px-4 text-center">
                <h3 class="font-bold text-3xl uppercase tracking-wider">
                  {{ model.name }}
                </h3>
                <p class="lg:mt-2 tracking-widest">
                  {{ model.description }}
                </p>
              </div>
              <component
                class="-right-2 -bottom-10 z-0 absolute w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24"
                :is="model.icon"
              />
            </div>
          </div>
        </a>

        <!-- Coming soon: Bento box model -->
        <div class="relative col-span-1 sm:col-span-2 bg-surface dark:bg-surface-dark opacity-20 rounded-xl size-full aspect-video lg:aspect-auto overflow-hidden text-light-gray dark:text-light-gray-dark transition cursor-not-allowed">
          <div class="z-10 relative flex flex-col justify-center items-center w-full lg:w-2/3 h-full">
            <h3 class="font-bold text-3xl uppercase tracking-wider">
              Bento box
            </h3>
            <p class="mt-2 text-center tracking-widest">
              Plus moderne, plus personnel
            </p>
          </div>
          <div class="right-0 bottom-0 z-0 absolute flex justify-end items-center size-full">
            <Icon class="text-medium-gray dark:text-medium-gray-dark" size="200" name="ic:round-bento" />
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { websitesModels } from '~/data'

const { modelsModal, closeModelsModal } = useModals()
</script>