import React from 'react'
import AOS from 'aos'
import type { AppProps } from 'next/app'

import "aos/dist/aos.css"
import '../styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    })
  }, [])

  return <Component {...pageProps} />
}
