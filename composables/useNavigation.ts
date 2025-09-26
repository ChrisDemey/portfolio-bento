import { nextTick } from 'vue'

export const useNavigation = () => {
  const scrollToBento = async () => {
    await nextTick()
    const bentoSection = document.getElementById("bento-section")
    if (bentoSection) {
      bentoSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const scrollToElement = async (elementId: string, options?: ScrollIntoViewOptions) => {
    await nextTick()
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        ...options
      })
    }
  }

  const scrollToTop = () => {
    if (process.client) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  const scrollToBottom = () => {
    if (process.client) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  // Utilitaire pour vérifier si un élément est visible
  const isElementInViewport = (elementId: string): boolean => {
    if (!process.client) return false

    const element = document.getElementById(elementId)
    if (!element) return false

    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Navigation entre sections avec clavier
  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Exemple: utiliser les flèches pour naviguer
    if (event.key === 'ArrowDown' && event.ctrlKey) {
      event.preventDefault()
      scrollToBento()
    } else if (event.key === 'ArrowUp' && event.ctrlKey) {
      event.preventDefault()
      scrollToTop()
    }
  }

  const enableKeyboardNavigation = () => {
    if (process.client) {
      document.addEventListener('keydown', handleKeyboardNavigation)
    }
  }

  const disableKeyboardNavigation = () => {
    if (process.client) {
      document.removeEventListener('keydown', handleKeyboardNavigation)
    }
  }

  return {
    // Méthodes de navigation principales
    scrollToBento,
    scrollToElement,
    scrollToTop,
    scrollToBottom,

    // Utilitaires
    isElementInViewport,

    // Navigation au clavier
    enableKeyboardNavigation,
    disableKeyboardNavigation
  }
}