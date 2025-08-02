// @ts-nocheck
/* eslint-disable */
import Hero from '@/components/hero'
import Scroll from '@/components/scroll'
import ProjectsSection from '@/components/ProjectsSection'
import BlogsSection from '@/components/BlogsSection'
import { Container } from '@/components/ui/container'

export default async function Home() {
  return (
    <section>
      <Hero />
      <Scroll />
      <Container>
        <ProjectsSection />
        <BlogsSection />
      </Container>
    </section>
  )
}
