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
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem("theme")
  const shouldBeDark = savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)

  // Appliquer le thème au document
  if (shouldBeDark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  isDark.value = shouldBeDark
})

// Watcher pour gérer les changements de thème
watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
})
</script>