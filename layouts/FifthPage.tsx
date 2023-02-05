import React from 'react'

const FifthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl h-full overflow-hidden">
      <div className="flex flex-col items-center w-full space-y-5">
        <h1 className="font-bold text-3xl md:text-5xl text-[#F3B900]">Desktop App</h1>
        <p className="font-normal text-base md:text-xl text-center">
          The rekados app will release a new feature that is the desktop application <br />
          maybe it will take a while to release but we can handle it as soon as possible. <br />
          For now let's enjoy the android version of rekados app first
        </p>
        <p className="px-5 py-3 text-sm md:text-lg text-white rounded-xl bg-[#F3B900] hover:bg-opacity-80 outline-none cursor-wait">
          Coming Soon
        </p>
      </div>
    </div>
  )
}

export default FifthPage