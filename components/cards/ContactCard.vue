<template>
  <GridCard class="group relative row-span-3">
    <a class="overflow-hidden" href="mailto:hello@chriswave.be">
      <p class="z-10 relative pl-2 font-bold text-2xl lg:text-3xl text-end uppercase duration-300 transform">
        <span class="after:block after:bottom-0 after:left-0 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-0.5 after:transition-width after:duration-300">
          discutons
        </span>
        de votre projet
      </p>
      <div class="-bottom-12 -left-0 z-0 absolute">
        <IconsContact />
      </div>
    </a>
  </GridCard>
</template>

<script setup lang="ts">
import IconsContact from '~/components/icons/Contact.vue'
</script>