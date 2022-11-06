import React from 'react'
import Head from 'next/head'
import FirstPage from '../layouts/FirstPage'
import SecondPage from '../layouts/SecondPage'
import ThirdPage from '../layouts/ThirdPage'
import FourthPage from '../layouts/FourthPage'
import FifthPage from '../layouts/FifthPage'
import SixthPage from '../layouts/SixthPage'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Rekados</title>
      </Head>
      <div className="flex flex-col w-full h-full overflow-y-auto scroll-smooth will-change-scroll">
        <section className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <FirstPage />
        </section>
        <section id="features" className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <SecondPage />
        </section>
        <section className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <ThirdPage />
        </section>
        <section className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <FourthPage />
        </section>
        <section id="desktop-app" className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <FifthPage />
        </section>
        <section id="about" className="container flex flex-col items-center w-full h-screen px-5 md:px-0">
          <SixthPage />
          <footer className="flex flex-col items-center w-full p-5">
            <p className="text-base">&copy; 2022 Rekados. All rights reserved.</p>
            <p className="font-light text-xs">Designed and Developed by Jerome Villaruel (VEOSCRIPT)</p>
          </footer>
        </section>
      </div>
    </React.Fragment>
  )
}
