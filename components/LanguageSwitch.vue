<template>
  <div class="flex items-center space-x-2 sm:space-x-2">
    <span class="text-sm sm:text-sm font-thin">FR</span>
    <button
      @click="toggle"
      class="cursor-pointer relative bg-light inline-flex h-5 sm:h-5 w-8 sm:w-8 items-center rounded-full"
    >
      <span
        class="inline-block size-4 sm:size-4 transform rounded-full bg-card-dark transition"
        :class="modelValue === 'fr' ? 'translate-x-0.5' : 'translate-x-3.5'"
      ></span>
    </button>
    <span class="text-sm sm:text-sm font-thin">EN</span>
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
