import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'

type Props = {
  title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)

export default Layout
