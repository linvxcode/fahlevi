import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../common/styles/globals.css'
import { Sidebar } from '@/common/components/sidebar'
import { Providers } from '@/common/libs/Providers'

const inter = Inter({ subsets: ['latin'] })
const url = 'https://fahlevi.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL('https://fahlevi.vercel.app/'),
  title: 'Fahlevi - Personal Website',
  description: 'web developer especially in Frontend side, with a passion for creating pixel-perfect web experiences. I work with JavaScript and specialize in all-things web. I thrive on collaborating with teams to deliver efficient, scalable, and visually appealing web applications.',
  icons: '/img/upwork.jpeg',
  openGraph: {
    title: 'Fahlevi - Personal Website',
    description: 'web developer especially in Frontend side, with a passion for creating pixel-perfect web experiences. I work with JavaScript and specialize in all-things web. I thrive on collaborating with teams to deliver efficient, scalable, and visually appealing web applications.',
    type: 'website',
    images: [
      {
        url: '/img/imgPorto.png',
        alt: 'fahlevi.vercel.app og-image',
        width: 800,
        height: 600,
      },
    ],
    siteName: 'fahlevi.vercel.app'
  }
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
