import Link from 'next/link'
import { MDXContent } from '@content-collections/mdx/react'
import type { Post } from 'content-collections'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

export const MdxComponent = ({ post }: { post: Post }) => {
  return (
    <MDXContent
      code={post.mdx}
      components={{
        Button: (props) => <Button {...props} />,
        h1: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h1
            className={cn(
              'mt-2 scroll-m-32 text-4xl font-bold leading-tight lg:text-5xl',
              className,
            )}
            {...props}
          />
        ),
        h2: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h2
            className={cn(
              'mt-8 scroll-m-32 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
              className,
            )}
            {...props}
          />
        ),
        h3: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h3
            className={cn(
              'mt-6 scroll-m-32 text-xl font-semibold tracking-tight',
              className,
            )}
            {...props}
          />
        ),
        h4: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h4
            className={cn(
              'mt-6 scroll-m-32 text-lg font-semibold tracking-tight',
              className,
            )}
            {...props}
          />
        ),
        h5: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h5
            className={cn(
              'mt-6 scroll-m-32 text-lg font-semibold tracking-tight',
              className,
            )}
            {...props}
          />
        ),
        h6: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h6
            className={cn(
              'mt-6 scroll-m-32 text-base font-semibold tracking-tight',
              className,
            )}
            {...props}
          />
        ),
        a: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLAnchorElement>) => (
          <a
            aria-label='Link'
            className={cn(
              'font-medium underline underline-offset-4',
              className,
            )}
            {...props}
          />
        ),
        ExternalLink: ({
          className,
          ...props
        }: React.ComponentProps<typeof Link>) => (
          <Link
            className={cn(
              buttonVariants({ variant: 'default' }),
              'my-5',
              className,
            )}
            target='_blank'
            rel='noopener noreferrer'
            {...props}
          />
        ),
        Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
          <Link
            className={cn(
              'font-medium underline underline-offset-4',
              className,
            )}
            {...props}
          />
        ),
        p: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLParagraphElement>) => (
          <p
            className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
            {...props}
          />
        ),

        ul: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLUListElement>) => (
          <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
        ),
        ol: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLOListElement>) => (
          <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
        ),
        li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
          <li className={cn('mt-2', className)} {...props} />
        ),
        blockquote: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLElement>) => (
          <blockquote
            className={cn('mt-6 border-l-2 pl-6 italic', className)}
            {...props}
          />
        ),
        img: ({
          className,
          alt,
          ...props
        }: React.ImgHTMLAttributes<HTMLImageElement>) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={cn('rounded-md', className)} alt={alt} {...props} />
        ),
        hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
          <hr className='my-4 md:my-8' {...props} />
        ),
        table: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLTableElement>) => (
          <div className='my-6 w-full overflow-y-auto'>
            <table className={cn('w-full', className)} {...props} />
          </div>
        ),
        tr: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLTableRowElement>) => (
          <tr
            className={cn('m-0 border-t p-0 even:bg-muted', className)}
            {...props}
          />
        ),
        th: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLTableCellElement>) => (
          <th
            className={cn(
              'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
              className,
            )}
            {...props}
          />
        ),
        td: ({
          className,
          ...props
        }: React.HTMLAttributes<HTMLTableCellElement>) => (
          <td
            className={cn(
              'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
              className,
            )}
            {...props}
          />
        ),
      }}
    />
  )
}
