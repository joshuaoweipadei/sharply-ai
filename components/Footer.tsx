import React from 'react'

const Footer = () => {
  return (
    <footer className='padding-x py-6 bg-[#ffffff0d]'>
      <div className='flex justify-between text-white-400 max-sm:flex-col max-sm:items-center gap-4'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={"/icons/copyright-sign.svg"}
            alt='copyright sign'
            width={15}
            height={15}
            className='rounded-full m-0'
          />
          <p className='text-muted2 text-sm'>Sharply AI</p>
        </div>
        <p className='text-muted2 font-montserrat cursor-pointer text-sm'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer