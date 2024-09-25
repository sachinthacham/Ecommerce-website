import React from 'react'
import exclusive_image from '../../Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="offers w-[65%] h-[60vh] flex m-auto py-[0px] px-[140px] mb-[150px] bg-gradient-to-b from-pink-500 via-transparent to-pink-200">
            <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on best sellers product</p>
            <button className="w-282 h-70 rounded-full bg-red-500 border-none text-white font-semibold text-2xl px-4 py-3 mt-3 cursor-pointer">Check now</button>
            </div>
            <div className="flex-1 flex items-center justify-end pt-[50px]">
                <img src={exclusive_image} alt="exclusive image"/>
            </div>
      
    </div>
  )
}

export default Offers
