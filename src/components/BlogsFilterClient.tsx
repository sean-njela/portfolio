// @ts-nocheck
/* eslint-disable */

'use client'

import { useState, useMemo } from 'react'
import type { BlogEntity } from '@/types/sanity'
import CategoryButtons from './category-buttons'
import { BlogCard } from './cards/blog-card'
import { FramerDiv } from './framer'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { FileWarningIcon } from 'lucide-react'
import { Suspense } from 'react'

const categories = ['Frontend', 'Backend', 'Mobile', 'Fullstack', 'Devops']

export default function BlogsFilterClient({ blogs }: { blogs: BlogEntity[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'All') return blogs
    return blogs.filter((blog) =>
      blog?.category?.toLowerCase() === selectedCategory.toLowerCase()
    )
  }, [selectedCategory, blogs])

  return (
    <div className="flex flex-col gap-10">
      <FramerDiv
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-wrap gap-2"
      >
      <Suspense fallback={null}>
        <CategoryButtons
          withAll
          categories={categories.map((title) => ({ title }))}
          buttonVariant="secondary"
          className="flex flex-row flex-wrap gap-2"
          activeCategory="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90"
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />
      </Suspense>
      </FramerDiv>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[500px] w-full flex-col items-center justify-center">
          <FileWarningIcon className="mb-5 mt-7 size-12 text-primary" />
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            No blogs found 😢
          </h2>
          <p className="max-w-md text-center text-muted-foreground">
            Try changing the filters or adding new blog posts to see them here.
          </p>
        </div>
      )}
    </div>
  )
}
