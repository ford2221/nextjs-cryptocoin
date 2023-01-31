import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [popupState, setPopupState] = useState(false)
  const onTriggerPopup = () => setPopupState(!popupState)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <nav className={`flex justify-between px-6 p-2 items-center  fixed w-full ${navbar ? 'bg-gray-900 transition-all duration-400': 'bg-gradient-to-r from-blue-900 to-transparent'}` } >
        <h1 className='text-3xl font-bold text-white hover:cursor-pointer'>
          <Link href="/" >
            CryptoCoin
          </Link>
        </h1>
        <button onClick={onTriggerPopup} type="button" className='text-white md:block lg:hidden xl:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className={` py-2 lg:flex lg:items-center lg:gap-32 transition-transform duration-300
            ${popupState ? 'block lg:hidden rounded-lg px-6 bg-gray-900 shadow shadow-teal-900 w-32 h-auto fixed right-6 top-10 lg:top-0 ' : 'hidden' }`}>

          <ul className='lg:flex xl:flex lg:items-center lg:gap-10 lg:space-y-0 space-y-2'>
            <li className='text-white text-xs text-center hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>Products</li>
            <li className='text-white text-xs text-center hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>News</li>
            <li className='text-white text-xs text-center hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>MarketCoins</li>
          </ul>
          <div className='flex flex-col lg:flex lg:flex-row lg:items-center lg:gap-4 py-2 space-y-2 lg:space-y-0 '>
            <button type="button" className='text-white text-xs px-4 bg-blue-900 shadow shadow-teal-800 rounded-full transition-all duration-200 p-1'>Sign In</button>
            <button type="button" className='text-white text-xs px-4 shadow shadow-teal-800 rounded-full bg-gradient-to-b from-red-900 to-purple-700 p-1'>Sign Up</button>
          </div>
        </div>
     </nav>
    </>
  )
}
