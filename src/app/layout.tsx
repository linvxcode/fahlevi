import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../common/styles/globals.css'
import { Sidebar } from '@/common/components/sidebar'
import { Providers } from '@/common/libs/Providers'

const inter = Inter({ subsets: ['latin'] })
const url = 'https://fahlevi.vercel.app'
const img = '/img/imgPorto.png'
const desc = 
'web developer especially in Frontend side, with a passion for creating pixel-perfect web experiences.'

export const metadata: Metadata = {
  metadataBase: new URL('https://fahlevi.vercel.app'),
  title: 'Fahlevi - Personal Website',
  description: desc,
  icons: '/img/imgprofile.png',
  
  openGraph: {
    title: 'Fahlevi - Personal Website',
    description: desc,
    type: 'website',
    url: url ,
    images: [
      {
        url: img,
        alt: 'fahlevi.vercel.app og-image',
        width: 800,
        height: 600,
      },
      {
        url: img,
        alt: 'fahlevi.vercel.app og-image',
        width: 1200,
        height: 630,
      },
      {
        url: img,
        alt: 'fahlevi.vercel.app og-image',
        width: 1600,
        height: 900,
      },
    ],

    siteName: 'fahlevi.vercel.app'
  },
  twitter: {
    creator: 'Fahlevi',
    images: '/img/imgprofile.png',
    card: 'summary_large_image',
    site: '@site',
    siteId: 'https://fahlevi.vercel.app/',
    title: 'Fahlevi',
    description: desc
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
        <Sidebar>
          {children}
        </Sidebar>
      </Providers>
        </body>
    </html>
  )
}
