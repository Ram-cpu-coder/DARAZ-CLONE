import React, { useEffect } from "react"

const Login = () => {
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden"
    return () => {
      // Unlock scroll when component unmounts
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      className='bg-gray-3 h-screen w-screen flex items-center justify-center fixed top-0 left-0 z-50'
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className='container-sm bg-white min-h-96 w-96 rounded-md p-5'>
        {/* Login Form to take user credentials */}
        <form action='submit' method='post' className='login-form'>
          <label htmlFor='username' className='block mb-2 '></label>
          <input
            type='email'
            id='email'
            class='bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-5'
            placeholder='Please enter your Phone Number or Email'
            required
          />

          <label htmlFor='password' className='block mb-2 '></label>
          <input
            type='password'
            id='password'
            class='bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2'
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

        {/* Create new user account*/}

        <div className='create-account-container flex items-center justify-center h-100 w-full'>
          <div className='text-center text-gray-600 text-sm '>
            Don't have an account?{" "}
            <a href='#' className='text-blue-500'>
              Sign up
            </a>
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
// Close the popup button
// Add Valid url and links (signup, loginBtn)
