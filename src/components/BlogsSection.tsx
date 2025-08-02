// @ts-nocheck
import { client } from '@/lib/sanity'
import { GETBLOGQUERY } from '@/lib/querys'
import BlogsFilterClient from './BlogsFilterClient'
import { PageHeader } from './page-header'
import type { BlogEntity } from '@/types/sanity'
import { Container } from './ui/container'

export default async function BlogsSection() {
  const blogs = await client.fetch<BlogEntity[]>(GETBLOGQUERY, {
    category: '',
  })

  return (
    <Container>
      <section>
      <PageHeader
        page
        title="Blog"
        description="Articles, thoughts, and ideas written on Notion"
      />
      <BlogsFilterClient blogs={blogs} />
    </section>
    </Container>
  )
}
