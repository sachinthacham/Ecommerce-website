import React from 'react'
import hand_icon from '../../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../../Assets/Frontend_Assets/arrow.png'
import hero_image from '../../Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] flex'>
      <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-tight">
        <h2 className='text-[#171717] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon flex items-center gap-5'>
                <p>new</p>
                <img src = {hand_icon} alt="hand icon" className="w-[105px]"/>
            </div>
            <p className='text-[#171717] text-[26px] font-semibold'>Collection</p>
            <p className='text-[#171717] text-[26px] font-semibold'>For everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow icon"/>
        </div>
      </div>
      <div className="hero-right flex-1 flex items-center justify-center">
            <img src={hero_image} alt='hero image'/>
      </div>
    </div>
  )
}

export default Hero
