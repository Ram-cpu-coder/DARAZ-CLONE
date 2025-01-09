import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("password")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const numCheck = () => {
    console.log(`numcheck called`)
  }

  return (
    <div
      className='bg-gray-3 h-screen w-screen flex items-center justify-center fixed top-0 left-0 z-50'
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className='container-sm bg-white min-h-96 w-96 rounded-md p-5'>
        {/* tooolbar */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center grow justify-around'>
            <span
              className={`font-medium cursor-pointer ${
                activeTab === "password" ? "text-blue-500" : ""
              }`}
              onClick={() => handleTabClick("password")}
            >
              Password
            </span>
            <span
              className={`font-medium cursor-pointer ${
                activeTab === "phone" ? "text-blue-500" : ""
              }`}
              onClick={() => handleTabClick("phone")}
            >
              Phone Number
            </span>
          </div>

          <div className='flex justify-end'>
            <span onClick={onClose} className='cursor-pointer'>
              <svg
                className='w-[23px] h-[23px] text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1.1'
                  d='M6 18 17.94 6M18 18 6.06 6'
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Login Form to take user credentials */}
        {activeTab === "password" && (
          <form action='submit' method='post' className='login-form'>
            <label htmlFor='email' className='block mb-2 '></label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-5'
              placeholder='Please enter your Email'
              required
            />

            <label htmlFor='password' className='block mb-2 '></label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2'
              placeholder='Please enter your Password'
              required
            />

            <span className='flex justify-end text-sm text-gray-500'>
              <a href='#'> Forgot Password?</a>
            </span>

            <button
              type='submit'
              className='w-full h-10 rounded-md bg-[#f57224] text-white font-medium my-5'
            >
              LOG IN
            </button>
          </form>
        )}

        {activeTab === "phone" && (
          <form action='submit' method='post' className='login-form'>
            <div className='flex items-center mt-10'>
              <select
                id='countr-code'
                className='text-xs rounded-md bg-gray-50 border border-gray-300 p-3 mr-2'
                disabled
              >
                <option>Np+977</option>
              </select>
              <label htmlFor='phone' className='block mb-2 '></label>{" "}
              <input
                type='text'
                id='phone'
                className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Please enter your Phone Number'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full h-10 rounded-md bg-[#f57224] text-white font-medium mt-10 '
              onClick={numCheck}
            >
              <img src='' alt=''></img>
              Send code via Whatsapp
            </button>

            <button
              type='sumbit'
              className='w-full h-10 border border-[#f57224] rounded-md bg-white text-[#f57224] font-medium mt-3 mb-5 hover:bg-[#f57224] hover:text-white '
            >
              <img src='' alt=''></img>
              Send code via SMS
            </button>
          </form>
        )}

        {/* Create new user account*/}

        <div className='create-account-container flex items-center justify-center h-100 w-full'>
          <div className='text-center text-gray-500 text-sm '>
            Don't have an account?{" "}
            <Link to='/signup' className='text-blue-500'>
              Sign up
            </Link>
            <div className='mt-7'>
              Or, Login with
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                  <a href='https://www.google.com/' className='flex items-center'>
                    <img
                      src='/assets/images/googlelogo.png'
                      alt=''
                      className='h-5 w-auto mr-2'
                    ></img>
                    <span>Google</span>
                  </a>
                </div>

                <div className='flex items-center'>
                  <a href='https://www.facebook.com/' className='flex items-center'>
                    <img
                      src='/assets/images/facebooklogo.png'
                      alt=''
                      className='h-5 w-auto mr-2'
                    ></img>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

// TO DO
// View Password feature
// number check Feature
