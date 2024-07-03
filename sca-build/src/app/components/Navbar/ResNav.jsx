import React from 'react'

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart, FaSearch, FaShoppingCart} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


export default function ResNav() {
  return (
    <nav className='bg-transparent fixed left-0 z-[100] block lg:hidden bottom-0 w-full  mb-10 min-h-8 mx-auto'>
      
      <div className='bg-white  md:w-2/4 w-3/4 mx-auto shadow-lg rounded-full'>
        <div className='w-5/6 mx-auto flex items-center justify-between'>
          <div className='text-tertiary font-bold text-2xl transition duration-500 hover:text-primary'>
            <GiHamburgerMenu/>
          </div>
          <div className='text-tertiary font-bold text-2xl transition duration-500 hover:text-primary'>
            <FaHeart/>
          </div>
          <div className='text-white font-bold text-4xl bg-primary p-3  -translate-y-2 rounded-full transition duration-500'>
            <FaSearch/>
          </div>
          <div className='text-tertiary font-bold text-2xl transition duration-500 hover:text-primary'>
            <FaShoppingCart />
          </div>
          <div className='text-tertiary font-bold text-2xl transition duration-500 hover:text-primary'>
            <IoPerson/>
          </div>
        
        </div>
        
      </div>
    </nav>
  )
}
