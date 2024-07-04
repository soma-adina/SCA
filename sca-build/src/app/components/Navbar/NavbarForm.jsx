'use client'
import React, { useState } from 'react'
import Image from 'next/image';

// icons
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

// image
import MarioRed from '../logo/MarioRed1.png'
import MarioBros from '../logo/mariobros.png'

export default function NavbarForm () {
    const [category, setCategory]=useState(false)
    const [searchOpen, setSearchOpen] =useState(false)
  return (
    <div>
      {/* search bar dropdown */}
      {searchOpen &&(
      <div className='absolute w-full min-h-20 left-0 shadow-xl bg-white py-8 top-0 z-10'>
        <div className="flex justify-end mr-4">
        <IoMdCloseCircle onClick={()=>{setSearchOpen(false)}} className='text-3xl text-tertiary cursor-pointer'/>
        </div>
        
        <div className="w-10/12 my-4 mx-auto">
        
          <div className='w-1/2 my-8'>
            <h3 className='text-tertiary font-bold mb-3'>Trending Topics</h3>
            <ul className='leading-7'>
              <li><a href="#" className='text-primary text-sm hover:text-secondary font-semibold'>Nintendo Switch<sup>TM</sup> - OLED: Mario Red Edition</a></li>
              <li><a href="#" className='text-primary text-sm hover:text-secondary font-semibold'>Nintendo Switch</a></li>
              <li><a href="#" className='text-primary text-sm hover:text-secondary font-semibold'>Super Mario Bros. Wonder</a></li>
              <li><a href="#" className='text-primary text-sm hover:text-secondary font-semibold'>Nintendo Switch games</a></li>
              <li><a href="#" className='text-primary text-sm hover:text-secondary font-semibold'>Zelda games</a></li>
            </ul>
          </div>

          <div className="w-3/5">
            <h3 className='text-tertiary font-bold mb-3'>Top Store Products</h3>
            <div className='w-full flex flex-wrap justify-between'>

              <div className='w-[49%] flex my-2  items-center border-solid border border-gray-300 rounded-xl'>
                <div className="w-2/6 ">
                  <Image
                  alt=''
                  className='w-full'
                  src={MarioRed}
                  />
                </div>
                <div className="w-4/6 py-4 px-2">
                  <div className="">
                    <h3>
                    <a href="#" className='text-tertiary text-sm hover:text-primary font-semibold'>Nintendo Switch<sup>TM</sup> - OLED: Mario Red Edition</a>
                    </h3>
                  </div>
                  <div className='flex items-center justify-between border-l-2 border-solid border-primary px-1 mt-3'>
                    <h3 className='text-sm'>Hardware</h3>
                    <FaRegHeart className='text-xl font-bold text-primary hover:text-secondary'/>
                  </div>
                </div>
              </div>

              <div className='w-[49%] flex my-2  items-center border-solid border border-gray-300 rounded-xl'>
                <div className="w-2/6  bg-cover">
                  <Image
                  alt=''
                  className='object-fill'
                  src={MarioBros}
                  />
                </div>
                <div className="w-4/6 py-4 px-2">
                  <div className="">
                    <h3>
                    <a href="#" className='text-tertiary text-sm hover:text-primary font-semibold'>Super Mario Bros.<sup>TM</sup> Wonder</a>
                    </h3>
                  </div>
                  <div className='flex items-center justify-between border-l-2 border-solid border-primary px-1 mt-3'>
                    <h3 className='text-sm'>Nintendo Switch</h3>
                    <FaRegHeart className='text-xl font-bold text-primary hover:text-secondary'/>
                  </div>
                </div>
              </div>


              <div className='w-[49%] flex my-2  items-center border-solid border border-gray-300 rounded-xl'>
                <div className="w-2/6 ">
                  <Image
                  alt=''
                  className='object-fill'
                  src={MarioBros}
                  />
                </div>
                <div className="w-4/6 py-4 px-2">
                  <div className="">
                    <h3>
                    <a href="#" className='text-tertiary text-sm hover:text-primary font-semibold'>Super Mario RPG<sup>TM</sup></a>
                    </h3>
                  </div>
                  <div className='flex items-center justify-between border-l-2 border-solid border-primary px-1 mt-3'>
                    <h3 className='text-sm'>Nintendo</h3>
                    <FaRegHeart className='text-xl font-bold text-primary hover:text-secondary'/>
                  </div>
                </div>
              </div>


              <div className='w-[49%] flex my-2  items-center border-solid border border-gray-300 rounded-xl'>
                <div className="w-2/6 ">
                  <Image
                  alt=''
                  className='object-fill'
                  src={MarioBros}
                  />
                </div>
                <div className="w-4/6 py-4 px-2">
                  <div className="">
                    <h3>
                    <a href="#" className='text-tertiary text-sm hover:text-primary font-semibold'>WarioWare<sup>TM</sup>: Move It!</a>
                    </h3>
                  </div>
                  <div className='flex items-center justify-between border-l-2 border-solid border-primary px-1 mt-3'>
                    <h3 className='text-sm'>Nintendo</h3>
                    <FaRegHeart className='text-xl font-bold text-primary hover:text-secondary'/>
                  </div>
                </div>
              </div>

              


            </div>
          </div>
        </div>
      </div>
      )}

      {/* navbar form */}
      <div className='relative hidden  lg:flex items-center gap-2 border-solid border-tertiary hover:border-primary border-b z-40'>
        
            <IoMdSearch className='absolute z-50  top-2 ml-2 w-5 left-0 hover:text-primary ' />
            <input type="text" placeholder= 'Search' onClick={()=>{setSearchOpen(true)}}
            className='relative z-40 py-2 pr-3 pl-8 placeholder:text-gray-400  hover:placeholder-primary text-xs border-none  outline-none'/>
            <button 
                
                onClick={()=>setCategory((prev)=>!prev)}
                className='relative -z-40 text-sm font-semibold text-tertiary flex items-center gap-1 hover:text-primary'>
                    
                All Categories 
                {!category?(<IoIosArrowDown />) : (<IoIosArrowUp />)}
                
            </button>
            {category && (
                <div className='bg-white min-w-40 shadow-md mt-px absolute right-0 top-full z-30 rounded-lg'>
                <ul className='py-2'>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '>All Categories</a></li>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '>Games</a></li>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '>Merchandise</a></li>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '>Hardware </a></li>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '>News & events </a></li>
                    <li className='px-2 hover:bg-gray-300'><a href="#" className='text-xs font-medium text-tertiary '> Support </a></li>
                </ul>

            </div>
            )}

            
            
       
        
    </div>
    </div>
    
  )
}
