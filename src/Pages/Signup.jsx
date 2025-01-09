import React from "react"
import { Link } from "react-router-dom"

const Signup = () => {
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
          <span className='font-medium flex-1 text-center'>Sign Up</span>
          <Link to='/'>
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
          </Link>
        </div>

        {/* Signup Form to take user credentials */}
        <form action='submit' method='post' className='login-form'>
          {/* phone Number */}
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

          {/* Terms and conditions */}
          <div className='flex items-start mt-5'>
            <input
              id='t&c'
              type='checkbox'
              className='rounded bg-gray-50 border border-gray-500 m-1'
              required
            />
            <label htmlFor='t&c' className='text-sm text-gray-500 '>
              By creating and/or using your account, you agree to our{" "}
              <a href='#' className='text-blue-500'>
                Terms of Use{" "}
              </a>{" "}
              and{" "}
              <a href='#' className='text-blue-500'>
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type='submit'
            className='w-full h-10 rounded-md bg-[#f57224] text-white font-medium mt-5 '
            onClick={numCheck}
          >
            <img src='' alt=''></img>
            Send code via Whatsapp
          </button>

          <button
            type='sumbit'
            className='w-full h-10 border border-[#f57224] rounded-md bg-white text-[#f57224] font-medium mt-3 hover:bg-[#f57224] hover:text-white'
          >
            <img src='' alt=''></img>
            Send code via SMS
          </button>
        </form>

        {/* Login*/}

        <div className='create-account-container flex items-center justify-center h-100 w-full mt-4'>
          <div className='text-center text-gray-500 text-sm '>
            Already have an account?{" "}
            <a href='#' className='text-blue-500'>
              Log in Now
            </a>
            <div className='mt-7'>
              Or, Sign up with
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

export default Signup

// TO DO
// verify if the number is 10 digits long
