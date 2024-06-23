import React from 'react';
import Image from 'next/image';

// images
import bannerImg from '../logo/strawdew.png'

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SectionOne() {
  return (
    <div className='bg-temp relative'>
      <div className="w-11/12 relative bg-white mx-auto py-5 px-7 translate-y-8 rounded-xl shadow-2xl">
        <div className='py-4'>
          <ul className='flex items-center gap-2'>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Store</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Games</li>
            <li className='text-gray-400'><MdKeyboardArrowRight /></li>
            <li className='text-tertiary text-xs font-medium cursor-pointer'>Strawdew Valley</li>
          </ul>
        </div>
        <div className='flex'>
          <div className="w-3/5 rounded-lg">
            <Image
              className='w-full rounded-lg'
              src={bannerImg}
            />
          </div>
          <div className='w-2/5 px-8'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minima ea voluptatum soluta 
              voluptates expedita minus totam illo maxime quaerat. 
              Reiciendis vel veniam, voluptates sit eius deserunt beatae alias quae!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minima ea voluptatum soluta 
              voluptates expedita minus totam illo maxime quaerat. 
              Reiciendis vel veniam, voluptates sit eius deserunt beatae alias quae!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel minima ea voluptatum soluta 
              voluptates expedita minus totam illo maxime quaerat. 
              Reiciendis vel veniam, voluptates sit eius deserunt beatae alias quae!
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
