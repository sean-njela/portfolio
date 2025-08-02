// @ts-nocheck
/* eslint-disable */

'use client'

import { useCallback, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'
import { Home, type LucideIcon } from 'lucide-react'

import { cn, slugify } from '@/lib/utils'
import icons from './icons'
import { Button, type ButtonProps } from './ui/button'

type Category = {
  title: string
  icon?: keyof typeof icons
}

type Props = {
  activeCategory?: string
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  buttonClassName?: string
  buttonSize?: ButtonProps['size']
  buttonVariant?: ButtonProps['variant']
  categories: Category[]
  className?: string
  iconStyle?: string
  withAll?: boolean
  withIcons?: boolean
}

const CategoryButtons = ({
  activeCategory,
  selectedCategory,
  onCategoryChange,
  buttonClassName,
  buttonSize = 'sm',
  buttonVariant = 'outline',
  categories,
  className,
  iconStyle,
  withAll = false,
  withIcons = false,
}: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const categoryParam = searchParams.get('category')

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          if (key === 'category' && typeof value === 'string') {
            newSearchParams.set(key, value.toLowerCase())
          } else {
            newSearchParams.set(key, String(value))
          }
        }
      }

      return newSearchParams.toString()
    },
    [searchParams]
  )

  const handleClick = (category: string | null) => {
    if (onCategoryChange) {
      // Client-side callback usage (Home page)
      onCategoryChange(category ?? 'All')
    } else {
      // URL-based routing (Projects page)
      startTransition(() => {
        router.push(
          `${pathname}?${createQueryString({
            category: category ? slugify(category) : null,
          })}`,
          { scroll: false }
        )
      })
    }
  }

  const getIsActive = (title: string) => {
    const slug = slugify(title).toLowerCase()
    if (onCategoryChange) {
      return slugify(selectedCategory || 'all').toLowerCase() === slug
    } else {
      return categoryParam?.toLowerCase() === slug || (!categoryParam && slug === 'all')
    }
  }

  const allCategories: Category[] = withAll ? [{ title: 'All' }, ...categories] : categories

  return (
    <m.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex min-w-40 flex-row flex-wrap gap-3 md:flex-col"
    >
      <m.div
        variants={FADE_LEFT_ANIMATION_VARIANTS}
        className={cn('flex flex-col items-start gap-5', className)}
      >
        {allCategories.map((category) => {
          const isActive = getIsActive(category.title)
          const Icon = icons[category.icon as keyof typeof icons] as LucideIcon

          return (
            <Button
              key={category.title}
              onClick={() => handleClick(category.title === 'All' ? null : category.title)}
              disabled={isPending}
              className={cn(
                isActive && activeCategory,
                buttonClassName,
                withIcons && 'flex items-center gap-2'
              )}
              variant={buttonVariant}
              size={buttonSize}
            >
              {withIcons && (category.title === 'All' ? <Home className={cn(iconStyle)} size={16} /> : <Icon className={cn(iconStyle)} size={16} />)}
              {category.title}
            </Button>
          )
        })}
      </m.div>
    </m.div>
  )
}

export default CategoryButtons
