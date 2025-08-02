// @ts-nocheck
/* eslint-disable */

import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'

import { JOB_EXPERIENCE } from '@/config/experience'
import { Experience } from '@/components/experience'
import { FramerDiv, FramerSection } from '@/components/framer'
import { MyResumen } from '@/components/my-resumen'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'I’m Sean Njela, a DevOps Engineer based in Warsaw. I specialize in automating cloud infrastructure, building CI/CD pipelines, and improving deployment reliability with tools like Terraform, Kubernetes, and GitHub Actions.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title='About me' page />
      <Container>
      <FramerSection
        initial='hidden'
        animate='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className='mx-auto max-w-[75ch]'
      >
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <p className='leading-7 text-foreground/70 md:text-lg [&:not(:first-child)]:mt-6'>
            I’m a DevOps Engineer focused on automation, infrastructure as code,
            and system reliability. I enjoy designing efficient pipelines,
            provisioning secure cloud environments, and deploying scalable systems
            using tools like Docker, Kubernetes, Terraform, and GitHub Actions.
            I’m always improving workflows and reducing manual overhead wherever
            possible.
          </p>
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='my-10 flex flex-col items-center justify-center'
        >
          <MyResumen />
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='my-10 flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold'>Experience</h3>
          <section className='my-5'>
            <Experience experience={JOB_EXPERIENCE} />
          </section>
        </FramerDiv>

        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold'>My stack</h3>
          <div className='my-7 flex flex-wrap items-center justify-center gap-5'>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#202021] px-4 py-2'>
              <span>Terraform</span>
            </div>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#306998]/20 px-4 py-2'>
              <span>Python</span>
            </div>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#2496ED]/20 px-4 py-2'>
              <span>Docker</span>
            </div>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#326CE5]/20 px-4 py-2'>
              <span>Kubernetes</span>
            </div>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#6e5494]/25 px-4 py-2'>
              <span>GitHub Actions</span>
            </div>
            <div className='flex items-center justify-center gap-1.5 rounded-md bg-[#ff9900]/20 px-4 py-2'>
              <span>AWS</span>
            </div>
          </div>
        </FramerDiv>
      </FramerSection>
      </Container>
    </>
  )
}
