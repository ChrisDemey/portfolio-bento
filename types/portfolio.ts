export type ProjectType = 'SaaS' | 'Sites web'

export interface Project {
  name: string
  type: ProjectType
  image: string
  description: string
  link?: string
}

export interface Company {
  company: string
  projects: Project[]
}

export interface ProjectFilter {
  name: string
}