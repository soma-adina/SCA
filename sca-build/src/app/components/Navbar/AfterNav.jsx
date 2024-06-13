import React from 'react'

import { FaTruckArrowRight } from "react-icons/fa6";
import { RiCoinsLine } from "react-icons/ri";

export default function AfterNav() {
  return (
    <div className='w-full bg-gray-100 py-4'>
        <div className="container mx-auto flex items-center justify-center">
            <div className='flex items-center gap-2 border-none lg:border-r border-gray-400 lg:border-solid px-5'>
                <FaTruckArrowRight className='text-2xl text-primary' />
                <p className='text-tertiary'>
                     <span className='font-semibold'>Free shipping</span> on orders $50 or more. <a href="#" className='underline'> Restrictions apply.</a>
                </p>
            </div>
            <div className='hidden items-center gap-2 px-5 lg:flex'>
                <RiCoinsLine className='text-2xl text-primary' />
                <p className='text-tertiary'>
                    Earn My <span className='font-semibold'><a href="#" className='underline'>Nintendo Points</a></span> on digital games
                </p>
            </div>
        </div>
    </div>
  )
}
