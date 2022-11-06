import React from 'react'
import Image from 'next/image'

const SecondPage = () => {
  return (
    <div className="flex flex-row md:flex-col items-start md:items-center justify-start md:justify-center w-full max-w-screen-xl h-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-full md:max-w-4xl space-y-5 md:space-y-0">
        <div
          className="flex flex-col space-y-3"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <h1 className="font-bold text-center md:text-start text-5xl text-[#F3B900]">Explore new recipes</h1>
          <p className="font-normal text-center md:text-start text-xl">
            Browse dishes around the world. <br />
            Explore new cuisines from different places.
          </p>
        </div>
        <div
          className="overflow-hidden rounded-2xl border-4 border-[#F3B900]"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1600"
        >
          <Image
            src="/images/screenshots/newsfeed.png"
            alt="Second Page Image"
            width={250}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default SecondPage