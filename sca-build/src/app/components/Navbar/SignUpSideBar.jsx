'use client'
import React, { useState } from 'react'
import Image from 'next/image';

// images
import SideBanner from '../img/sidebar.avif'

// icons
import { IoMdCloseCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import { IoCloudCircle } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function SignUpSideBar() {
    const [sideBar, setSideBar]=useState(false)

  return (
    <li >
                    <a onClick={()=>setSideBar(true)} href="#" className='flex relative items-center text-sm font-semibold hover:text-primary gap-2'>
                        <span className='text-lg'><FaUserAlt /></span> 
                            Sign Up / Log in
                    </a>
                    {/* sign up side bar */}

        {sideBar &&(
                    
        <div className='absolute top-0 z-40 mt right-0 w-3/12 h-screen bg-gray-100 shadow-xl py-5 px-4 sidebar'>
            <div className="flex items-center justify-between mb-7">
                <h2 className='text-2xl font-semibold text-tertiary'>
                    Log in / Sign up
                </h2>

                <IoMdCloseCircle onClick={()=>setSideBar((prev)=>!prev)} className='text-3xl text-gray-400 hover:text-tertiary cursor-pointer'/>
            </div>
            <div className="w-full bg-white my-5 py-4 px-8 rounded-lg">
                <div>
                    <Image className="w-full"
                    src={SideBanner}
                    />
                </div>
                <div className='font-semibold px-2'>
                    <h4>With a free account you can</h4>
                    <ul className='leading-7'>
                        <li className='flex items-center gap-2 text-sm'><FaCheck/> Shop online</li>
                        <li className='flex items-center gap-2 text-sm'><FaCheck/> Earn My Nintendo points</li>
                        <li className='flex items-center gap-2 text-sm'><FaCheck/> Save a Wish List</li>
                    </ul>
                </div>

                
            </div>

        {/* side large buttons */}
            <div>
                <button 
                    className='w-full p-2 my-1 rounded-xl font-semibold text-lg border-box bg-primary hover:bg-secondary transition-colors duration-300 text-white'>
                        Log in
                </button>
                <button 
                    className='w-full p-2 my-1 rounded-xl font-semibold text-lg border border-primary bg-white hover:bg-red-100 transition-colors duration-300 text-primary hover:text-secondary hover:border-secondary'>
                        Sign up
                </button>

                <button 
                    className='w-full py-2 flex items-center gap-2 px-6 my-3 rounded-xl text-left font-semibold  border border-gray-300 bg-white transition-colors duration-300 text-tertiary hover:text-primary '>
                        <FaClipboardList className='text-primary'/> Sign up
                </button>
            </div>

        {/* last section */}
            <section className='bg-white -translate-x-full rounded-xl shadow-lg '>
                <a href="#" className='p-3 text-tertiary w-full flex items-center justify-between border-b border-gray-300 hover:text-primary'>
                    <div className='flex items-center gap-2'>
                        <IoCloudCircle className='text-2xl text-primary'/>
                        <h4 className='font-semibold'>My Nintendo</h4>
                    </div>
                    <div>
                        <MdOpenInNew/>
                    </div>
                </a>
                <a href="#" className='p-3 text-tertiary w-full flex items-center justify-between border-b border-gray-300 hover:text-primary'>
                    <div className='flex items-center gap-2'>
                        <FaGift className='text-2xl text-primary'/>
                        <h4 className='font-semibold'>Redeem Code</h4>
                    </div>
                    <div>
                        <MdOpenInNew/>
                    </div>
                </a>
                <a href="#" className='p-3 text-tertiary w-full flex items-center justify-between hover:text-primary'>
                    <div className='flex items-center gap-2'>
                        <IoMdSettings className='text-2xl text-primary'/>
                        <h4 className='font-semibold'>Account settings</h4>
                    </div>
                    <div>
                        <MdOpenInNew/>
                    </div>
                </a>
            </section>
        </div>
        )}
    </li>
    
  )
}
