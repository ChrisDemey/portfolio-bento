<template>
  <!-- Aurora Background -->
  <AuroraBackground class="z-0 fixed inset-0 bg-background dark:bg-background-dark" />

  <!-- Main Content -->
  <div class="z-10 relative flex justify-center items-center bg-transparent w-full min-h-screen font-montserrat text-light-gray dark:text-light-gray-dark">
    <!-- Logo -->
    <img
      src="/assets/chriswave_logo.png"
      alt="chriswave_logo"
      class="top-7 z-50 absolute w-30 object-cover"
    />

    <!-- Main Layout -->
    <div class="z-10 relative flex lg:flex-row flex-col lg:items-center lg:space-x-12 mx-auto w-full max-w-6xl h-auto lg:aspect-video">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Bento Grid -->
      <BentoGrid />
    </div>

    <!-- Modals -->
    <PortfolioModal />
    <ModelsModal />
  </div>
</template>

<script setup lang="ts">
// Import components
import HeroSection from '~/components/sections/HeroSection.vue'
import BentoGrid from '~/components/sections/BentoGrid.vue'
import PortfolioModal from '~/components/modals/PortfolioModal.vue'
import ModelsModal from '~/components/modals/ModelsModal.vue'

// Use composables for business logic
const { setSeoMeta } = useSeo()

// Set default SEO meta
setSeoMeta()
</script>
