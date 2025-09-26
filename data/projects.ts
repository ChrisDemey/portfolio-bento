import type { Company } from '~/types'

export const projectsByCompany: Company[] = [
  {
    company: "Alstom",
    projects: [
      {
        name: "Carsharing",
        type: "SaaS",
        image: "/assets/carsharing_screenshot.png",
        description:
          "Projet de covoiturage réservés aux employés de l'entreprise. Il permet de créer/partager/rechercher des trajets ainsi que renseigner leur propre voiture ainsi que des destinations fixes.",
      },
      {
        name: "Desksharing",
        type: "SaaS",
        image: "/assets/desksharing_screenshot.png",
        description:
          "Projet de partage de bureaux, interne à l'entreprise. Mis en place durant la pandémie de Covid-19, il permet de visualiser la disponibilité des bureaux en temps réel et de les réserver pour des périodes de temps spécifiques.",
      },
    ],
  },
  {
    company: "Sympa'Dress",
    projects: [
      {
        name: "Site de prise de rendez-vous",
        type: "Sites web",
        image: "/assets/sympadress_screenshot.png",
        description:
          "Conçu pour une conseillère en image, ce site permet au personnes le visitant de prendre directement rendez-vous avec cette dernière.",
        link: "https://www.sympadress.com/",
      }
    ]
  },
  {
    company: "Nirvana Centre de Bien-Être",
    projects: [
      {
        name: "Site vitrine",
        type: "Sites web",
        image: "/assets/nirvana_screenshot.png",
        description:
          "Il s'agit d'un simple landing page pour présenter les différents services de ce centre de beauté.",
        link: "https://www.nirvanacentredebienetre.com/",
      }
    ]
  }
]