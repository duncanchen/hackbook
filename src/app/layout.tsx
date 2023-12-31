import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'; import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { QProvider } from './q-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H-Books',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="lime" grayColor="olive">
          <QProvider>
            {children}
          </QProvider>
        </Theme>
      </body>
    </html>
  )
}
