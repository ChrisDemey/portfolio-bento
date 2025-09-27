<template>
  <Modal :is-open="portoflioModal" @close="closePortfolioModal">
    <!-- Filter buttons -->
    <ul class="flex justify-center items-center gap-4 py-4 w-full">
      <li
        v-for="item in projectsTypes"
        :key="item.name"
        @click="setActiveFilter(item.name)"
        :class="{
          'bg-light/10 border hover:bg-light/20 border-light/20': activeFilter === item.name
        }"
        class="hover:bg-light/10 px-4 py-2 rounded-full text-light transition duration-150 cursor-pointer"
      >
        {{ item.name }}
      </li>
    </ul>

    <!-- Projects list -->
    <div class="gap-8 lg:gap-4 grid lg:grid-cols-4 pb-4">
      <div
        v-for="company in filteredProjects"
        :key="company.company"
        class="col-span-1 lg:col-span-4"
      >
        <h1 class="mb-2 pl-5 font-thin text-3xl uppercase tracking-widest">
          {{ company.company }}
        </h1>

        <ProjectCard
          v-for="project in company.projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/portfolio/ProjectCard.vue'

const { portoflioModal, closePortfolioModal } = useModals()
const { activeFilter, filteredProjects, projectsTypes, setActiveFilter } = usePortfolio()
</script>