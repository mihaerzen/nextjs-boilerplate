import './global.css'

import { Montserrat } from 'next/font/google'
import React, { FC, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(montserrat.variable, 'font-sans')}>{children}</body>
  </html>
)

RootLayout.displayName = 'RootLayout'

export default RootLayout
