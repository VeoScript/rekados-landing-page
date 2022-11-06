import React from 'react'
import Image from 'next/image'

const ThirdPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl h-full overflow-hidden">
      <div className="flex flex-row items-center justify-between w-full max-w-4xl">
        <div
          className="flex flex-col space-y-3"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <h1 className="font-bold text-5xl text-[#F3B900]">Create your own recipe</h1>
          <p className="font-normal text-xl">
            Share your dish around the world <br />
            to instpire people who love to cook.
          </p>
        </div>
        <div
          className="overflow-hidden rounded-2xl border-4 border-[#F3B900]"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1600"
        >
          <Image
            src="/images/screenshots/createdish.png"
            alt="Third Page Image"
            width={250}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default ThirdPage