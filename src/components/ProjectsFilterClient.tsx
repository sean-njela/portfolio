// @ts-nocheck
/* eslint-disable */

'use client'

import { useState, useMemo } from 'react'
import type { ProjectsEntity } from '@/types/sanity'
import CategoryButtons from './category-buttons'
import Projects from './projects'
import { FramerDiv } from './framer'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'

import { Suspense } from 'react'

const categories = ['Frontend', 'Backend', 'Mobile', 'Fullstack', 'Devops']

export default function ProjectsFilterClient({ projects }: { projects: ProjectsEntity[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    return projects.filter((project) =>
      project?.category?.toLowerCase() === selectedCategory.toLowerCase()
    )
  }, [selectedCategory, projects])

  return (
    <div className='flex flex-col gap-10'>
      <FramerDiv
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='flex flex-wrap gap-2'
      >
      <Suspense fallback={null}>
        <CategoryButtons
          withAll
          categories={categories.map((title) => ({ title }))}
          buttonVariant='secondary'
          className='flex flex-row flex-wrap gap-2'
          activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />
      </Suspense>
      </FramerDiv>
      <Projects projects={filteredProjects} />
    </div>
  )
}
