import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

//Redux store setup
import ReduxProvider from "@/provider/redux/reduxProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Box',
  description: 'Share your Recipe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
