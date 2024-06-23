import React from 'react'
import Image from 'next/image'

// images
import logo from "../logo/Nintendo-logo.png"
import flag from "../logo/US-flag.png"
// icon
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

// icons
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoCloudCircle } from "react-icons/io5";

import NavbarForm from './NavbarForm';

export default function TopNav() {
  return (
    <div className='bg-primary lg:bg-white flex items-center justify-between border-b border-solid border-gray-300 relative'>
        <div className="flex items-center gap-3">
            <div className='py-3 px-2 bg-primary relative z-40'>
                <Image
                src={logo}
                width={100}
                />
            </div>

            {/* navbar form */}
            
                <NavbarForm/>

        </div>
        <div className="flex lg:hidden px-4">
            <ul className='flex text-white gap-5 items-center '>
                    <li>
                        <a href="#" className='flex items-center font-semibold gap-2'>
                            <span className='text-lg'><IoCloudCircle /></span> 
                            My Nintendo Store
                        </a>
                    </li>
                    <li>
                    <a href="#">
                        <Image className='rounded' src={flag} width={28}/>
                    </a>
                </li>
            </ul>
        </div>
        <div className=" px-4 hidden lg:flex">
            <ul className='flex text-tertiary gap-5 items-center '>
                <li>
                    <a href="#" className='flex items-center text-sm font-semibold hover:text-primary gap-2'>
                        <span className='text-lg'><BsFillQuestionSquareFill /></span> 
                            Support
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center text-sm font-semibold hover:text-primary gap-2'>
                        <span className='text-lg'><FaHeart /></span> 
                            Wishlist
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center text-sm font-semibold hover:text-primary gap-2'>
                        <span className='text-lg'><FaShoppingCart /></span> 
                            Cart
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center text-sm font-semibold hover:text-primary gap-2'>
                        <span className='text-lg'><FaUserAlt /></span> 
                            Sign Up / Log in
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Image className='rounded' src={flag} width={28}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
