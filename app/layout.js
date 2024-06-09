import './globals.css'
import { Brygada_1918 } from 'next/font/google'

const inter = Brygada_1918({ subsets: ['latin'] })

export const metadata = {
  title: 'MakeMake',
  description: 'MakeMake',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
