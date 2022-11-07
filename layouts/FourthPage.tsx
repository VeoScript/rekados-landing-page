import React from 'react'
import Image from 'next/image'

const FourthPage = () => {
  return (
    <div className="flex flex-row md:flex-col items-start md:items-center justify-start md:justify-center w-full max-w-screen-xl h-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-full md:max-w-5xl space-y-5 md:space-y-0">
        <div
          className="flex flex-col space-y-3"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <h1 className="font-bold text-center md:text-start text-3xl md:text-5xl text-[#F3B900]">Detailed Instructions</h1>
          <p className="font-normal text-center md:text-start text-base md:text-xl">
            The ingredients and procedures are detailed <br />
            so they can execute is easily.
          </p>
        </div>
        <div
          className="overflow-hidden rounded-2xl border-4 border-[#F3B900]"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1600"
        >
          <Image
            src="/images/screenshots/detailed.png"
            alt="Fourth Page Image"
            width={250}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default FourthPage