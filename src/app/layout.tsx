// @ts-nocheck
/* eslint-disable */

import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { fontmono, fontsans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Analytics } from '@/components/analytics'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'TypeScript',
    'Shadcn',
    'Sean Njela',
    'Portfolio',
    'DevOps',
    'CI/CD',
    'Cloud Engineering',
    'Infrastructure as Code',
    'Kubernetes',
    'Automation',
  ],
  authors: [
    {
      name: 'Sean Njela',
      url: 'https://github.com/sean-njela',
    },
  ],
  creator: 'Sean Njela',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: '@devopssean',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
      </head>
      <body
        className={cn(
          'flex min-h-screen w-full flex-col overflow-x-hidden antialiased',
          fontmono.variable,
          fontsans.className,
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='fixed -z-20 size-full dark:bg-[radial-gradient(ellipse_100%_100%_at_50%_-10%,rgba(120,119,198,0.35),transparent)]' />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
