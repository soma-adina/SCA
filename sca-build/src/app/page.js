'use client'
import React, { useState } from 'react'

// icons


import { IoMdCloseCircleOutline } from "react-icons/io";
import SectionOne from './components/Home/SectionOne';
import Swip from './components/Home/Swip';
import SectionTwo from './components/Home/SectionTwo';
import SectionThree from './components/Home/SectionThree';


export default function Home() {
  const[isOpen, setIsOpen]=useState(null);
  const dropDown=(i)=>{
    if (isOpen === i){
      return setIsOpen(null)
    }

    setIsOpen(i)

  }

  const data=[
    {
      title:"games",
      content:"lorem is a great first generator"
    },
    {
      title:"Nintendo Switch ",
      content:"lorem is a great second generator"
    },
    {
      title:"gacardmes",
      content:"lorem is a great third generator"
    }
  ]
  return (
    <>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>

    <div className='container mx-auto bg-red-300 my-12'>
      <h2 className='text-primary font-bold text-3xl'>Nintendo Home</h2>
    </div>
    <div className='container mx-auto'>
      {data.map((item,i)=>(
        <div className='w-1/2 bg-blue-200 my-4 p-5 ' >
          <h2 className='font-bold cursor-pointer' onClick={()=>dropDown(i)}>{item.title}</h2>
          <p className={isOpen===i?'block':'hidden'} >
            {item.content}

            <IoMdCloseCircleOutline onClick={()=>setIsOpen(null)}/>
          </p>
        </div>
      ))}
    </div>
    
    
    </>
  )
}
