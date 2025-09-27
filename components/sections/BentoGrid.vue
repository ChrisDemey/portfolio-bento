<template>
  <section
    id="bento-section"
    class="gap-4 grid grid-cols-2 grid-rows-6 p-4 lg:p-0 w-full lg:max-w-1/2 h-svh lg:h-full"
  >
    <!-- Portfolio Card -->
    <PortfolioCard @click="openPortfolioModal" />

    <!-- Contact Card -->
    <ContactCard />

    <!-- Models Card -->
    <ModelsCard @click="openModelsModal" />

    <!-- Socials Card -->
    <SocialsCard />

    <!-- Theme Switch Card -->
    <ThemeSwitchCard />
  </section>
</template>

<script setup lang="ts">
import PortfolioCard from '~/components/cards/PortfolioCard.vue'
import ContactCard from '~/components/cards/ContactCard.vue'
import ModelsCard from '~/components/cards/ModelsCard.vue'
import SocialsCard from '~/components/cards/SocialsCard.vue'
import ThemeSwitchCard from '~/components/cards/ThemeSwitchCard.vue'

const { openPortfolioModal, openModelsModal,} = useModals()
</script>