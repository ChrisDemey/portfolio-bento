<template>
  <div class="flex items-center space-x-4">
    <IconsDarkMode class="size-5" />
    <button
      @click="toggle"
      class="cursor-pointer relative bg-light inline-flex h-5 w-8 items-center rounded-full"
      :aria-label="
        modelValue ? 'Activer le mode clair' : 'Activer le mode sombre'
      "
    >
      <span
        class="inline-block size-4 transform rounded-full bg-card-dark transition"
        :class="modelValue ? 'translate-x-0.5' : 'translate-x-3.5'"
      ></span>
    </button>
    <IconsLightMode class="size-5" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Vérifier la préférence de thème au chargement
onMounted(() => {
  // Vérifier le thème stocké dans localStorage
  const savedTheme = localStorage.getItem("theme");

  // Déterminer si le mode sombre devrait être actif
  const shouldBeDark =
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Appliquer le bon thème
  if (shouldBeDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Synchroniser l'état du modelValue avec la valeur sauvegardée
  if (shouldBeDark !== props.modelValue) {
    emit("update:modelValue", shouldBeDark);
  }
});

const toggle = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);

  if (newValue) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
</script>
