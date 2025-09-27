<template>
  <GridCard class="flex lg:flex-row flex-col row-span-1">
    <div class="flex justify-center items-center size-full">
      <ThemeSwitch v-model="isDark" />
    </div>
    <!-- Future: Language switch could be added here
    <div class="flex justify-center lg:justify-start items-center py-2 lg:py-0 lg:pl-2 w-full lg:w-1/2">
      <LanguageSwitch v-model="locale" />
    </div>
    -->
  </GridCard>
</template>

<script setup lang="ts">
const isDark = ref(true)
</script>