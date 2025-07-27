import type icons from '@/components/icons'

export type SiteConfig = typeof siteConfig

const links = {
  twitter: 'https://twitter.com/@devopssean', // Update this if not accurate
  github: 'https://github.com/sean-njela',
  githubAccount: 'https://github.com/sean-njela',
  threads: 'https://threads.net/@seanative', // Placeholder or update accordingly
}

export const siteConfig = {
  name: 'Sean Njela',
  description:
    'Personal portfolio of Sean Njela, a DevOps engineer based in Warsaw, Poland.',
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_APP_URL!,
  ogImage: 'https://sean-njela/opengraph-image.png', // Change domain if needed
  sourceCode: links.github,
  mainNav: [
    {
      title: 'Home',
      href: '/',
      items: [],
    },
    {
      title: 'Projects',
      href: '/projects',
      items: [],
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    //   disabled: false,
    //   items: [],
    // },
    {
      title: 'About',
      href: '/about',
      items: [],
    },
  ],
  blogCategories: [
    { title: 'DevOps', icon: 'braces' },
    { title: 'Cloud', icon: 'flaskconical' },
    { title: 'Kubernetes', icon: 'panelstopleft' },
    { title: 'IaC', icon: 'pocketknife' },
    { title: 'Monitoring', icon: 'book' },
  ] satisfies { title: string; icon: keyof typeof icons }[],
  footerNav: [
    {
      title: 'Social',
      items: [
        {
          title: 'Twitter',
          href: links.twitter,
          external: true,
        },
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true,
        },
        {
          title: 'Threads',
          href: links.threads,
          external: true,
        },
      ],
    },
    {
      title: 'Lofi',
      items: [
        {
          title: 'beats to study to',
          href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          external: true,
        },
        {
          title: 'beats to chill to',
          href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
          external: true,
        },
        {
          title: 'a fresh start',
          href: 'https://www.youtube.com/watch?v=rwionZbOryo',
          external: true,
        },
        {
          title: 'coffee to go',
          href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
          external: true,
        },
      ],
    },
  ],
}
