import '../styles/global.css'

import App, { AppInitialProps } from 'next/app'
import React from 'react'

class WebApp extends App<AppInitialProps> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />
  }
}

export default WebApp
