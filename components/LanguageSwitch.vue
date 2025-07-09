<template>
  <div class="flex items-center space-x-2 sm:space-x-2">
    <span class="font-thin text-sm sm:text-sm">FR</span>
    <button
      @click="toggle"
      class="inline-flex relative items-center bg-light rounded-full w-8 sm:w-8 h-5 sm:h-5 cursor-pointer"
    >
      <span
        class="inline-block bg-card-dark rounded-full size-4 sm:size-4 transition transform"
        :class="modelValue === 'fr' ? 'translate-x-0.5' : 'translate-x-3.5'"
      ></span>
    </button>
    <span class="font-thin text-sm sm:text-sm">EN</span>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    validator: (value) => ["fr", "en"].includes(value),
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", props.modelValue === "fr" ? "en" : "fr");
};
</script>
