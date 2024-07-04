'use client'
import React, { useState } from 'react'
import { IoCloudCircle } from "react-icons/io5";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { GiJusticeStar } from "react-icons/gi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdGames } from "react-icons/md";

export default function MainNav() {
  const[isOpen, setIsOpen]=useState(null);
  const dropDown=(i)=>{
    if (isOpen === i){
      return setIsOpen(null)
    }

    setIsOpen(i)

  }

  const data=[
    {
      id:1,
      title:"My Nintendo Store",
      content:"lorem is a great first generator",
      navIcon: <IoCloudCircle/>
    },
    {
      id:2,
      title:"Games ",
      content:"lorem is a great second generator",
      navIcon: <MdGames/>
    },
    {
      id:3,
      title:"Nintendo Switch",
      content:"lorem is a great third generator",
      navIcon: <BsNintendoSwitch/>,
    },
    {id:5,
      title:"News & Events",
      content:"lorem is a great third generator",
      navIcon: <BiSolidMessageDetail/>,
    },
    {
      id:6,
      title:"Play Nintendo",
      content:"lorem is a great third generator",
      navIcon: <GiJusticeStar/>,
    },
  ]
  return (
    <div className='hidden lg:block w-full py-4 border-b border-solid border-gray-300 bg-white relative'>
    <nav className='container mx-auto'>
    
      <ul className='flex items-center justify-center gap-4'>
      {data.map((item,i)=>(
      <li key={item.id}>
        <a href="#" className='text-tertiary text-sm font-bold flex items-center gap-1 focus:text-primary  hover:text-primary' onClick={()=>dropDown(i)}>
            <span className='text-xl'>{item.navIcon}</span>{item.title} <span>{isOpen===i?(<MdKeyboardArrowUp />):(<MdKeyboardArrowDown />)}</span>
        </a>

        {/* dropdown */}
        <div className={isOpen===i?'absolute min-h-10 w-full bg-slate-500 top-full left-0':'hidden'}>
          <p className="text-white">
            {item.content}
          </p>
          <span className="cursor-pointer" onClick={()=>{setIsOpen(null)}}><IoMdCloseCircleOutline /></span>
        </div>
      </li>
        
        // ////////////////////////////////////////////
        
        // //////////////////////////////////////////
      ))}
      {/* <li>OK</li> */}
      </ul>
    
    </nav>
    </div>
  )
}
