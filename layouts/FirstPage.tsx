import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FirstPage = () => {
  return (
    <div className="relative flex flex-col w-full max-w-screen-xl h-full overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-full p-5 back-shadow backdrop-blur-sm bg-white bg-opacity-80">
        <div className="flex flex-row items-center justify-between w-full max-w-full md:max-w-7xl">
          <Link href="/" scroll={false} className="outline-none">
            <Image
              src="/images/rekados_logo_2.png"
              alt="Rekados"
              width={150}
              height={150}
            />
          </Link>
          <ul className="flex flex-row items-center space-x-3 md:space-x-10">
            <li className="hidden md:flex">
              <Link href="/" className="text-sm md:text-base hover:text-[#F3B900]">
                Home
              </Link>
            </li>
            <li className="hidden md:flex">
              <Link href="/#features" className="text-sm md:text-base hover:text-[#F3B900]">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#desktop-app" className="text-sm md:text-base hover:text-[#F3B900]">
                Desktop App
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-sm md:text-base hover:text-[#F3B900]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-10">
        <div
          className="flex flex-col items-center w-full max-w-full md:max-w-4xl mt-36 md:mt-0 space-y-5"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <h1 className="font-black text-5xl md:text-6xl text-center text-[#F3B900]">Your daily recipe at a glance</h1>
          <p className="font-normal text-lg md:text-xl text-center">
            A social media app for people who want to share and explore new recipes and dishes. <br />
            With Rekados, you can easily find and follow the cooks and foodies that inspire you, and get recommendations for new recipes and dishes to try.
          </p>
        </div>
        <div
          className="flex flex-col items-center w-full max-w-4xl space-y-5"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1600"
        >
          <a
            className="px-5 py-3 text-lg text-white rounded-xl bg-[#F3B900] hover:bg-opacity-80 outline-none"
            href="https://github.com/VeoScript/rekados-mobile/releases/download/release-version-1.2/rekados-app-v1.2.apk"
            target="_blank"
          >
            Download the app
          </a>
          <h3 className="font-light text-base text-neutral-500">Available on android devices at the moment.</h3>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
