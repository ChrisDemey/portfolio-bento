import { ref } from 'vue'

export const useModals = () => {
  const portoflioModal = ref(false)
  const modelsModal = ref(false)

  const openPortfolioModal = () => {
    portoflioModal.value = true
  }

  const closePortfolioModal = () => {
    portoflioModal.value = false
  }

  const openModelsModal = () => {
    modelsModal.value = true
  }

  const closeModelsModal = () => {
    modelsModal.value = false
  }

  const closeAllModals = () => {
    portoflioModal.value = false
    modelsModal.value = false
  }

  // Gestion de la touche Escape pour fermer les modales
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeAllModals()
    }
  }

  // Activer/désactiver la gestion de la touche Escape
  const enableEscapeHandler = () => {
    if (process.client) {
      document.addEventListener('keydown', handleEscapeKey)
    }
  }

  const disableEscapeHandler = () => {
    if (process.client) {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }

  return {
    // États
    portoflioModal: readonly(portoflioModal),
    modelsModal: readonly(modelsModal),

    // Actions Portfolio
    openPortfolioModal,
    closePortfolioModal,

    // Actions Models
    openModelsModal,
    closeModelsModal,

    // Actions globales
    closeAllModals,
    enableEscapeHandler,
    disableEscapeHandler
  }
}