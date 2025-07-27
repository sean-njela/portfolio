// @ts-nocheck
/* eslint-disable */

import { allPosts } from 'content-collections'

import { getLatestProjectsQuery } from '@/lib/querys'
import { client } from '@/lib/sanity'
import { PostCard } from '@/components/cards/post-card'
import Hero from '@/components/hero'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'
import Scroll from '@/components/scroll'

import type { ProjectsEntity } from '../../types/sanity'

export default async function Home() {
  const projects = await client.fetch<ProjectsEntity[]>(getLatestProjectsQuery)

  return (
    <section>
      <Hero />
      <Scroll />
      <PageHeader
        title='Recent Projects'
        description='View my latest projects and experiments'
      />

      <Projects projects={projects} />
    </section>
  )
}
