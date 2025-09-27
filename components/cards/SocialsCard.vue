<template>
  <GridCard class="group relative row-span-3">
    <div class="z-10 relative flex flex-col justify-center items-end space-y-3 pr-4 size-full">
      <a
        v-for="social in socials"
        :key="social.name"
        class="after:block after:right-0 after:bottom-0 after:absolute relative after:bg-current after:w-0 hover:after:w-full after:h-px font-thin text-lg lg:text-xl after:transition-width duration-300 after:duration-300 transform"
        :href="social.url"
        target="_blank"
      >
        <p>{{ social.name }}</p>
      </a>
    </div>
    <div class="bottom-10 -left-12 z-0 absolute">
      <IconsSocials />
    </div>
  </GridCard>
</template>

<script setup lang="ts">
import IconsSocials from '~/components/icons/Socials.vue'
import { socials } from '~/data'
</script>