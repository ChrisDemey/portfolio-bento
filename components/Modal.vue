<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-dark flex items-center justify-center z-50 p-4"
        @click="closeModal"
      >
        <div
          class="relative w-full max-w-2xl max-h-[90vh] text-light overflow-y-auto px-4 sm:px-8 pb-6 sm:pb-8 pt-10 sm:pt-12"
          @click.stop
        >
          <button
            class="absolute top-3 right-3 sm:top-4 sm:right-4 text-light hover:text-light/80 transition-colors"
            @click="closeModal"
          >
            <span class="sr-only">Fermer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-8 sm:size-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
