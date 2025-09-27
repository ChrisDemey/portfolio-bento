<template>
  <div class="flex lg:flex-row flex-col lg:space-x-6 bg-light/10 backdrop-blur-2xl mb-4 p-3 border border-medium-gray rounded-xl h-auto lg:h-48 overflow-hidden">
    <!-- Project image -->
    <component
      :is="project.link ? 'a' : 'div'"
      :href="project.link"
      :target="project.link ? '_blank' : undefined"
      class="rounded-lg w-full lg:w-1/2 aspect-video overflow-hidden"
      :class="{ 'scale-100 hover:scale-102 transition': project.link }"
    >
      <img
        :src="project.image"
        :alt="project.name"
        class="size-full object-cover"
        loading="lazy"
      />
    </component>

    <!-- Project details -->
    <div class="flex flex-col justify-start mt-4 lg:mt-0 pr-2 w-full lg:w-1/2 overflow-y-auto">
      <div class="flex justify-between items-start mb-2">
        <h3 class="font-medium text-xl uppercase tracking-wider">
          {{ project.name }}
        </h3>

        <!-- Project type badge -->
        <span
          class="px-2 py-1 rounded text-xs uppercase tracking-wide"
          :class="projectTypeBadgeClass"
        >
          {{ project.type }}
        </span>
      </div>

      <p class="font-light text-justify tracking-wide leading-relaxed">
        {{ project.description }}
      </p>

      <!-- External link indicator -->
      <div v-if="project.link" class="flex items-center mt-2 text-sm text-light/70">
        <Icon name="ph:arrow-square-out" class="mr-1 w-4 h-4" />
        Voir le site
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
}

const props = defineProps<Props>()

const projectTypeBadgeClass = computed(() => {
  return props.project.type === 'SaaS'
    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
    : 'bg-green-500/20 text-green-300 border border-green-500/30'
})
</script>