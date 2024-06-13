import React from 'react'
import Image from 'next/image'
import USLogo from '../logo/US-flag.png'

export default function AfterFooter() {
  return (
    <div className='w-full bg-slate-950 text-slate-50 py-8 px-3'>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 py-3">
          <p className='text-xs text-center md:text-left'>
            &copy; Nintendo. Games are property of their respective owners. 
            Nintendo of America Inc. Headquarters are in Redmond, Washington, USA
          </p>
        </div>
        <div className=" flex w-full flex-wrap justify-center md:w-1/2 md:justify-end">
          <div className="flex justify-center gap-x-4 px-5 py-5 md:py-3">
            <a href="#" className='text-xs font-medium hover:underline decoration-secondary decoration-2 underline-offset-4'>Contact us</a>
            <a href="#" className='text-xs font-medium hover:underline decoration-secondary decoration-2 underline-offset-4'>Website feedback</a>
            <a href="#" className='text-xs font-medium hover:underline decoration-secondary decoration-2 underline-offset-4'>Terms of use</a>
            <a href="#" className='text-xs font-medium hover:underline decoration-secondary decoration-2 underline-offset-4'>Documents & policies</a>
          </div>
          <div className="flex items-center justify-end gap-x-3 py-5 md:py-3">
            <Image src={USLogo} width={25} className='rounded-s'/>
            <a href="#" className='text-xs font-medium hover:underline decoration-white decoration-2 underline-offset-4'>
              English (United States)</a>
          </div>
        </div>
      </div>
        
    </div>
  )
}
