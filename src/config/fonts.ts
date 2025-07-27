import { Inter } from 'next/font/google'
import { JetBrains_Mono as FontMono } from 'next/font/google'

export const fontsans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

export const fontmono = FontMono({
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
})
