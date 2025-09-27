<template>
  <GridCard class="group relative row-span-3 cursor-pointer">
    <div class="bottom-4 z-10 absolute w-[80%] font-thin text-xl lg:text-2xl uppercase duration-300 transform">
      Mes
      <span class="after:block after:bottom-0 after:left-0 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-px after:transition-width after:duration-300">
        modèles
      </span>
      de site web
    </div>
    <div class="top-0 -right-12 z-0 absolute">
      <IconsModels />
    </div>
  </GridCard>
</template>

<script setup lang="ts">
import IconsModels from '~/components/icons/Models.vue'
</script>