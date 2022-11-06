import React from 'react'
import Head from 'next/head'
import FirstPage from '../layouts/FirstPage'
import SecondPage from '../layouts/SecondPage'
import ThirdPage from '../layouts/ThirdPage'
import FourthPage from '../layouts/FourthPage'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Rekados</title>
      </Head>
      <div className="flex flex-col w-full h-full overflow-y-auto scroll-smooth will-change-scroll">
        <section className="container flex flex-col items-center w-full h-screen">
          <FirstPage />
        </section>
        <section id="features" className="container flex flex-col items-center w-full h-screen">
          <SecondPage />
        </section>
        <section className="container flex flex-col items-center w-full h-screen">
          <ThirdPage />
        </section>
        <section className="container flex flex-col items-center w-full h-screen">
          <FourthPage />
        </section>
      </div>
    </React.Fragment>
  )
}
