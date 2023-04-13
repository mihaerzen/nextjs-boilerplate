import classNames from 'classnames'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

type Props = {
  title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, title = '' }) => (
  <div className={classNames(montserrat.variable, 'font-sans')}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)

export default Layout
