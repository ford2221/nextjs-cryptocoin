import React, { useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [popupState, setPopupState] = useState(false)
  const onTriggerPopup = () => setPopupState(!popupState)
  console.log(popupState);
  return (
    <>
     <nav className='flex justify-between px-6 p-2 items-center bg-gradient-to-r from-blue-900 to-transparent fixed w-full' >
      <div className='flex'>
        <Link href='/' className='text-3xl font-bold text-white hover:cursor-pointer'>
          CryptoCoin
        </Link>
        <button onClick={onTriggerPopup} type="button" className='text-white lg:hidden xl:hidden pl-60'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className={`transition-transform duration-300 lg:flex rounded-lg px-6 bg-blue-800 w-30 h-auto fixed right-6 top-10
          ${popupState ? 'block' : 'hidden' }`}>

        <ul className='lg:flex xl:flex items-center gap-10'>
          <li className='text-white hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>Products</li>
          <li className='text-white hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>News</li>
          <li className='text-white hover:text-gray-600 transition-all duration-200 hover:cursor-pointer'>Live Pricing</li>
        </ul>
        <div className='flex flex-col'>
          <button type="button" className='text-white rounded-full transition-all duration-200 hover:text-purple-800 p-2'>Sign In</button>
          <button type="button" className='text-white px-4 shadow shadow-teal-900 rounded-full bg-gradient-to-b from-red-900 to-purple-700 p-2'>Sign Up</button>
        </div>
      </div>
     </nav> 
    </>
  )
}