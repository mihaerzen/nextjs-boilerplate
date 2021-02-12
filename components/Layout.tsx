import Head from 'next/head'
import React, { FC } from 'react'

type Props = {
  title?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        href="//fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </div>
)

export default Layout
