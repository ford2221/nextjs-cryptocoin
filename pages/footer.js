
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="bg-blue-100 text-gray-500 px-3 flex lg:gap-32 xl:gap-32 gap-10 py-14 text-xs leading-loose  justify-center font-sans">
        <ul >
          <h2 className="font-bold underline">Products</h2>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Crypto API</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Blockchain Explorer</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Crypto Indices</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Jobs Board</li>
        </ul>

        <ul>
          <h2 className="font-bold underline">Company</h2>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">About us</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Privacy Policy</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Community Rules</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Methodology</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Terms of use</li>

          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Careers</li>
        </ul>

        <ul>
          <h2 className="font-bold underline">Support</h2>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Request Form</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Contact Support</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">FAQ</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Glossary</li>
        </ul>
        <ul>
          <h2 className="font-bold underline">Socials</h2>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Facebook</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Twitter</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Telegram</li>
          <li className="hover:cursor-pointer hover:text-blue-500 hover:underline">Instagram</li>
        </ul>
      </div>
      <div className="p-3 text-center text-gray-600 text-xs bg-blue-200 font-sans leading-loose ">
        Ford-Ndji Joseph, Software engineer. <br />
        <a href="mailto:fordstelle@gmail.com" className="hover:underline hover:text-blue-700">fordstelle@gmail.com</a>
      </div>
    </>
  )
}
