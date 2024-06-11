import React from 'react'
import Image from 'next/image';
// icons
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../logo/Nintendo-logo.png"

export default function beforeFooter() {
  return (
    <div className="w-full bg-primary">
        <div className="container mx-auto flex flex-col items-center justify-between py-8 md:flex-row">

          <div className='w-full flex justify-center md:justify-start py-4 md:py-0 md:w-1/2'>
            <Image src={logo} className='w-1/2 md:w-1/3'/>
          </div>


          <div className='w-full  flex gap-12 py-4 justify-center  text-3xl text-white md:py-0 md:text-4xl md:justify-end md:w-1/2'>
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
          </div>
        </div>

      </div>
  )
}
