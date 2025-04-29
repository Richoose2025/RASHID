import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MUHAMMED RASHID N',
  description: 'I am rashid',
  generator: 'Developed by Digital Product Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
