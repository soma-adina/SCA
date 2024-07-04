'use client'
import { useState } from 'react'

// icons
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function ReadMore({children}) {
  const [openText, setOpenText]=useState(false)
   const readBtn =()=>{
      setOpenText(prev => !prev)
      
   }


  return (
    <div>
      <p className='text-tertiary leading-7'>
        {openText ? children : children.substr(0,500)}
      </p>
        
        <button onClick={readBtn} className='flex items-center gap-1 text-primary font-semibold text-sm hover:text-secondary my-4'>
        {openText ?  <FaMinus/> : <FaPlus/>} {openText ?  'Read Less' : ' Read More'}

        </button>
    </div>
  )
}
