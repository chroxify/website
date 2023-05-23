import './globals.css'
import { siteConfig } from '@/config/site'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className + ' flex flex-col items-center p-6 sm:p-10 md:p-20'
        }
      >
        {children}
      </body>
    </html>
  )
}
