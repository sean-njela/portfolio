'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, CodeIcon } from 'lucide-react'
import { Formaters } from '@/helpers/formaters'

import type { ProjectsEntity } from '@/types/sanity'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

interface ProjectsCardProps {
  project: ProjectsEntity
  order?: number
}

export const ProjectCard = ({ project }: ProjectsCardProps) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="bg-gray-50 relative group/card 
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
        dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
        w-full max-w-xs sm:max-w-sm 
        h-auto rounded-xl p-0 border overflow-hidden"
      >
        {/* Image */}
        <CardItem translateZ={10} className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image.url ?? '/images/placeholder.svg'}
            alt={`${project.image.alt ?? project.name} image`}
            className="object-cover"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
          />
        </CardItem>

        {/* Card Content */}
        <div className="flex flex-col justify-between gap-4 p-4">
          {/* Header Info */}
          <CardItem translateZ={6} className="flex items-center justify-between gap-4">
            <Badge variant="secondary" className="inline-flex items-center gap-2 rounded-lg">
              <CodeIcon className="size-4" />
              {project.category}
            </Badge>
            {project.createdAt && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground ml-2">
                <CalendarCheck className="size-4" />
                <p>
                  {Formaters.formatDate(project.createdAt, {
                    pattern: 'MMMM dd, yyyy',
                  })}
                </p>
              </div>
            )}
          </CardItem>

          {/* Title + Description */}
          <CardItem translateZ={4}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-base text-neutral-600 dark:text-neutral-300 mt-1 line-clamp-4">
              {project.description}
            </p>
          </CardItem>

          {/* Technologies */}
          <CardItem translateZ={2} className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech._id || tech.name}
                variant="secondary"
                style={{
                  backgroundColor: `${tech.color}15`,
                  border: `1px solid ${tech.color}`,
                  color: tech.color,
                }}
                className="inline-flex items-center gap-2 rounded-lg"
              >
                {tech.logoUrl && (
                  <img
                    src={tech.logoUrl}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="size-4 object-contain"
                    style={{ filter: 'brightness(0) saturate(100%)' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                )}
                <span>{tech.name}</span>
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-muted-foreground ml-1">
                +{project.technologies.length - 3} more
              </span>
            )}
          </CardItem>

          {/* Links */}
          <CardItem translateZ={1} className="flex items-center gap-4">
            {project.repo && (
              <Link
                className={cn(buttonVariants({ variant: 'link' }), 'text-sm font-medium')}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </Link>
            )}
            {project.link && (
              <Link
                className={cn(buttonVariants({ variant: 'link' }), 'text-sm font-medium')}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Link>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
