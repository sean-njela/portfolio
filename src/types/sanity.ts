export interface ProjectsEntity {
  image: {
    url: string
    alt: string
  }
  category: string
  technologies: Technology[]
  name: string
  repo: string
  link: string
  description: string
  _id: string
  createdAt: Date
}

export interface Technology {
  _id: string
  logoUrl: string
  name: string
  image: string
  color: string
}

export interface BlogEntity {
  image: {
    url: string
    alt: string
  }
  category: string
  technologies: Technology[]
  name: string
  link: string
  description: string
  _id: string
  createdAt: Date
}