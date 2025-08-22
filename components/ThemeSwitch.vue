<template>
  <div class="flex items-center space-x-3">
    <!-- Icône Moon (Dark Mode) -->
    <Icon 
      name="heroicons:moon-20-solid"
      class="text-light-gray transition-opacity"
      size="18"
    />
    
    <!-- Switch Toggle -->
    <button
      @click="toggle"
      class="inline-flex relative items-center bg-light-gray focus:ring-opacity-50 rounded-full focus:outline-none w-12 h-6 transition-colors duration-200 ease-in-out"
      :aria-label="modelValue ? 'Activer le mode clair' : 'Activer le mode sombre'"
    >
      <span
        class="inline-block bg-card-dark shadow-lg rounded-full size-4 transition-all duration-200 ease-in-out transform"
        :class="modelValue ? 'translate-x-1' : 'translate-x-7'"
      ></span>
    </button>
    
    <!-- Icône Sun (Light Mode) -->
    <Icon 
      name="heroicons:sun-20-solid"
      class="text-light-gray transition-opacity"
      size="22"
    />
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
