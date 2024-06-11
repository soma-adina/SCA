import React from 'react'
import BeforeFooter from './BeforeFooter';
import MainFooter from './MainFooter';
// icons
import { FaFacebook} from "react-icons/fa";


export default function Footer() {
  return (
    <div className='bg-rose-300'>
      {/* before footer */} 
      <BeforeFooter/>

      {/* main footer */}
      <MainFooter/>
      
        <FaFacebook className='text-white'/>
        Footer
    </div>
  )
}
