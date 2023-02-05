import React from 'react'

const SixthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl h-full overflow-hidden">
      <div className="flex flex-col items-center justify-between w-full space-y-5">
        <h1 className="font-bold text-3xl md:text-5xl text-[#F3B900]">About</h1>
        <p className="font-normal text-sm md:text-xl text-center">
          Rekados is a social media app for people who want to share and <br />
          explore new recipes and dishes.
          With Rekados, you can easily find and follow the cooks and foodies that inspire you, and get recommendations for new recipes and dishes to try.
          You can also use Rekados to save your favorite recipes.
        </p>
        <p className="font-normal text-sm md:text-xl text-center">
          Rekados was founded in 2022 by two food lovers who wanted to <br />
          create a space where people could connect with others who shared their passion for food.
          We believe that food is a universal language that brings people together, and we are committed to promoting exploration and discovery through our app.
        </p>
      </div>
    </div>
  )
}

export default SixthPage