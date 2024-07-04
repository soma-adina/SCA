'use client'
import React, { useEffect, useState } from 'react'


import { GrDownload } from "react-icons/gr";



export default function StickyNav() {
    const[stickNav, setStickNav]=useState(false)

    useEffect(()=>{
        const sticky=()=>{


            if(window.scrollY >= 500){
                setStickNav(true)
            }else{
                setStickNav(false)
            }
        }
        window.addEventListener("scroll", sticky)
    },[])

  
    

    

    
  return (
    <div className={stickNav ? " bg-gray-200 fixed top-0 shadow-xl left-0  z-50 w-full hidden lg:block" : "hidden"}>
        <div className='w-full  flex items-center'>

        
            <div className='w-11/12 mx-auto flex items-center justify-between py-3'>
                <div>
                    <h2 className='text-tertiary font-semibold text-xl'>Stardew Valley</h2>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-3'>
                        <h5 className='text-tertiary text-xs font-medium'>Digital</h5>
                        <h3 className='text-tertiary text-md font-semibold'>$14.99</h3>
                    </div>


                    <div>

                    <button className='bg-primary px-6 py-2 rounded-full hover:scale-x-105 transition duration-300 ease-out hover:bg-secondary'>
                        <a href="#" className="text-white text-md font-semibold flex items-center justify-center  gap-2"><GrDownload/> Direct Download</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
