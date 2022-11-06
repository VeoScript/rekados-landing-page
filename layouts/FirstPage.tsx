import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FirstPage = () => {
  return (
    <div className="relative flex flex-col w-full max-w-screen-xl h-full overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-full p-5 back-shadow backdrop-blur-sm bg-white bg-opacity-80">
        <div className="flex flex-row items-center justify-between w-full max-w-7xl">
          <Link href="/" scroll={false}>
            <Image
              src="/images/rekados_logo_2.png"
              alt="Rekados"
              width={150}
              height={150}
            />
          </Link>
          <ul className="flex flex-row items-center space-x-10">
            <li>
              <Link href="/" className="hover:text-[#F3B900]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-[#F3B900]">
                Features
              </Link>
            </li>
            <li>
              <Link href="/" className="relative">
                <span className="hover:text-[#F3B900]">Desktop App</span>
                <span className="absolute -bottom-7 left-0 right-0 z-30 text-center text-[10px] px-2 py-0.5 rounded-full bg-yellow-300">Comming Soon</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#F3B900]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-10">
        <div
          className="flex flex-col items-center w-full max-w-4xl space-y-5"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <h1 className="font-black text-6xl text-[#F3B900]">Your daily recipe at a glance</h1>
          <p className="font-normal text-xl text-center">
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
            href="https://github.com/VeoScript/rekados-mobile/releases/download/pre-release/rekados-android.apk"
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