import React from "react"
import { PiShoppingCartSimple } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"

const NavBar = () => {
  return (
    <div className='z-50 flex justify-center items-center border-b bg-[#f57224] pb-1 sticky top-0'>
      <div className='flex justify-between items-center w-[80%] h-[75px]'>
        {/* logo */}
        <div className='h-[80px] w-[200px] flex items-center'>
          <a href=''>
            <img src='/assets/images/DarazLogo.png' alt='Daraz Logo' className='h-auto w-[150px]' />
          </a>
        </div>
        {/* search bar */}
        <div className='flex w-[55vw] h-[50px] bg-white rounded-md'>
          <input
            className='w-full h-full rounded-md  border-none outline-none px-4'
            placeholder='Search in Daraz'
          />
          {/* icon-search */}
          <CiSearch className='h-full p-2 w-[60px] text-2xl border-l rounded-md bg-[#ffbf80]' />
        </div>

        {/* icon-cart */}
        <a href=''>
          <PiShoppingCartSimple className='w-[30px] h-[30px]' />
        </a>
      </div>
    </div>
  )
}

export default NavBar
