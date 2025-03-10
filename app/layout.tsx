import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'shubham portfolio',
  description: 'Created by shubham with typescript',
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
