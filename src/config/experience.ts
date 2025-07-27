export interface JobExperience {
  occupation: string
  company: string
  asLink?: boolean
  location: string
  url?: string
  startDate: string
  endDate?: string | null
  description: string
}

export const JOB_EXPERIENCE = [
  {
    occupation: 'DevOps Engineer',
    company: 'KodeKloud',
    location: 'Remote, Warsaw, Poland',
    startDate: '2024-08-01',
    endDate: '2025-01-31',
    description:
      'Built and optimized CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 30%. Managed AWS provisioning with Terraform, and deployed containerized workloads using Docker, Kubernetes, and Helm.',
  },
  {
    occupation: 'Software Engineer',
    company: 'GLP Software House',
    location: 'Remote, Warsaw, Poland',
    startDate: '2025-01-01',
    endDate: '2025-06-30',
    description:
      'Led full-cycle development of a responsive school website using Figma, Tailwind, and HTML/CSS. Conducted cross-platform testing and uncovered critical OWASP vulnerabilities, collaborating on patches.',
  },
  {
    occupation: 'Support Engineer',
    company: 'Empire National Europe',
    location: 'Warsaw, Poland',
    startDate: '2023-04-01',
    endDate: null,
    description:
      'Resolved over 90% of tickets via Jira Service Desk and remote tools (SSH, AnyDesk). Authored technical documentation and onboarding material, improving support efficiency and reducing repeat incidents.',
  },
] satisfies JobExperience[]
