import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '{{YOUR_NAME}} - 个人网站',
  description: '{{ONE_LINER}}',
  keywords: ['个人网站', '作品集', '技术博客', '前端开发'],
  authors: [{ name: '{{YOUR_NAME}}' }],
  creator: '{{YOUR_NAME}}',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    title: '{{YOUR_NAME}} - 个人网站',
    description: '{{ONE_LINER}}',
    siteName: '{{YOUR_NAME}}',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{{YOUR_NAME}} - 个人网站',
    description: '{{ONE_LINER}}',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
