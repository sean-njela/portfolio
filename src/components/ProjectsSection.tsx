// @ts-nocheck
/* eslint-disable */
import { client } from '@/lib/sanity'
import { GETPROJECTSQUERY } from '@/lib/querys'
import ProjectsFilterClient from './ProjectsFilterClient'
import { PageHeader } from './page-header'
import type { ProjectsEntity } from '@/types/sanity'

export default async function ProjectsSection() {
  const projects = await client.fetch<ProjectsEntity[]>(GETPROJECTSQUERY, {
    category: '',
  })

  return (
    <section>
      <PageHeader
        page
        title='Projects'
        description='Here you can see my last projects'
      />
      <ProjectsFilterClient projects={projects} />
    </section>
  )
}
