<template>
  <GridCard class="group relative row-span-2 text-start cursor-pointer">
    <p class="after:block inline-block after:bottom-0 after:left-0 z-10 after:absolute relative after:bg-current after:w-0 group-hover:after:w-full after:h-0.5 font-bold text-2xl lg:text-3xl uppercase after:transition-width duration-300 after:duration-300 transform">
      portfolio
    </p>
    <div class="-right-10 -bottom-18 z-0 absolute">
      <IconsBriefcase />
    </div>
  </GridCard>
</template>

<script setup lang="ts">
import IconsBriefcase from '~/components/icons/Briefcase.vue'
</script>