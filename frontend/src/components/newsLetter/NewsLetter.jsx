import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[0px] py-[140px] mb-[150px] bg-gradient-to-b from-blue-500 via-transparent to-pink-200 gap-7'>
      <h1 className='text-[#454545] text-[55px] font-[600]'>Get Exclusive offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-white'>
        <input type="email" placeholder='Your Email id' className='w-[500px] ml-[30px] border-none outline-none text-[#616161]'></input>
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
