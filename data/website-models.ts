import type { WebsiteModel } from '~/types'
import IconsOnepage from '~/components/icons/Onepage.vue'
import IconsMultipage from '~/components/icons/Multipage.vue'

export const websitesModels: WebsiteModel[] = [
  {
    name: "One Page",
    description: "Minimaliste et efficace.",
    icon: IconsOnepage,
    link: "https://onepage-model-rho.vercel.app/",
  },
  {
    name: "Multi Pages",
    description: "Complet et structuré.",
    icon: IconsMultipage,
    link: "https://multipage-model.vercel.app/",
  },
]