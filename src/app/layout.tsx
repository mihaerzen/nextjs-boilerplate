import './global.css'

import classNames from 'classnames'
import { Montserrat } from 'next/font/google'
import React, { FC, PropsWithChildren } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={classNames(montserrat.variable, 'font-sans')}>
      {children}
    </body>
  </html>
)

RootLayout.displayName = 'RootLayout'

export default RootLayout
