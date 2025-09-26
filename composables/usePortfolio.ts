import { ref, computed } from 'vue'
import { projectsByCompany, projectsTypes } from '~/data'
import type { Company, ProjectFilter, ProjectType } from '~/types'

export const usePortfolio = () => {
  const activeFilter = ref<string>('Tous')

  // Computed pour les projets filtrés
  const filteredProjects = computed<Company[]>(() => {
    if (activeFilter.value === 'Tous') {
      return projectsByCompany
    }

    return projectsByCompany
      .map(company => ({
        ...company,
        projects: company.projects.filter(project =>
          project.type === activeFilter.value as ProjectType
        )
      }))
      .filter(company => company.projects.length > 0)
  })

  // Computed pour les statistiques
  const projectStats = computed(() => {
    const totalProjects = projectsByCompany.reduce((acc, company) =>
      acc + company.projects.length, 0
    )

    const saasProjects = projectsByCompany.reduce((acc, company) =>
      acc + company.projects.filter(p => p.type === 'SaaS').length, 0
    )

    const websiteProjects = projectsByCompany.reduce((acc, company) =>
      acc + company.projects.filter(p => p.type === 'Sites web').length, 0
    )

    return {
      total: totalProjects,
      saas: saasProjects,
      websites: websiteProjects
    }
  })

  // Méthodes
  const setActiveFilter = (filterName: string) => {
    activeFilter.value = filterName
  }

  const resetFilter = () => {
    activeFilter.value = 'Tous'
  }

  const getProjectsByType = (type: ProjectType) => {
    return projectsByCompany
      .map(company => ({
        ...company,
        projects: company.projects.filter(project => project.type === type)
      }))
      .filter(company => company.projects.length > 0)
  }

  return {
    // États
    activeFilter: readonly(activeFilter),

    // Données
    projectsByCompany,
    projectsTypes,

    // Computed
    filteredProjects,
    projectStats,

    // Méthodes
    setActiveFilter,
    resetFilter,
    getProjectsByType
  }
}