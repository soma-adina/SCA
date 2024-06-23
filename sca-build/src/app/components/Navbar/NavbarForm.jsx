'use client'
import React, { useState } from 'react'

// icons
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

export default function () {
    const [category, setCategory]=useState(false)
  return (
    <div>
      <div className='absolute w-full min-h-20 left-0 shadow-xl bg-slate-200 top-0 z-10'>
        <div className="w-10/12 my-20 mx-auto">
          <div>
            <h3 className='text-tertiary font-bold mb-3'>Trending Topics</h3>
            <ul className='leading-8'>
              <li><a href="#" className='text-primary hover:text-secondary font-semibold'>Nintendo Switch - OLED: Mario Red Edition</a></li>
              <li><a href="#" className='text-primary hover:text-secondary font-semibold'>Nintendo Switch</a></li>
              <li><a href="#" className='text-primary hover:text-secondary font-semibold'>Super Mario Bros. Wonder</a></li>
              <li><a href="#" className='text-primary hover:text-secondary font-semibold'>Nintendo Switch games</a></li>
              <li><a href="#" className='text-primary hover:text-secondary font-semibold'>Zelda games</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* navbar form */}
      <div className='relative flex items-center gap-2 border-solid border-tertiary hover:border-primary border-b z-40'>
        
            <IoMdSearch className='absolute z-50  top-2 ml-2 w-5 left-0 hover:text-primary ' />
            <input type="text" placeholder= 'Search'
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
