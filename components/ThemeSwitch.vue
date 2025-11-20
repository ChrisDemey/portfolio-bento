<template>
  <div class="flex items-center space-x-3">
    <!-- Icône Moon (Dark Mode) -->
    <Icon 
      name="heroicons:moon-20-solid"
      class="text-light-gray dark:text-light-gray-dark transition-opacity"
      size="18"
    />
    
    <!-- Switch Toggle -->
    <button
      @click="toggle"
      class="inline-flex relative items-center bg-light-gray dark:bg-light-gray-dark focus:ring-opacity-50 rounded-full focus:outline-none w-12 h-6 transition-colors duration-200 ease-in-out cursor-pointer"
      :aria-label="modelValue ? 'Activer le mode clair' : 'Activer le mode sombre'"
    >
      <span
        class="inline-block bg-surface dark:bg-surface-dark shadow-lg rounded-full size-4 transition-all duration-200 ease-in-out transform"
        :class="modelValue ? 'translate-x-1' : 'translate-x-7'"
      ></span>
    </button>
    
    <!-- Icône Sun (Light Mode) -->
    <Icon 
      name="heroicons:sun-20-solid"
      class="text-light-gray dark:text-light-gray-dark transition-opacity"
      size="22"
    />
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Le thème est géré par le composant parent

const toggle = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
};
</script>
