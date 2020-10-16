import 'normalize.css/normalize.css'
import '../styles/main.scss'

import App, { AppInitialProps } from 'next/app'

class WebApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default WebApp
