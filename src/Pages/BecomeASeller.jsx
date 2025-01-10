import React from "react"
const BecomeASeller = () => {
  return (
    <nav className='h-[75px] w-screen flex items-center justify-between bg-white fixed top-0 z-50'>
      <div>
        <img
          src='https://img.alicdn.com/imgextra/i3/O1CN01ovcTAV1WBY7oOmozh_!!6000000002750-55-tps-323-127.svg'
          alt=''
          className='h-[60px] w-auto mx-4 m-2'
        />
      </div>

      <div>
        <select className='border-none m-2 min-w-[100px] focus:ring-white'>
          <option>
            <img src='' alt=''></img>Nepal
          </option>
          <option>
            <img src='' alt=''></img>Pakistan
          </option>
          <option>
            <img src='' alt=''></img>Bangladesh
          </option>
          <option>
            <img src='' alt=''></img>Sri Lanka
          </option>
          <option>
            <img src='' alt=''></img>Myanmar
          </option>
        </select>
        <select className=' m-2 mr-5 border-none focus:ring-white'>
          <option>English</option>
          <option>Nepali</option>
        </select>
      </div>
    </nav>
  )
}

export default BecomeASeller
